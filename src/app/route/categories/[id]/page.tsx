import CategoriesApiPage from "@/lib/api/categoriesid.api";
import Image from "next/image";

export default async function Categoriesid({
  params,
}: {
  params: { id: string };
}) {
  const prodect = await CategoriesApiPage(params.id);

  return (
    <div>
      <div>{prodect.category._id}</div>
      <div>{prodect.category.name}</div>
      <Image
        src={prodect.category.image}
        alt={prodect.category._id}
        width={300}
        height={300}
      />
    </div>
  );
}

//   return payload;
//   const respons = await categoriesId();
//   console.log("responssdfghjkl", respons);
