"use server";
import { UseRegisterSchema } from "./../../../../lib/schemes/auth.scheme";

import { JSON_HEADER } from "@/lib/constants/api.constants";

export default async function Registeracyion(valuse: UseRegisterSchema) {
  const respones = await fetch(`${process.env.API}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(valuse),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload = await respones.json();
  console.log("payloadavtion", payload);
  return payload;
}
