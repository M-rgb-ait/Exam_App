import { z } from "zod";

export const ExamSchema = z.object({
  answers: z.array(
    z.object({
      questionId: z.string(),
      correct: z.string(),
    })
  ),
  time: z.number(),
});
export type AnswerFields = z.infer<typeof ExamSchema>;

// Why is it named resold?
export const resoldSchema = z.object({
  answers: z.array(
    z.object({
      total: z.string(),
      correct: z.number(),
      wrong: z.number(),
    })
  ),
});
export type AnswerResoldSchema = z.infer<typeof resoldSchema>;
