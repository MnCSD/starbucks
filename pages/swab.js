import React from "react";

const swab = () => {
  return (
    <div className="h-screen bg-[#E0E2EE] w-[100%] flex justify-center pl-[200px] items-center">
      <div className="flex flex-col">
        <img
          src="https://swabtheworld.com/assets/lottie-theme-0/images/Vector_Smart_Object21_copy_5_graphics.png"
          alt=""
          className="ball_first w-[145px] h-[145px] object-contain"
        />
        <img
          src="https://swabtheworld.com/assets/lottie-theme-0/images/Vector_Smart_Object21_copy_graphics.png"
          alt=""
          className="ball_second w-[145px] h-[145px] object-contain relative z-[999]"
        />
        <img
          src="https://swabtheworld.com/assets/lottie-theme-0/images/Vector_Smart_Object21_copy_5_graphics.png"
          alt=""
          className="ball_third w-[145px] h-[145px] object-contain"
        />
        <span className="shape w-[330px] h-[330px] bg-white rounded"></span>
      </div>

      <img
        src="https://swabtheworld.com/assets/lottie-theme-0/images/Vector_Smart_Object21_copy_5_graphics.png"
        alt=""
        className="ball_width w-[145px] h-[145px]  "
      />
    </div>
  );
};

export default swab;
