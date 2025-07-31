// import { Suspense } from "react";
// import ProductsList from "./_components/products-list";
// import CategoryFilter from "./_components/category-filter";

import { Suspense } from "react";
import CategoryFilter from "./_components/category-filter";
import ProductsList from "./_components/products-list";

type PageProps = {
  searchParams: SearchParams;
};

export default function Page({ searchParams }: PageProps) {
  return (
    <main className="grid grid-cols-[1fr_4fr]">
      {/* Sidebar */}
      <aside className="sticky top-0">
        <Suspense>
          <CategoryFilter />
        </Suspense>
      </aside>

      {/* Products */}
      <section>
        <Suspense fallback="Loading products...">
          <ProductsList searchParams={searchParams} />
        </Suspense>
      </section>
    </main>
  );
}
