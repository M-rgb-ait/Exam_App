import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { categoriesApi } from "@/lib/api/categories.api";
import Image from "next/image";
import Link from "next/link";

export function CarouselSize() {
  const { data: payload } = useQuery({
    queryKey: ["categories"],
    queryFn: categoriesApi,
  });
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {payload?.categories.map((categorie: categoriestype) => (
          <CarouselItem
            key={categorie._id}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">
                    {" "}
                    <Link href={`categories/${categorie._id}`}>
                      <Image
                        src={categorie.image}
                        alt={categorie._id}
                        width={300}
                        height={300}
                      />
                    </Link>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
