import React, { useState } from "react";

const drop = [
  {
    title: "About Us",
    first: "Our Company",
    second: "Our Cofee",
    third: "Stories and News",
  },

  {
    title: "Carrers",
    first: "Culture and Values",
    second: "U.S. Careers",
    third: "Interntional Careers",
  },
];

const DropdownSection = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      {drop.map((d) => (
        <div className="flex flex-col space-y-3">
          <p className="pt-2">{d.title}</p>
        </div>
      ))}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        onClick={() => setClicked(!clicked)}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`w-6 h-6 ease-out duration-150 ${clicked && "rotate-180"} `}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
};

export default DropdownSection;
