// import { PrismaClient } from "@prisma/client/edge";
import { createbloginput, updateBlog } from "@kartikeynamdev/medium-common";
import { Hono } from "hono";
import { getPrismaClient } from "../../prisma";

// In your handler
// Now use prisma for queries

import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: number;
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
  // const token = header.split(" ")[1];
  const response = await verify(header, c.env.JWT_SECRET);
  if (!response) {
    c.status(411);
    return c.json({
      error: "Wrong Auth header",
    });
  }

  c.set("userId", Number(response.id));
  console.log("Success");
  await next();
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const parsed = createbloginput.safeParse(body);

  if (!parsed.success) {
    c.status(400);
    return c.json({ msg: "Invalid input" });
  }

  const prisma = getPrismaClient(c.env.DATABASE_URL);
  const userId = c.get("userId");

  const readingTime = Math.ceil(body.content.split(" ").length / 200);

  const blog = await prisma.blog.create({
    data: {
      title: body.title,

      content: body.content,

      coverImage: body.coverImage,
      tags: body.tags,
      readingTime,
      published: body.published,
      authorId: userId,
    },
  });

  return c.json({ blog });
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const prisma = getPrismaClient(c.env.DATABASE_URL);

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

blogRouter.get("/bulk", async (c) => {
  const prisma = getPrismaClient(c.env.DATABASE_URL);

  console.log("Working");
  try {
    const blog = await prisma.blog.findMany({
      select: {
        title: true,
        content: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({
      blog,
    });
  } catch (e) {
    return c.json({ msg: e });
  }
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = getPrismaClient(c.env.DATABASE_URL);

  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json(blog);
  } catch (e) {
    console.log(e);
  }
});
