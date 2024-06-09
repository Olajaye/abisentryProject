import Image from "next/image";
import Link from "next/link";
import assets from "@/public/assets/assets";
import NavLinks from "../../constant/Navlinks";

const index = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-10">
      <div>
        <Image src={assets.Logo} alt="Brand Name" />
      </div>
      <div className="hidden md:flex justify-between items-center text-[#FFFFFF] w-[50%] bg-[#57565aaf] rounded-full p-4">
        {NavLinks.map((navItem, i) => (
          <div key={i}>
            <Link href={navItem.link}>{navItem.name}</Link>
          </div>
        ))}
      </div>

      <div>
        <Image src={assets.BrandLogo} alt="Brand Image"></Image>
      </div>
    </nav>
  );
};

export default index;
