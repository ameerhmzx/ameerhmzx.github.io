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
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      degree: z.string(),
      icon: image().or(z.string()),
      startDate: z.date(),
      endDate: z.date().optional(),
      description: z.string().optional(),
      location: z.string(),
      url: z.string().url().optional(),
    }),
});

const work = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      icon: image().or(z.string()),
      role: z.string(),
      startDate: z.date(),
      endDate: z.date().optional(),
      description: z.string().optional(),
      location: z.string(),
      url: z.string().url().optional(),
      technologies: z.array(z.string()).optional(),
    }),
});

const recommendations = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      title: z.string(),
      company: z.string(),
      url: z.string().url(),
      image: image(),
      recommendation: z.string(),
    }),
});

export const collections = {
  recommendations,
  education,
  projects,
  work,
};
