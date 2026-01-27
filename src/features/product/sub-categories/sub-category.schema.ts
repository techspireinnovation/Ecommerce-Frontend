import { imageSchema } from "@/reusable/schema/reusableSchema";
import { z } from "zod";

export const subCategorySchema = z.object({
  name: z.string(),
  category_id: z.string(),
  category_name: z.string().nullable(),

  image_url: imageSchema.nullable(),

  status: z.enum(["active", "inactive"]),

  seo_title: z.string().nullable().optional(),
  seo_description: z.string().nullable().optional(),
  seo_keywords: z.string().optional(),

  seo_image_url: z.string().url().nullable().optional(),

});


export type SubCategorytypes = z.infer<typeof subCategorySchema>;
