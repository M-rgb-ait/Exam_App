"use client";

import useCategories from "@/app/componants/_hooks/gategoresfil/use-gategore";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import useCategories from "@/hooks/category/use-categories";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CategoryFilter() {
  // Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Queries
  const { error, isLoading, payload } = useCategories();

  if (isLoading) return <p>Loading categories...</p>;

  if (error) return <p className="text-red-600 text-sm">{error.message}</p>;

  // Variables
  const selectedCategory = searchParams.get("category");

  // Functions
  const handleClick = (id: string) => {
    const searchQuery = new URLSearchParams(searchParams);

    if (id === "all") {
      searchQuery.delete("category");
    } else {
      searchQuery.set("category", id);
    }

    router.push(`${pathname}?${searchQuery.toString()}`);
  };

  return (
    <RadioGroup defaultValue="option-one">
      {/* All categories option */}
      <div className="flex items-center space-x-2">
        {/* Radio */}
        <RadioGroupItem
          checked={!selectedCategory}
          value="all"
          id="all"
          onClick={() => handleClick("all")}
        />

        {/* Title */}
        <Label className="capitalize" htmlFor="all">
          All Categories
        </Label>
      </div>

      {payload?.categories.map((category) => (
        <div key={category._id} className="flex items-center space-x-2">
          {/* Radio */}
          <RadioGroupItem
            checked={category._id === selectedCategory}
            value={category._id}
            id={category._id}
            onClick={() => handleClick(category._id)}
          />

          {/* Title */}
          <Label className="capitalize" htmlFor={category._id}>
            {category.name}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
