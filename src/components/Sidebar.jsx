import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BiHomeCircle, BiHash } from "react-icons/bi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";

import logo from "../assets/logo.svg";

const Sidebar = () => {
  const [activePage, setActivePage] = useState("Discover");
  const navigate = useNavigate();

  const sections = [
    { name: "Discover", icon: <BiHomeCircle size="24" />, nav: "/" },
    {
      name: "Around You",
      icon: <HiOutlinePhotograph size="24" />,
      nav: "/around-you",
    },
    { name: "Top Artists", icon: <BsPeople size="24" />, nav: "/top-artists" },
    { name: "Top Charts", icon: <BiHash size="24" />, nav: "/top-charts" },
  ];

  const links = sections.map((link, i) => {
    return (
      <>
        <div key={i} className=" md:w-[100%] text-slate-400 text-md flex">
          {activePage !== link.name && (
            <div
              className="  md:h-12 md:flex md:w-[60%] sm:max-2xl:items-center sm:max-2xl:mx-auto cursor-pointer  sm:max-2xl:justify-center md:justify-start sm:max-md:mt-10 md:mt-4  md:mx-auto  "
              onClick={() => {
                navigate(`${link.nav}`);
                setActivePage(link.name);
              }}
            >
              <div className="">{link.icon}</div>
              <div className="ml-4 max-md:hidden md:max-2xl:block">
                {link.name}
              </div>
            </div>
          )}
          {activePage == link.name && (
            <div
              className="  md:h-12 md:flex md:w-[60%] sm:max-2xl:items-center sm:max-2xl:mx-auto cursor-pointer  sm:max-2xl:justify-center md:justify-start sm:max-md:mt-10 md:mt-4  md:mx-auto text-blue-400 "
              onClick={() => {
                navigate(`${link.nav}`);
                setActivePage(link.name);
              }}
            >
              <div className="">{link.icon}</div>
              <div className="ml-4 max-md:hidden md:max-2xl:block">
                {link.name}
              </div>
            </div>
          )}
        </div>
      </>
    );
  });

  return (
    <div className="w-[200%]">
      <div className="  h-32  max-sm:hidden justify-center flex items-center">
        <h1 className="text-3xl">
          <img className="w-28" src={logo} alt="Your SVG" />
        </h1>
      </div>
      <div className="max-sm:flex max-sm:justify-around">{links}</div>
    </div>
  );
};

export default Sidebar;
