import { z } from "zod";

export const tagSchema = z.object({
  tags: z.array(
    z.string().startsWith('tag:')
  ),
});

export type TagSchema = typeof tagSchema;
