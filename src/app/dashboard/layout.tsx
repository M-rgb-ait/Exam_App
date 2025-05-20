import Navlink from "../_component/navlink/page";
import Shearch from "../_component/shearch/page";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container">
      <div className=" flex md:flex-row mt-7">
        <div className="w-1/5 p-3">
          <Navlink />
        </div>
        <div className="w-4/5">
          <Shearch />
          {children}
        </div>
      </div>
    </div>
  );
}
