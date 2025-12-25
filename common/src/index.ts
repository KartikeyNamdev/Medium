import z from "zod";
export const signupInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export const signinInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

export const createbloginput = z.object({
  title: z.string().min(3),
  subtitle: z.string().optional(),
  content: z.string().min(50),
  excerpt: z.string().min(20),
  coverImage: z.string().url().optional(),
  tags: z.array(z.string()).max(5),
  published: z.boolean(),
});

export const updateBlog = z.object({
  id: z.number(),
  title: z.string().optional(),
  content: z.string().optional(),
});
export type SignupInput = z.infer<typeof signupInput>;
export type signinInput = z.infer<typeof signinInput>;
export type Createbloginput = z.infer<typeof createbloginput>;
export type UpdateBlogInput = z.infer<typeof updateBlog>;
