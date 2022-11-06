import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import StarsRating from "stars-rating";
import client, { urlFor } from "../../sanity";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import $ from "jquery";

const Game = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [interval, setInterval] = useState(false);
  const [details, setDetails] = useState([]);
  console.log(slug);
  const [id, setId] = useState(slug);
  const [selected, setSelected] = useState(true);

  useEffect(() => {
    client.fetch(`*[_type == "game" && slug == "${slug}"] `).then((data) => {
      setDetails(data);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setInterval(true);
    }, 200);
  }, []);

  console.log(interval);

  useEffect(() => {
    setTimeout(() => {
      if (details[0]?.video) {
        $(".selected").css("display", "");
      } else {
        $(".selected").css("display", "none");
      }
    }, 200);
  }, [interval]);

  return (
    <div className="bg-[#1C1C1C] text-white p-[100px] lg:pl-[200px]">
      <h1 className="text-[50px]">{details[0]?.name}</h1>

      <div className="flex items-center space-x-2">
        <StarsRating
          count={5}
          size={20}
          color2={"#fff"}
          value={details[0]?.rating}
        />

        <div className="text-[rgba(245_245_245)] text-opacity-60 text-sm font-bold bg-[rgba(255_255_255)] bg-opacity-10 px-[6px] py-[2px] rounded-[4px]">
          {details[0]?.rating}
        </div>
      </div>

      <div className="flex items-center space-x-10 text-[22px] mt-14">
        <button>Overview</button>
        <button>{details[0]?.name} FAQ</button>
      </div>

      <div className="flex mt-4 space-x-10">
        {interval && (
          <>
            {" "}
            <Carousel
              className={`w-[65%]  ${
                details[0]?.video ? "flex-[2.5]" : "flex-[2.5]"
              }`}
            >
              <div>
                {details[0]?.video && (
                  <video
                    controls
                    autoPlay
                    muted
                    loop
                    src={details[0]?.video}
                    className="w-[130%]"
                  ></video>
                )}
              </div>

              <div>
                {details[0]?.carousel_image_one && (
                  <img
                    src={urlFor(details[0]?.carousel_image_one)?.url()}
                    alt="image_one"
                  />
                )}
              </div>
              <div>
                {details[0]?.carousel_image_two && (
                  <img
                    src={urlFor(details[0]?.carousel_image_two)?.url()}
                    alt="image_one"
                  />
                )}
              </div>
              <div>
                {details[0]?.carousel_image_three && (
                  <img
                    src={urlFor(details[0]?.carousel_image_three)?.url()}
                    alt="image_one"
                  />
                )}
              </div>
              <div>
                {details[0]?.carousel_image_four && (
                  <img
                    src={urlFor(details[0]?.carousel_image_four)?.url()}
                    alt="image_one"
                  />
                )}
              </div>
              <div>
                {details[0]?.carousel_image_five && (
                  <img
                    src={urlFor(details[0]?.carousel_image_five)?.url()}
                    alt="image_one"
                  />
                )}
              </div>
              <div>
                {details[0]?.carousel_image_six && (
                  <img
                    src={urlFor(details[0]?.carousel_image_six)?.url()}
                    alt="image_one"
                  />
                )}
              </div>
              <div>
                {details[0]?.carousel_image_seven && (
                  <img
                    src={urlFor(details[0]?.carousel_image_seven)?.url()}
                    alt="image_one"
                  />
                )}
              </div>
              <div>
                {details[0]?.carousel_image_eight && (
                  <img
                    src={urlFor(details[0]?.carousel_image_eight)?.url()}
                    alt="image_one"
                  />
                )}
              </div>
              <div>
                {details[0]?.carousel_image_nine && (
                  <img
                    src={urlFor(details[0]?.carousel_image_nine)?.url()}
                    alt="image_one"
                  />
                )}
              </div>
              <div>
                {details[0]?.carousel_image_ten && (
                  <img
                    src={urlFor(details[0]?.carousel_image_ten)?.url()}
                    alt="image_one"
                  />
                )}
              </div>
            </Carousel>
          </>
        )}

        <div className="flex flex-[1] w-[100%] h-[100%] p-[20px] flex-col">
          <div className="w-[280px] h-[157px]">
            {interval && (
              <img
                src={urlFor(details[0]?.thumbnail).url()}
                alt=""
                className="w-[280px] h-[157px] rounded-md object-contain pl-[45px]"
              />
            )}
          </div>
          <div className="flex items-center space-x-2 mt-8">
            <span className="bg-[rgba(255_255_255)] bg-opacity-10 px-4 py-1 rounded-md text-[11px] uppercase font-medium">
              base game
            </span>

            {details[0]?.early_access && (
              <>
                {" "}
                <span className="bg-[rgba(255_255_255)] bg-opacity-10 px-4 py-1 rounded-md text-[11px] uppercase flex items-center ">
                  early access
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg css-uwwqev"
                    viewBox="0 0 1024 1024"
                    className="w-[16px] ml-1"
                  >
                    <path
                      fill="currentColor"
                      d="M512 42.667C253.3 42.667 42.667 253.3 42.667 512S253.3 981.333 512 981.333c258.7 0 469.333-210.633 469.333-469.333S770.7 42.667 512 42.667zM512 128c212.583 0 384 171.417 384 384S724.583 896 512 896 128 724.583 128 512s171.417-384 384-384z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M511.333 468.75c-23.278.375-42.004 19.334-42.004 42.666 0 .205.001.411.004.615V512v170.667c-.003.179-.004.391-.004.603 0 23.567 19.104 42.671 42.671 42.671s42.671-19.104 42.671-42.671c0-.212-.002-.424-.005-.635v.032V512c.003-.174.004-.379.004-.584 0-23.567-19.104-42.671-42.671-42.671-.234 0-.468.002-.702.006h.035zM512 298.667a37.593 37.593 0 0 0-.603-.004c-23.567 0-42.671 19.104-42.671 42.671s19.104 42.671 42.671 42.671c.212 0 .424-.002.635-.005H512c.179.003.391.004.603.004 23.567 0 42.671-19.104 42.671-42.671s-19.104-42.671-42.671-42.671c-.212 0-.424.002-.635.005H512z"
                    ></path>
                  </svg>
                </span>
              </>
            )}
          </div>
          <div className="mt-3">
            <span>€{details[0]?.price}</span>
          </div>
          <div
            className={`duration-[0.3s] mt-3 ${
              slug === "red-dead-redemption-2"
                ? "bg-[rgb(227_50_45)] "
                : "bg-[rgb(0_116_228)] "
            }  bg-[rgb(0_116_228)] w-[70%] flex justify-center rounded-md py-4 uppercase text-sm font-medium hover:bg-opacity-70 cursor-pointer`}
          >
            buy now
          </div>
          <div
            className={`duration-[0.3s] mt-3 bg-transparent w-[70%] flex justify-center rounded-md py-4 uppercase text-sm font-medium border border-white cursor-pointer border-opacity-70 hover:bg-white hover:bg-opacity-20`}
          >
            add to cart
          </div>
          <div
            className={`duration-[0.3s] mt-3 bg-transparent w-[70%] flex justify-center items-center space-x-2 rounded-md py-1 uppercase text-xs font-medium border border-white cursor-pointer border-opacity-70 hover:bg-white hover:bg-opacity-20`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p> add to wishlist</p>
          </div>
          <div className="flex justify-between items-center border-b border-white border-opacity-10 w-[70%] pb-2 mt-5 ">
            <h4 className="text-[#f5f5f599] font-medium">Refund Type</h4>
            <h4 className="text-white flex space-x-2">
              <p>{details[0]?.refund_type}</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </h4>
          </div>
          <div className="flex justify-between items-center border-b border-white border-opacity-10 w-[70%] pb-2 mt-2">
            <h4 className="text-[#f5f5f599] font-medium">Developer</h4>
            <h4 className="text-white flex space-x-2">
              {details[0]?.developer}
            </h4>
          </div>
          <div className="flex justify-between items-center border-b border-white border-opacity-10 w-[70%] pb-2 mt-2">
            <h4 className="text-[#f5f5f599] font-medium">Publisher</h4>
            <h4 className="text-white flex space-x-2">
              {details[0]?.publisher}
            </h4>
          </div>
          <div className="flex justify-between items-center border-b border-white border-opacity-10 w-[70%] pb-2 mt-2">
            <h4 className="text-[#f5f5f599] font-medium">Release Date</h4>
            <h4 className="text-white flex space-x-2">
              {details[0]?.release_date}
            </h4>
          </div>

          <div className="flex justify-between items-center border-b border-white border-opacity-10 w-[70%] pb-2 mt-2">
            <h4 className="text-[rgb(245_245_245)] text-opacity-60 font-medium">
              Platform
            </h4>
            {details[0]?.platform === "Windows" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="svg css-uwwqev"
                viewBox="0 0 512 512"
                className="w-5 h-5"
              >
                <title>Windows</title>
                <g>
                  <path
                    fill="currentColor"
                    d="M0.175 256l-0.175-156.037 192-26.072v182.109zM224 69.241l255.936-37.241v224h-255.936zM479.999 288l-0.063 224-255.936-36.008v-187.992zM192 471.918l-191.844-26.297-0.010-157.621h191.854z"
                  ></path>
                </g>
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
