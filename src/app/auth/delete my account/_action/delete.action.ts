"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import { getAuthHeader } from "@/lib/utils/auth-header";

export async function DeleteMeAction() {
  const response = await fetch(`${process.env.API}/auth/deleteMe`, {
    method: "DELETE",
    headers: {
      ...JSON_HEADER,
      ...(await getAuthHeader()),
    },
  });

  const payload = await response.json();

  return payload;
}
