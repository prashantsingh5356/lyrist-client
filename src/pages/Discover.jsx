import { useState, useEffect } from "react";

import SongCard from "../components/SongCard";

const Discover = () => {
  const [playSong, setPlaySong] = useState(null);

  const category = [
    { name: "Pop" },
    { name: "Hip-Hop" },
    { name: "Dance" },
    { name: "Electronic" },
    { name: "Soul" },
    { name: "Alternative" },
    { name: "Rock" },
    { name: "Latin" },
    { name: "Film" },
    { name: "Country" },
    { name: "Worldwide" },
    { name: "Reggae" },
    { name: "House" },
    { name: "K-Pop" },
  ];

  const url =
    "https://shazam.p.rapidapi.com/songs/v2/get-details?id=1217912247&l=en-US";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "11960bb56cmsh3539cd041a36c31p1daec4jsnac8946affcad",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  async function getSongDetails() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // getSongDetails(url, options);
  }, []);

  return (
    <>
      <div className="flex justify-between p-3  w-[92%]">
        <div>
          <h1 className="text-4xl font-semibold text-white "> Discover </h1>
        </div>
        <div>
          <select className="h-10 w-28 bg-slate-800 text-white rounded-md p-1">
            {category.map((cat) => {
              return <option>{cat.name}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="w-100 sm:pl-3 sm:pr-20 sm:flex sm:flex-wrap sm:justify-between max-h-[83vh] overflow-y-auto max-sm:flex max-sm:flex-col max-sm:items-center scrollbar-hide ">
        {category.map((el, i) => (
          <SongCard id={i} key={i} />
        ))}
      </div>
    </>
  );
};

export default Discover;
