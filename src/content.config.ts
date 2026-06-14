import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// บล็อกทุกโพสต์ = ไฟล์ .md ใน src/content/blog/
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    // ชื่อ Lucide icon → https://lucide.dev/icons
    icon: z.string().default("file-text"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
