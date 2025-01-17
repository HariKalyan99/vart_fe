import React from "react";
import NavigationBar from "./common-templates/NavigationBar";
import a from "../assets/1.gif";
import { SiAnimalplanet } from "react-icons/si";
import { GiAnimalSkull } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { TfiControlEject } from "react-icons/tfi";
import { SiContributorcovenant } from "react-icons/si";
import { FaBirthdayCake } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
      <div className="w-full h-auto min-h-[100vh] flex bg_wallpaper3 relative flex justify-center items-center flex-col">
        <NavigationBar />
        <span className="font-bold text-[2rem] mt-[12rem]">Animal data</span>
        <div className="mt-[4rem] container-fuild w-full p-4 flex flex-wrap justify-center items-center gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, ind) => (
            <div
              key={ind}
              className="w-[450px] h-[600px] border border-4 bg-chestnut rounded-xl shadow-2xl relative"
            >
              <img
                src={a}
                alt="animal_photo"
                className="w-[20rem] h-[20rem] object-cover opacity-30 absolute bottom-0 right-0"
              />
              <div className="w-full h-full border relative z-[10] flex justify-evenly items-start flex-col px-2">
                <div className="flex justify-center gap-2 items-center">
                  <GiAnimalSkull size={25} />
                  <span className="text-2xl font-semibold text-white">
                    Lion
                  </span>
                </div>
                <div className="flex justify-center gap-2 items-center">
                  <SiAnimalplanet size={25} />

                  <span className="text-2xl font-semibold text-white text-wrap">
                    king of jungle
                  </span>
                </div>
                <div className="flex justify-center gap-2 items-center">
                  <TfiControlEject size={25} />

                  <span className="text-xl font-semibold text-wrap">
                    Herbivores
                  </span>
                </div>
                <div className="flex justify-center gap-2 items-center">
                  <MdEmail size={25} />

                  <span className="text-xl font-semibold text-wrap">
                    hello@gmail.com
                  </span>
                </div>

                <div className="flex justify-center gap-2 items-center">
                  <IoMdPhonePortrait size={25} />

                  <span className="text-xl font-semibold text-wrap">
                    9889988998
                  </span>
                </div>

                <div className="flex justify-center gap-2 items-center">
                  <FaBirthdayCake size={25} />

                  <span className="text-xl font-semibold text-wrap">
                    20-10-24
                  </span>
                </div>
                <div className="border w-full" />
                <div className="flex justify-center gap-2 items-center">
                  <FaRoute className="text-[3rem] font-bold" />

                  <span className="text-xl font-semibold text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam amet impedit omnis blanditiis earum tempora, eius{" "}
                  </span>
                </div>
                <div className="flex justify-center gap-2 items-center">
                  <SiContributorcovenant size={25} />

                  <span className="text-xl font-semibold text-wrap">
                    Ate a lion, ran over an elephant
                  </span>
                </div>
                <div className="border w-full" />

                <div className="flex justify-between w-full">
                  <span className="text-[1rem] font-bold">
                    Created on:{" "}
                    <span className="text-base font-semibold">
                      20th fe, 2025
                    </span>
                  </span>

                  <span className="text-[1rem] font-bold">
                    Edited on:{" "}
                    <span className="text-base font-semibold">
                      20th fe, 2025
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
