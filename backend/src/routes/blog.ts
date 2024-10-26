// import { PrismaClient } from "@prisma/client/edge";
import { createbloginput, updateBlog } from "@kartikeynamdev/medium-common";
import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("Authorization");
  if (!header) {
    c.status(401);
    return c.json({
      msg: "Unauthorized",
    });
  }
  const token = header.split(" ")[1];
  const response = await verify(token, c.env.JWT_SECRET);
  if (!response) {
    c.status(411);
    return c.json({
      error: "Wrong Auth header",
    });
  }
  //@ts-ignore
  c.set("userId", response.id);
  await next();
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const success = createbloginput.safeParse(body);
  if (!success) {
    return c.json({
      msg: "Wrong input",
    });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: 1,
    },
  });

  return c.json({
    blog,
  });
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const success = updateBlog.safeParse(body);
  if (!success) {
    return c.json({
      msg: "Wrong input",
    });
  }
  const blog = await prisma.blog.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return c.json({
    id: blog.id,
    msg: "Done",
  });
});

blogRouter.get("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: body.id,
      },
    });
    return c.json({
      //@ts-ignore
      blog,
    });
  } catch (e) {
    return c.json({ msg: e });
  }
});

blogRouter.get("/bulk", async (c) => {
  //pagination
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blog = await prisma.blog.findMany();
    return c.json({
      //@ts-ignore
      blog,
    });
  } catch (e) {
    return c.json({ msg: e });
  }
});
