import { useQuery } from "@tanstack/react-query";

export default function useCategories() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await fetch(
        "https://flower.elevateegy.com/api/v1/categories"
      );

      const payload: APIResponse<
        PaginatedResponse<{ categories: Category[] }>
      > = await response.json();

      if ("code" in payload) throw new Error(payload.message);
      console.log("error", error);

      return payload;
    },
  });

  return { isLoading, error, payload: data };
}
