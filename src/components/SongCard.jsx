import { useState } from "react";

import { BsFillPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";

const SongCard = ({ id }) => {
  const [cardHover, setCardHover] = useState(null);

  const showPlayMenue = (e) => {
    setCardHover(e.target.id);
  };

  const hidePlayMenue = () => {
    setCardHover(null);
  };
  return (
    <>
      <div
        id={id}
        key={id}
        onMouseEnter={showPlayMenue}
        onMouseLeave={hidePlayMenue}
        className="h-76 w-60 bg-white/10 rounded-lg p-4 text-white font-sans my-3 cursor-pointer relative "
      >
        <img
          id={id}
          className="h-52 w-56 mb-2 "
          src="https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/21198/optimized_large_thumb_stage.jpg"
        ></img>
        {cardHover == id && (
          <div className="h-52 w-52 bg-white/20 absolute top-4 flex items-center justify-center  ">
            <BsFillPlayCircleFill size={40} />
          </div>
        )}

        <p id={id} className="font-bold  text-lg">
          Song name
        </p>
        <p id={id} className="text-gr">
          Kenya East
        </p>
      </div>
    </>
  );
};

export default SongCard;
