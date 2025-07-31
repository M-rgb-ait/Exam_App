// import CategoriesApi from "@/lib/api/categories.api";
"use client";
import Image from "next/image";
import Link from "next/link";
import Addcategoriseform from "./components/add-categorise-form";
import { useQuery } from "@tanstack/react-query";
import { categoriesApi } from "@/lib/api/categories.api";
import { CarouselSize } from "@/app/_component/corsel/carouselsize";

export default function CategoriesPage() {
  const { data: payload } = useQuery({
    queryKey: ["categories"],
    queryFn: categoriesApi,
  });
  // const response = await CategoriesApi();
  // console.log("categoriesApi", response);
  return (
    <>
      <Addcategoriseform />
      <div className="flex items-center">
        {payload?.categories.map((categorie: categoriestype) => (
          <>
            <div key={categorie._id}>
              <Link href={`categories/${categorie._id}`}>
                <Image
                  src={categorie.image}
                  alt={categorie._id}
                  width={300}
                  height={300}
                />
              </Link>
            </div>
          </>
        ))}
      </div>
      <CarouselSize />
    </>
  );
}

//     {respons.exams.map((exam: any) => (
//       <div key={exam._id}>{exam.title}</div>
//     ))}
//   </div>
// </div>
