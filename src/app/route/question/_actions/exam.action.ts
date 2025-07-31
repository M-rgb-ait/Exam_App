"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import { AnswerFields } from "@/lib/schemes/exam.schemes";
import { getAuthHeader } from "@/lib/utils/auth-header";

export async function checkQuestionsAction(fields: AnswerFields) {
  const response = await fetch(`${process.env.API}/questions/check`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      ...(await getAuthHeader()),
      // "Content-Type": "application/json",
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<CheckResponse> = await response.json();

  return payload;
}
