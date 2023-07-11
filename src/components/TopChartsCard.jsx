import { BsFillPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";

const TopChartsCard = () => {
  return (
    <div className="w-full  h-20 rounded-md overflow-hidden my-3 flex cursor-pointer">
      <img
        src="https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/21198/optimized_large_thumb_stage.jpg"
        className="w-20 h-full rounded-md"
      ></img>
      <div className=" w-72 ml-2 pt-3 ">
        <p className="text-xl font-bold">Song name</p>
        <p className="text-lg">Kenya east</p>
      </div>
      <div className="w-16  m-auto ">
        <BsFillPlayCircleFill size={40} />
      </div>
    </div>
  );
};

export default TopChartsCard;
