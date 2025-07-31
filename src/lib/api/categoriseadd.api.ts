import { JSON_HEADER } from "../constants/api.constants";

export default async function CategoriseAddapi(CategoryData: {
  [key: string]: unknown;
}) {
  const response = await fetch(
    "https://flower.elevateegy.com/api/v1/categories",
    {
      method: "POST",
      body: JSON.stringify(CategoryData),
      headers: {
        ...JSON_HEADER,
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjgyY2IwMjYxNDMzYTY2NmM4ZGU2NTY4Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NDc3NTkxNzN9.DWZdC74oX8T2V42v1ohkXNVEnuiZja3cFj125709iss",
      },
    }
  );
  const payload = await response.json();
  console.log("payloadadd", payload);
  // if (payload.status !== "success") {
  //   throw new Error(payload.message);
  // }
  return payload;
}
