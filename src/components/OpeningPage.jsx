import React from "react";
import photo from '../assets/home.gif'


const OpeningPage = () => {
  return (
    <div className="relative w-full h-[100vh] flex justify-center items-center">
      <div className="w-[100%] h-[100%] absolute z-[-10]">
        <img src={photo} alt="opening_photo" className="w-full h-full"/>
      </div>
      <div className="h-[200px] w-[300px] z-[100] desk_bg bg-primary shadow-2xl flex justify-center items-center rounded-xl flex-col">
        <button className="h-[50px] w-[150px] bg-[#655A51] text-white rounded shadow-2xl hover:text-lg hover:bg-black mb-2">
          Register
        </button>
        <p>Register soon!</p>
      </div>
    </div>
  );
};

export default OpeningPage;
