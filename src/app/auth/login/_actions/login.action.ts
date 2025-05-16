"use server";
import { JSON_HEADER } from "@/lib/constants/api.constants";
import { UseLoginSchema } from "@/lib/schemes/auth.scheme";

export default async function LoginAcyion(values: UseLoginSchema) {
  const respones = await fetch(`${process.env.API}/auth/signin`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload = await respones.json();
  console.log("login", payload);
  return payload;
}
