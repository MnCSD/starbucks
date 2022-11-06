import React from "react";

const Form = () => {
  return (
    <div className="bg-[#0e0e10] h-screen w-full flex justify-center">
      <div className="bg-[#18181b] h-[377px] w-[468px] px-[20px] py-[30px] ">
        <div className="text-white text-[18px] font-[600] flex items-center space-x-2">
          <svg
            type="color-fill-brand"
            width="40px"
            height="40px"
            version="1.1"
            viewBox="0 0 24 28"
            x="0px"
            y="0px"
            fill="#a970ff"
            class="ScSvg-sc-1j5mt50-1 eNrElQ"
          >
            <g fill-rule="evenodd">
              <path d="M19 6v6h-2V6h2zm-7 0h2v6h-2V6zM5 0L0 5v18h6v5l5-5h4l9-9V0H5zm17 13l-4 4h-4l-4 4v-4H6V2h16v11z"></path>
              <path
                d="M18 17l4-4V2H6v15h4v4l4-4h4zM12 6h2v6h-2V6zm7 0h-2v6h2V6z"
                fill="#fff"
              ></path>
            </g>
          </svg>
          <p> Σύνδεση στο Twitch</p>
        </div>
      </div>
    </div>
  );
};

// bg #18181b

// <svg type="color-fill-brand" width="40px" height="40px" version="1.1" viewBox="0 0 24 28" x="0px" y="0px" class="ScSvg-sc-1j5mt50-1 eNrElQ"><g fill-rule="evenodd"><path d="M19 6v6h-2V6h2zm-7 0h2v6h-2V6zM5 0L0 5v18h6v5l5-5h4l9-9V0H5zm17 13l-4 4h-4l-4 4v-4H6V2h16v11z"></path><path d="M18 17l4-4V2H6v15h4v4l4-4h4zM12 6h2v6h-2V6zm7 0h-2v6h2V6z" fill="#FFF"></path></g></svg>

export default Form;
