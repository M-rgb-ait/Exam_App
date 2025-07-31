// import { getAuthHeader } from "../utils/auth-header";

import { JSON_HEADER } from "../constants/api.constants";

export const categoriesApi = async () => {
  const response = await fetch(
    "https://flower.elevateegy.com/api/v1/categories",
    {
      headers: {
        // ...(await getAuthHeader()),
        ...JSON_HEADER,
      },
    }
  );
  //categoriestype[]
  const payload: categoriestype[] = await response.json();

  return payload;
};
