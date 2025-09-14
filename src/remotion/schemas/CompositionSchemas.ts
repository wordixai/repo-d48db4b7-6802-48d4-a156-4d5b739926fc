import { z } from 'zod';

export const codeSnippetSchema = z.object({
  code: z.string(),
  language: z.string(),
  highlightLines: z.array(z.number()).optional(),
});

export const dataPointSchema = z.object({
  name: z.string(),
  users: z.number(),
  revenue: z.number(),
});

export const tutorialSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  codeSnippets: z.array(codeSnippetSchema),
  brandColor: z.string(),
  logoUrl: z.string().optional(),
});

export const presentationSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  data: z.array(dataPointSchema),
  brandColor: z.string(),
  logoUrl: z.string().optional(),
});

export const productDemoSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  features: z.array(z.string()),
  brandColor: z.string(),
  logoUrl: z.string().optional(),
});

export type TutorialProps = z.infer<typeof tutorialSchema>;
export type PresentationProps = z.infer<typeof presentationSchema>;
export type ProductDemoProps = z.infer<typeof productDemoSchema>;