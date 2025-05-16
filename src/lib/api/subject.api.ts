import { getAuthHeader } from "../utils/auth-header";

export async function getExams(searchParams: string) {
  const response = await fetch(`${process.env.API}/exams?${searchParams}`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });
  //: APIResponse<{ questions: Question[] }>
  const payload: APIResponse<{ subject: CheckResponseSubject[] }> =
    await response.json();

  return payload;
}
