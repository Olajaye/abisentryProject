import Image from "next/image";
import Link from "next/link";
import assets from "@/public/assets/assets";
import NavLinks from "../../constant/Navlinks";
import { CiMenuFries } from "react-icons/ci";

const index = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-10 fixed top-0 left-0 right-0 z-50 bg-[#323335ad]">
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

      <div>
        <Image src={assets.BrandLogo} alt="Brand Image"></Image>
      </div>

      <div className="md:hidden">
        <CiMenuFries className="text-white text-5xl" />
      </div>
    </nav>
  );
};

export default index;
