import React from "react";
import hero from "../../assets/logo.gif";
import NavigationBar from "../common-templates/NavigationBar";
import Card from "../common-templates/Card";
import FooterBar from "../common-templates/FooterBar";

const Dashboard = () => {
  return (
    <div className="bg-chestnut">
      <NavigationBar dash/>
      <div className="w-full h-auto min-h-[100vh] flex bg-chestnut relative flex justify-center items-center flex-col">
        <div className="w-full h-[45rem] flex justify-center items-center mt-4 container">
          <img
            src={hero}
            alt="hero_img"
            className="w-[50%] h-[90%] object-contain"
          />
          <div className="w-[50%] h-full flex justify-center items-start flex-col">
            <span className="text-[4rem] font-bold text-nostalgicblue text-wrap">
              Welcome to Zootopia!
            </span>
            <span className="text-[2rem] font-bold text-white text-wrap inline-block ">
              All the wonderfull animals get registered to get access in our
              jungle..
            </span>
          </div>
        </div>
        <div className="border w-full container" />
        <span className="text-left w-full container text-[2rem] text-nostalgicblue">
          Registered animals
        </span>
        <div className="mt-[1rem] container w-full p-4 flex flex-wrap justify-center items-center gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, ind) => (
            <Card key={ind} ind={ind} />
          ))}
        </div>
      </div>
      <FooterBar />
    </div>
  );
};

export default Dashboard;
