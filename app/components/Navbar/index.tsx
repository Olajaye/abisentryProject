"use client";
import Image from "next/image";
import Link from "next/link";
import assets from "@/public/assets/assets";
import NavLinks from "../../constant/Navlinks";
import { CiMenuFries } from "react-icons/ci";
import Menu from "@/app/components/Menu";
import { useState } from "react";

const index = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="bg-[#323335ad] fixed top-0 left-0 right-0 z-50 ">
      <nav className="flex justify-between items-center py-5 px-10">
        <div className="hidden md:block">
          <Image src={assets.Logo} alt="Brand Name" />
        </div>
        <div className="hidden md:flex justify-between items-center text-[#FFFFFF] w-[50%] bg-[#57565aaf] rounded-full p-4">
          {NavLinks.map((navItem, i) => (
            <div key={i}>
              <a href={navItem.link}>{navItem.name}</a>
            </div>
          ))}
        </div>

        <Link href="#home">
          <Image src={assets.BrandLogo} alt="Brand Image"></Image>
        </Link>

        <div className="md:hidden">
          <CiMenuFries
            className="text-white text-5xl"
            onClick={() => setOpenMenu(true)}
          />
        </div>
      </nav>
      <div className="bg-black flex flex-col text-xl text-white justify-center items-center ">
        {openMenu && <Menu setOpenMenu={setOpenMenu} />}
      </div>
    </div>
  );
};

export default index;
