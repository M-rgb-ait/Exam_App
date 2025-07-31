"use server";

import { JSON_HEADER } from "../constants/api.constants";
import { getAuthHeader } from "../utils/auth-header";

export default async function SubjectsMore(page: number) {
  const respones = await fetch(
    `${process.env.API}/subjects?limit=${3}&page=${page}`,
    {
      method: "GET",
      headers: {
        ...JSON_HEADER,
        ...(await getAuthHeader()),
      },
    }
  );

  const payload: CheckResponseSubject = await respones.json();
  // console.log("SubjectsMore", payload);
  return payload;
}

// // import { decode } from "next-auth/jwt";
// // import { cookies } from "next/headers";

// "use server";

// import { JSON_HEADER } from "../constants/api.constants";
// import { getAuthHeader } from "../utils/auth-header";

// export default async function SubjectsMore(page: number) {
//   //   const authCookie = cookies().get("next-auth.session-token")?.value;
//   //   const token = await decode({
//   //     token: authCookie,
//   //     secret: process.env.NEXTAUTH_SECRET!,
//   //   });
//   const respones = await fetch(
//     `${process.env.API}/subjects?limit=${2}&page=${page}`,
//     {
//       method: "GET",
//       headers: {
//         ...JSON_HEADER,
//         // token: token?.token || "",
//         ...(await getAuthHeader()),
//       },
//     }
//   );

//   const payload: CheckResponseSubject = await respones.json();
//   console.log("SubjectsMore", payload);
//   return payload;
// }
