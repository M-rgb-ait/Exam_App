"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import { UseChangePasswordScheme } from "@/lib/schemes/auth.scheme";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function ChangePasswordAction(
  values: UseChangePasswordScheme
) {
  const authCookie = cookies().get("next-auth.session-token")?.value;
  const token = await decode({
    token: authCookie,
    secret: process.env.NEXTAUTH_SECRET!,
  });
  const respones = await fetch(`${process.env.API}/auth/changePassword`, {
    method: "PATCH",
    body: JSON.stringify(values),
    headers: {
      ...JSON_HEADER,
      token: token?.token || "",
    },
  });

  const payload = await respones.json();
  console.log("ChangePasswordAction", payload);

  return payload;
}
