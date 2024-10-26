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
  title: z.string(),
  content: z.string(),
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
