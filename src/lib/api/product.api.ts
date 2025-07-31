// "use server";

import { convertSearchParams } from "../utils/conver-search-params";

export async function fetchProducts(searchParams: SearchParams) {
  const response = await fetch(
    `${process.env.APIF}/products?${convertSearchParams(searchParams).toString()}`
  );
  const payload: APIResponse<PaginatedResponse<{ products: Product[] }>> =
    await response.json();

  return payload;
}
