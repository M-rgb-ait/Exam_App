// import { getAuthHeader } from "../utils/auth-header";

// export async function categoriesId(id: string) {
//   const response = await fetch(
//     `https://flower.elevateegy.com/api/v1/categories/${id}`,
//     {
//       headers: {
//         ...(await getAuthHeader()),
//       },
//     }
//   );
//   const payload: categoriesdetdels = await response.json();
//   console.log("categoriesdetdels", payload);

//   return payload;
// }
import { getAuthHeader } from "@/lib/utils/auth-header";

export default async function CategoriesApiPage(id: string) {
  const response = await fetch(
    `https://flower.elevateegy.com/api/v1/categories/${id}`,
    {
      method: "GET",
      headers: {
        ...(await getAuthHeader()),
      },
    }
  );
  const payload: categoriesdetdels = await response.json();
  // console.log("categoriesdetdels", payload);
  return payload;
}
