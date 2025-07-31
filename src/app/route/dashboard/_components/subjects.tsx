"use client";

import { Button } from "@/components/ui/button";
import SubjectsMore from "@/lib/api/moresubject.api";
import { useInfiniteQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function SubjectsApi() {
  const {
    data: payload,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    error,
  } = useInfiniteQuery({
    queryKey: ["subjects"],
    queryFn: ({ pageParam }) => SubjectsMore(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastpage) => {
      if (lastpage.metadata.currentPage === lastpage.metadata.numberOfPages)
        return undefined;
      return lastpage.metadata.currentPage + 1;
    },
  });
  return (
    <div className=" container mx-auto p-5 bg-white">
      <p>{isLoading && "isLoadingsubject....."}</p>

      <div>
        {payload && (
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mb-9">
            {payload.pages
              .flatMap((page) => page.subjects)
              .map((payloed) => (
                <Link key={payloed._id} href={`exams/${payloed._id}`}>
                  <div className="relative">
                    <img
                      src={payloed.icon}
                      className=" w-full h-full"
                      alt={payloed.name}
                    />
                    <div
                      className="bg-[#1935CA66] w-[90%] p-5 rounded-md top-[50%] left-[50%] 
                  transform -translate-x-1/2 -translate-y-1/5
                  absolute"
                    >
                      <h2 className="font-bold text-base">{payloed.name}</h2>
                      <p className="font-medium text-sm">
                        Voluptatem aut ut dignissimos blanditiis
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>
      <Button
        className="w-full p-7"
        onClick={() => fetchNextPage()}
        disabled={isLoading || isFetchingNextPage || !hasNextPage}
      >
        {isFetchingNextPage
          ? "LodinMore...."
          : !hasNextPage
            ? "no page"
            : "movepage"}
      </Button>
      {error && <p className="text-red-700 text-6xl">{error.message}</p>}
    </div>
  );
}

// // const authCookie = cookies().get("next-auth.session-token")?.value;
// // const token = await decode({
// //   token: authCookie,
// //   secret: process.env.NEXTAUTH_SECRET!,
// // });
// const respones = await fetch(`${process.env.API}/subjects`, {
//   method: "GET",
//   headers: {
//     ...JSON_HEADER,
//     // token: token?.token || "",
//     ...(await getAuthHeader()),
//   },
// });

// const payload = await respones.json();
// // console.log("SubjectsApi", payload);
// const subjects = payload.subjects;
// // if (!respones.status) {
// //   <p>Loding.......</p>;
// // }
