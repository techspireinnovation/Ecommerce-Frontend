import z from "zod";

export const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  logo: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => !file || file.size <= 5 * 1024 * 1024,
      "File size must be less than 5MB",
    ),
  seo_title: z.string().optional(),
  seo_description: z.string().optional(),
  seo_keywords: z.string().array().optional().default([]),
  seo_image: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => !file || file.size <= 5 * 1024 * 1024,
      "File size must be less than 5MB",
    ),
  status: z.boolean().default(true),
});


export type CategoryTypes  = z.infer<typeof categorySchema>