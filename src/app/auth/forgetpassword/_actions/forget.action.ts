"use server";
import { JSON_HEADER } from "@/lib/constants/api.constants";
import { UseForgotPassword } from "@/lib/schemes/auth.scheme";

export default async function ForgotPassword(values: UseForgotPassword) {
  const respones = await fetch(`${process.env.API}/auth/forgotPassword`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload = await respones.json();
  console.log("forgotPassword", payload);
  // console.log("forgotPassword", payload.message);
  return payload;
}
