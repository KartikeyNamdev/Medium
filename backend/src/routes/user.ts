import { Hono } from "hono";
import { sign, verify } from "hono/jwt";
import { signinInput, signupInput } from "@kartikeynamdev/medium-common";
import { getPrismaClient } from "../../prisma";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();
userRouter.post("/signup", async (c) => {
  const prisma = getPrismaClient(c.env.DATABASE_URL);

  const body = await c.req.json();
  const success = signupInput.safeParse(body);
  if (!success) {
    return c.json({
      msg: "Wrong input",
    });
  }
  try {
    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        username: body.username,
        password: body.password,
      },
    });

    const jwt = await sign({ id: newUser.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
  } catch (e) {
    c.status(403);
    return c.json({ error: e });
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = getPrismaClient(c.env.DATABASE_URL);

  const body = await c.req.json();
  const success = signinInput.safeParse(body);
  if (!success) {
    return c.json({
      msg: "Wrong input",
    });
  }
  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        username: body.username,
        password: body.password,
      },
    });

    if (!existingUser) {
      return c.text("User doesn't exist");
    }
    const jwt = await sign({ id: existingUser.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
  } catch (e) {
    return c.json({ msg: "Wrong input" });
  }
});
