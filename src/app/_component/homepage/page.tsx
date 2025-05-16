import Image from "next/image";
import group from "./../../../../public/assets/icons/Group.png";
import vector from "./../../../../public/assets/icons/Vector.png";
import vectr from "./../../../../public/assets/icons/Vector.svg";
import img from "./../../../../public/assets/images/Frame 40.svg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="lg:flex sm:flex my-6 mx-3 gap-x-11">
        <div>
          <Image src={img} alt="frame" />
        </div>

        <div>
          <div>
            <h2 className="text-[#4461F2] font-bold text-3xl">
              {session?.user?.firstName}
            </h2>
            <p className="text-[#979CA3] text-xl font-normal my-4">
              Voluptatem aut
            </p>
          </div>

          <div className="w-full  bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "70%" }}
            />
          </div>

          <div className="flex items-center my-5 gap-3">
            <div className="flex justify-center items-center gap-5">
              <div className="w-[70px] h-[70px] shadow-lg relative">
                <Image
                  src={vector}
                  alt="frame"
                  className="w-8 absolute start-[50%] top-[25%] translate-x-[-50%]"
                />
              </div>
              <div>
                <h3 className="text-[#696F79] text-xl font-bold">27</h3>
                <p className="text-[#696F79] text-sm mt-2 font-normal">
                  Quiz passed
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5">
              <div className="w-[70px] h-[70px] shadow-md rounded-xl relative">
                <Image
                  src={vectr}
                  alt="frame"
                  className="w-8 absolute start-[50%] top-[25%] translate-x-[-50%]"
                />
              </div>
              <div>
                <h3 className="text-[#696F79] text-xl font-bold">13 min</h3>
                <p className="text-[#696F79] text-sm mt-2 font-normal">
                  Fastest Time
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5">
              <div className="w-[70px] h-[70px] shadow-md rounded-xl relative">
                <Image
                  src={group}
                  alt="frame"
                  className="w-8 absolute start-[50%] top-[25%] translate-x-[-50%]"
                />
              </div>
              <div>
                <h3 className="text-[#696F79] text-xl font-bold">200</h3>
                <p className="text-[#696F79] text-sm mt-2 font-normal">
                  Correct Answers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
