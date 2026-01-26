import { imageSchema } from "@/reusable/schema/reusableSchema";
import z from "zod";

export const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  image_url: imageSchema.optional(),
  seo_title: z.string().optional(),
  seo_description: z.string().optional(),
  seo_keywords: z.string(),
  seo_image_url: imageSchema.optional(),
  status: z.boolean().default(true),
  image_file: z.string().optional(),
  seo_image_file: z.string().optional(),
});


export type CategoryTypes  = z.infer<typeof categorySchema>