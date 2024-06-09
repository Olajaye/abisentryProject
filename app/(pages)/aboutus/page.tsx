import Image from "next/image";
import React from "react";
import assets from "@/public/assets/assets";

const page = () => {
  return (
    <section className="px-10">
      <div className="md:flex justify-between">
        <div className="md:w-[48%]">
          <Image src={assets.cyberSecurity} alt="cyber security" />
        </div>
        <div className="md:w-[48%]">
          <h6 className="text-[#3ED5DD]">About us</h6>
          <h1 className="md:text-xl lg:text-5xl text-white font-semibold mt-4">
            Discover Our Journey Protecting Your Digital World with Expertise
            and Care
          </h1>
          <p className="mt-4 md:text-[10px] lg:text-base text-white">
            At <span className="text-[#3ED5DD]">Abisentry,</span> we&apos;re
            dedicated to protecting businesses and individuals from the
            ever-evolving threats in the digital landscape. With 5years of
            experience in the cybersecurity industry, we have honed our
            expertise to deliver innovative solutions that safeguard your
            digital assets and maintain your peace of mind.
          </p>
        </div>
      </div>
      <div className="px-10 flex justify-center">
        <div className="w-[80%] bg-gradient-to-r from-[#54F4FC] via-[#54F4FC] via-30% via-[#B4F3FF] via-75%  to-[#176DB4] rounded-2xl px-9 py-3 flex justify-between items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-extrabold">5+</h1>
            <p className="text-lg">Years of Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-extrabold">100+</h1>
            <p className="text-lg">Satisfied customers</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-extrabold">99%</h1>
            <p className="text-lg">Cybersecurity guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
