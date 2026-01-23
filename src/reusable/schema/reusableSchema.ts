import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const imageSchema = z
  .union([
    z.instanceof(File),
    z.string().url(),
    z.undefined(),
    z.null(),
  ])
  .refine(
    (value) => {
      if (!value || typeof value === "string") return true;
      return value.size <= MAX_FILE_SIZE;
    },
    { message: "File size must be less than 5MB" }
  );
