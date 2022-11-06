import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DropdownSection from "../components/DropdownSection";
import client, { urlFor } from "../sanity";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [games, setGames] = useState([]);
  const [discount, setDiscount] = useState([]);
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    client
      .fetch(
        `*[ _type == "category"] {
        ...,
        games[] -> {
          ...,
        }
   }`
      )
      .then((data) => {
        setGames(data[0].games);
      });
  }, []);

  console.log(games);

  useEffect(() => {
    {
      games.map((game) => {
        var result =
          Math.abs(game.discount_price - game.price) / game.discount_price;
        setDiscount(Math.round(result * 100));
      });
    }
  }, [games]);

  console.log(discount);

  return (
    <div className="bg-[rgb(18_18_18)] text-white p-[100px] lg:pl-[200px]">
      <h1 className="text-[50px] font-normal">Top Sellers</h1>

      <div className="flex flex-wrap lg:space-x-4 lg:justify-start justify-center  mt-14 space-x-0 space-y-10 lg:space-y-20">
        {games.map((game, i) => (
          <div
            className={`flex flex-col relative ${i === 0 && "ml-6 mt-[79px]"}`}
            onClick={() => router.push(`/game/${game.slug}`)}
            key={game._rev}
          >
            <img
              src={urlFor(game.image).url()}
              alt=""
              className="w-[275px] h-[366px] rounded-md "
              onMouseOver={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />

            <h4 className="text-[12px] text-gray-400 uppercase mt-3">
              base game
            </h4>
            <h2 className="text-[16px] w-[277px] mt-[6px]">{game.name}</h2>
            <div className="flex items-center mt-2 space-x-3">
              {game.discount !== 0 && (
                <>
                  {" "}
                  <span className="bg-[rgb(0_116_228)] text-[11px] px-3 py-1 rounded-md">
                    -{game.discount}%
                  </span>
                  <p className="text-[16px] line-through text-gray-400">
                    €{game.discount_price}
                  </p>
                </>
              )}

              <p className="text-[16px] text-white">€{game.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
