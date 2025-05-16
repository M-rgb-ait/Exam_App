import Image from "next/image";
import global from "./../../../../public/assets/images/bro.png";

export default function ImgForm() {
  return (
    <div className="bg-blue-50 p-8 rounded-r-3x1">
      <div>
        <h1 className="font-bold text-5xl">
          Welcome to{" "}
          <span className="font-bold text-6xl text-blue-800 block">
            Elevate
          </span>
        </h1>
        <p className="w-[380px] font-normal text-sm mt-3 mb-5">
          Quidem autem voluptatibus qui quaerat aspernatur architecto natus
        </p>
      </div>

      <div>
        <Image src={global} alt="Picture of the author" />
      </div>
    </div>
  );
}
