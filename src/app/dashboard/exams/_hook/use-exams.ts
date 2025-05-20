import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function useExams() {
  // Navigation
  const searchParams = useSearchParams();

  // Queries
  const { isLoading, error, data } = useQuery({
    queryKey: ["exams"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/exams?${searchParams.toString()}`
      );

      const payload = await response.json();

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
  });

  return { isLoading, error, payload: data };
}
