import { fetchProducts } from "@/lib/api/product.api";
import catchError from "@/lib/utils/catch-error";
import Image from "next/image";

type ProductsListProps = {
  searchParams: SearchParams;
};

export default async function ProductsList({
  searchParams,
}: ProductsListProps) {
  // Variables
  const [payload] = await catchError(() => fetchProducts(searchParams));

  return (
    <ul className="grid grid-cols-3 gap-4 max-h-[80vh] overflow-auto">
      {payload?.products.map((product) => (
        <li key={product._id} className="border rounded-md flex flex-col gap-2">
          {/* Cover */}
          <div className="h-44 rounded-md overflow-hidden relative">
            <Image
              src={product.imgCover}
              alt={product.title}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>

          {/* Title */}
          <p className="text-lg font-semibold px-4 py-16">{product.title}</p>
        </li>
      ))}
    </ul>
  );
}
