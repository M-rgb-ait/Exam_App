import { getAuthHeader } from "../utils/auth-header";

export async function getQuestions(searchParams: string) {
  const response = await fetch(`${process.env.API}/questions?${searchParams}`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<{ questions: Question[] }> = await response.json();

  return payload;
}
