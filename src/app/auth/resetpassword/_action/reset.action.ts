"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import { UseResetPassword } from "@/lib/schemes/auth.scheme";

export default async function ResetPasswordAction(values: UseResetPassword) {
  const respones = await fetch(`${process.env.API}/auth/resetPassword`, {
    method: "PUT",
    body: JSON.stringify(values),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload = await respones.json();
  console.log("ResetPassword", payload);
  return payload;
}
