// import { JSON_HEADER } from "@/lib/constants/api.constants";
// import { getToken } from "next-auth/jwt";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET (req:NextRequest) {
// const token = await getToken({req});
// const examId = req.nextUrl.searchParams.get('exam');
// const respons = await fetch(`${process.env.API}/questions?exam=${examId}`,{
//     method: 'GET',
//     headers: {
//         ...JSON_HEADER,
//         token: token?.token || '',
//     },
// })
// const payload = await respons.json();
// console.log('payloadgetExamaap', payload.message);
// console.log('examId', examId);
// return NextResponse.json(payload,{status: 200});

// }

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const JWT = await getToken({ req });

  const response = await fetch(`${process.env.API}/questions?${searchParams.toString()}`, {
    headers: {
      token: JWT?.token || "",
    },
  });

  const payload: APIResponse<{ questions: Question[] }> = await response.json();

  return NextResponse.json(payload, { status: response.status });
}
