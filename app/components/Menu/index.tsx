import React from "react";
import NavLinks from "@/app/constant/Navlinks";
import Link from "next/link";

type Props = {
  setOpenMenu: any;
};

const index = ({ setOpenMenu }: Props) => {
  return (
    <>
      {NavLinks.map((item, i) => (
        <div key={i} onClick={() => setOpenMenu(false)} className="my-4">
          <Link href={item.link}>{item.name}</Link>
        </div>
      ))}
    </>
  );
};

export default index;
