import { defineCollection, reference, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      icon: image().or(z.string()),
      image: image(),
      startDate: z.date(),
      endDate: z.date().optional(),
      description: z.string(),
      draft: z.boolean().optional(),
      position: reference("education").or(reference("work")).optional(),
      technologies: z.array(z.string()).optional(),
      links: z
        .array(
          z.object({
            type: z.string(),
            url: z.string().url(),
            icon: z.string().optional(),
          }),
        )
        .optional(),
    }),
});

const education = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    degree: z.string(),
    icon: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    description: z.string().optional(),
    location: z.string(),
  }),
});

const work = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    role: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    description: z.string().optional(),
    location: z.string(),
  }),
});

export const collections = {
  projects,
  education,
  work,
};