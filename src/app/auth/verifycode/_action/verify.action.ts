"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import { UseResetCode } from "@/lib/schemes/auth.scheme";

export default async function VerifycodeAction(values: UseResetCode) {
  const respones = await fetch(`${process.env.API}/auth/verifyResetCode`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload = await respones.json();
  console.log("Verifycodeform", payload);

  return payload;
}
