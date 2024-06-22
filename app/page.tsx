import assets from "@/public/assets/assets";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { OurService } from "./constant/Service";
import { Team } from "./constant/team";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

export default function Home() {
  const aboutGradient =
    "bg-gradient-to-r from-[#54F4FC] via-[#54F4FC] via-30% via-[#B4F3FF] via-75%  to-[#176DB4]";

  const cardGradient =
    "bg-gradient-to-r from-[#32333593] via-[#171717] via-30% via-[#171717] via-60% to-[#32333593]";
  return (
    <main className="relative scroll-smooth">
      <Image
        src={assets.Ellips}
        alt=""
        className="absolute -top-40 right-10 hidden w-[60%] md:block"
      />

      {/* Hero */}
      <header id="home">
        <div className="md:flex px-5 sm:px-10 md:px-20 pt-40 md:pt-52">
          <div className="h-auto flex flex-col justify-end md:w-[60%]">
            <div className="flex">
              <div className="flex flex-col justify-center items-center">
                <Image src={assets.group} alt="" className="h-[80%]" />
              </div>
              <div className="text-5xl lg:text-6xl text-white h-auto w-auto font-extrabold">
                <h2>Your Digital </h2>
                <h2>Fortress | Guard</h2>
                <p className="text-xs lg:text-base mt-4 font-medium">
                  We are on quest to reinforce the digital world and guarantee
                  the safety of our clients&apos; priceless assets, and we are
                  fueled by a passion for security and a team of highly skilled
                  experts.
                </p>
              </div>
            </div>

            <Link
              href="/#"
              className="text-white md:ms-10 mb-5 md:mb-10 mt-5 md:mt-[5%] bg-gradient-to-r from-[#00A7D6] to-[#0A767B] w-48 px-4 py-2 rounded-lg"
            >
              {" "}
              Talk to Sales
            </Link>
          </div>
          <div className="relative md:w-[40%]">
            <Image
              src={assets.Ellips}
              alt=""
              className="absolute -top-20 right-0 md:hidden"
            />
            <Image src={assets.hero} alt="" className="w-[500px]" />
          </div>
        </div>
      </header>

      {/*  Our Quest */}
      <section id="about" className="px-5 sm:px-10 md:px-20 mb-20 ">
        <div className="lg:flex justify-between pt-36">
          <div className="lg:w-[48%]">
            <Image src={assets.cyberSecurity} alt="cyber security" />
          </div>
          <div className="lg:w-[48%]">
            <h6 className="text-[#3ED5DD]"> OUR QUEST</h6>
            <h1 className="text-2xl lg:text-3xl xl:text-5xl text-white font-semibold mt-4">
              Powering cybersecurity Intelligence with Abisentry Unified Risk
              Platform
            </h1>
            <p className="mt-4 text-lg lg:text-base xl:text-lg text-white">
              Understands the threat actors targeting your organization and
              optimizes your defenses against them. With intelligence at its
              core, Abisentry&apos;s cybersecurity platform effectively prevents
              breaches, fraud and other cyber threats.
            </p>
          </div>
        </div>
        {/* <div className="flex justify-center mt-10 ">
          <div
            className={`${aboutGradient} w-[100%] rounded-2xl px-9 py-3 flex justify-between items-center`}
          >
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
        </div> */}
      </section>

      {/* Our services */}
      <section id="service" className="overflow-y-hidden overflow-hidden">
        <div className="relative">
          <Image
            src={assets.EllipsBg}
            alt=""
            className="absolute -top-[350px] -right-[340px] w-[50%]"
          />
          <Image
            src={assets.Vector}
            alt=""
            className="w-[400px] absolute -top-[350px] -right-[180px] "
          />
        </div>

        <div className="px-5 sm:px-10 md:px-20 pt-28">
          <div className="flex justify-center">
            <div className="flex justify-center flex-col lg:w-[70%] text-center">
              <h6 className="text-[#3ED5DD]">Our Service</h6>
              <h2 className="text-5xl text-white my-2">
                Protecting Your Digital Assets Expertly
              </h2>
              <h5 className="text-white">
                Protect your devices and networks from malware, ransomware, and
                other cyber threats with our comprehensive endpoint security
                solutions. Safeguard sensitive data and ensure business
                continuity with real-time threat detection and response.
              </h5>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 mt-10 lg:mt-20">
            {OurService.map((item) => (
              <div
                key={item.id}
                className={`${cardGradient} border-[1px] border-[#3ED5DD] rounded-3xl relative h-auto flex flex-col  p-2 text-white`}
              >
                <Image
                  src={item.image}
                  alt=""
                  className="border-[#3ED5DD] border-[1px] rounded-full p-3 bg-[#191919] w-[80px]"
                />

                <h4 className="text-center mt-5 text-3xl">{item.title}</h4>
                <p className="text-center text-sm leading-7 mt-5">
                  {item.text}
                </p>
              </div>
            ))}

            {/* <div className="md:mt-10 lg:mt-0">
              <div
                className={`${cardGradient} border-[1px] border-[#3ED5DD] rounded-3xl relative h-auto flex flex-col justify-center items-center px-10 py-5 text-white`}
              >
                <Image
                  src={assets.IconCyberSecurity2}
                  alt=""
                  className="border-[#3ED5DD] border-[1px] rounded-full p-3 bg-[#191919] absolute -top-[35px] w-[70px]"
                />

                <h4 className="text-center mt-10 text-3xl">
                  Intrusion Detection and Prevention
                </h4>
                <p className="text-center text-sm leading-7 mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div> */}

            {/* <div className=" lg:mt-7 md:mt-10">
              <div
                className={`${cardGradient} border-[1px] border-[#3ED5DD] rounded-3xl relative h-auto flex flex-col justify-center items-center px-10 py-5 text-white`}
              >
                <Image
                  src={assets.IconCyberSecurity3}
                  alt=""
                  className="border-[#3ED5DD] border-[1px] rounded-full p-3 bg-[#191919] absolute -top-[35px] w-[70px]"
                />

                <h4 className="text-center mt-10 text-3xl">
                  Cyber security Assessment{" "}
                </h4>
                <p className="text-center text-sm leading-7 mt-5">
                  Protect your devices and networks from malware, ransomware,
                  and other continuity with real-time threat detection and
                  response.{" "}
                </p>
              </div>
            </div> */}
          </div>
        </div>

        <div className="relative">
          <Image
            src={assets.EllipsBg}
            alt=""
            className="absolute -bottom-[400px] -left-[340px] w-[50%]"
          />
          <Image
            src={assets.Vector2}
            alt=""
            className="w-[400px] absolute -bottom-[250px] -left-[180px] "
          />
        </div>
      </section>

      {/* Future point /Out Team */}
      <section id="feature" className="overflow-y-hidden overflow-hidden">
        <div className="relative">
          <Image
            src={assets.EllipsBg}
            alt=""
            className="absolute -bottom-[350px] -left-[340px] w-[50%]"
          />
          <Image
            src={assets.Vector2}
            alt=""
            className="w-[400px] absolute -bottom-[250px] -left-[180px] "
          />
        </div>

        {/* <div className="px-5 sm:px-10 md:px-20 mt-20 pt-14">
          <div className="lg:flex justify-between">
            <div className="lg:w-[47%] z-30">
              <div>
                <Image
                  src={assets.featurePoint}
                  alt=""
                  className="h-[500px] lg:h-[800px] w-[100%] object-contain md:object-fill"
                />
              </div>
            </div>
            <div className="lg:w-[50%] mt-10 lg:mt-0">
              <h6 className="text-[#3ED5DD]">Feature Point</h6>
              <h1 className="text-2xl lg:text-3xl xl:text-5xl text-white font-semibold mt-4">
                Key Service Features Protecting You
              </h1>
              <p className="mt-4 text-base lg:text-base xl:text-lg text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue metus quis accumsan euismod. Maecenas sed est
                mollis, convallis nisi convallis, imperdiet massa.{" "}
              </p>

              <div className="flex justify-center items-center mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div
                    className={`${cardGradient} rounded-3xl px-7 py-4 h-auto items-center  text-white`}
                  >
                    <Image src={assets.Customize} alt="" />
                    <h3 className="text-2xl my-2">
                      Customized Security Solutions
                    </h3>
                    <p className="text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    </p>
                  </div>
                  <div
                    className={`${cardGradient} rounded-3xl px-7 py-4 h-auto items-center  text-white`}
                  >
                    <Image src={assets.Customize} alt="" />
                    <h3 className="text-2xl my-2">
                      Customized Security Solutions
                    </h3>
                    <p className="text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    </p>
                  </div>
                  <div
                    className={`${cardGradient} rounded-3xl px-7 py-4 h-auto items-center  text-white`}
                  >
                    <Image src={assets.Customize} alt="" />
                    <h3 className="text-2xl my-2">
                      Customized Security Solutions
                    </h3>
                    <p className="text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    </p>
                  </div>
                  <div
                    className={`${cardGradient} rounded-3xl px-7 py-4 h-auto items-center  text-white`}
                  >
                    <Image src={assets.Customize} alt="" />
                    <h3 className="text-2xl my-2">
                      Customized Security Solutions
                    </h3>
                    <p className="text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="px-5 sm:px-10 md:px-20 mt-20 pt-20">
          <div className="flex justify-center">
            <div className="flex justify-center flex-col lg:w-[70%] text-center">
              <h6 className="text-[#3ED5DD]">OUT TEAM</h6>
              <h2 className="lg:text-5xl md:text-3xl text-2xl text-white my-2">
                Executive Team
              </h2>
              <h5 className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue metus quis accumsan euismod. Maecenas sed est
              </h5>
            </div>
          </div>

          <div className="overflow-x-scroll overflow-y-hidden">
            <div className="flex mt-10 w-[1800px] mb-5">
              {Team.map((team, i) => (
                <div
                  className="flex items-center flex-col justify-center w-[50%] text-white"
                  key={i}
                >
                  <Image
                    src={team.image}
                    alt={team.name}
                    className={`${cardGradient} rounded-full h-[180px] w-[180px]`}
                  />
                  <h1 className="mt-5 text-xl font-bold">{team.name}</h1>
                  <h3 className="my-3">{team.post}</h3>
                  <div className="flex">
                    <Link
                      href={team.Facebook}
                      className="border-[1px] border-white rounded-md"
                    >
                      <FaFacebookF className="text-2xl p-1" />
                    </Link>
                    <Link
                      href={team.Twitter}
                      className="border-[1px] border-white mx-4 rounded-md"
                    >
                      <BsTwitterX className="text-2xl p-1" />
                    </Link>
                    <Link
                      href={team.Linkined}
                      className="border-[1px] border-white rounded-md"
                    >
                      <LiaLinkedinIn className="text-2xl p-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src={assets.EllipsBg}
            alt=""
            className="absolute -top-[350px] -right-[340px] w-[50%]"
          />
          <Image
            src={assets.Vector}
            alt=""
            className="w-[400px] absolute -top-[350px] -right-[180px] "
          />
        </div>
      </section>

      {/* TESTIMONIAL testinomi */}
      <section id="testimonial" className="overflow-y-hidden overflow-hidden">
        <div className="relative">
          <Image
            src={assets.EllipsBg}
            alt=""
            className="absolute -top-[350px] -right-[340px] w-[50%]"
          />
          <Image
            src={assets.Vector}
            alt=""
            className="w-[400px] absolute -top-[350px] -right-[180px] "
          />
        </div>

        {/* <div className="px-5 sm:px-10 md:px-20 mt-20 pt-20">
          <div className="flex justify-center">
            <div className="flex justify-center flex-col lg:w-[70%] text-center">
              <h6 className="text-[#3ED5DD]">OUR GOALS</h6>
              <h2 className="lg:text-5xl md:text-3xl text-2xl text-white my-2">
                Securing Your Digital World Together
              </h2>
              <h5 className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue metus quis accumsan euismod. Maecenas sed est
                mollis, convallis nisi convallis, imperdiet massa.
              </h5>
            </div>
          </div>

          <div className="overflow-x-scroll">
            <div className="flex mt-10 w-[1550px]">
              <div
                className={`${cardGradient} rounded-3xl px-7 py-4 h-auto items-center  text-white w-[300px] me-10 z-20`}
              >
                <h4 className="text-center mt-10 text-3xl">
                  Cyber security Assessment{" "}
                </h4>
                <p className="text-center text-sm leading-7 mt-5">
                  Protect your devices and networks from malware, ransomware,
                  and
                </p>
              </div>

              <div
                className={`${cardGradient} rounded-3xl px-7 py-4 h-auto items-center  text-white w-[300px] me-10 z-20`}
              >
                <h4 className="text-center mt-10 text-3xl">
                  Cyber security Assessment{" "}
                </h4>
                <p className="text-center text-sm leading-7 mt-5">
                  Protect your devices and networks from malware, ransomware,
                  and
                </p>
              </div>

              <div
                className={`${cardGradient} rounded-3xl px-7 py-4 h-auto items-center  text-white w-[300px] me-10 z-20`}
              >
                <h4 className="text-center mt-10 text-3xl">
                  Cyber security Assessment{" "}
                </h4>
                <p className="text-center text-sm leading-7 mt-5">
                  Protect your devices and networks from malware, ransomware,
                  and
                </p>
              </div>

              <div
                className={`${cardGradient} rounded-3xl px-7 py-4 h-auto items-center  text-white w-[300px] me-10 z-20`}
              >
                <h4 className="text-center mt-10 text-3xl">
                  Cyber security Assessment{" "}
                </h4>
                <p className="text-center text-sm leading-7 mt-5">
                  Protect your devices and networks from malware, ransomware,
                  and
                </p>
              </div>
              <div
                className={`${cardGradient} rounded-3xl px-7 py-4 h-auto items-center  text-white w-[300px] me-10 z-20`}
              >
                <h4 className="text-center mt-10 text-3xl">
                  Cyber security Assessment{" "}
                </h4>
                <p className="text-center text-sm leading-7 mt-5">
                  Protect your devices and networks from malware, ransomware,
                  and
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="px-5 sm:px-10 md:px-20 mt-20 pt-20">
          <div className="flex justify-center">
            <div className="flex justify-center flex-col lg:w-[70%] text-center">
              <h6 className="text-[#3ED5DD]">TESTIMONIAL</h6>
              <h2 className="lg:text-5xl md:text-3xl text-2xl text-white my-2">
                See What Others People Are Saying
              </h2>
              <h5 className="text-white ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue metus quis accumsan euismod. Maecenas sed est
                mollis, convallis nisi convallis, imperdiet massa.
              </h5>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-10 z-20">
            <div className="bg-[#1f1e1eaf] z-20 p-4 text-white">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue metus quis accumsan euismod. Maecenas sed est
                mollis, convallis nisi convallis, imperdiet massa.{" "}
              </p>
              <div className="flex items-center mt-3">
                <Image src={assets.Testimonial} alt="" width={70} height={70} />
                <div className="ms-3">
                  <h1 className="text-xl">Marianne Bode</h1>
                  <h6 className="my-1">Product Intranet Agent</h6>
                  <div className="flex">
                    <Image src={assets.Star} alt="" width={20} />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1f1e1eaf] z-20 p-4 text-white">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue metus quis accumsan euismod. Maecenas sed est
                mollis, convallis nisi convallis, imperdiet massa.{" "}
              </p>
              <div className="flex items-center mt-3">
                <Image src={assets.Testimonial} alt="" width={70} height={70} />
                <div className="ms-3">
                  <h1 className="text-xl">Marianne Bode</h1>
                  <h6 className="my-1">Product Intranet Agent</h6>
                  <div className="flex">
                    <Image src={assets.Star} alt="" width={20} />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1f1e1eaf] z-20 p-4 text-white">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue metus quis accumsan euismod. Maecenas sed est
                mollis, convallis nisi convallis, imperdiet massa.{" "}
              </p>
              <div className="flex items-center mt-3">
                <Image src={assets.Testimonial} alt="" width={70} height={70} />
                <div className="ms-3">
                  <h1 className="text-xl">Marianne Bode</h1>
                  <h6 className="my-1">Product Intranet Agent</h6>
                  <div className="flex">
                    <Image src={assets.Star} alt="" width={20} />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1f1e1eaf] z-20 p-4 text-white">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue metus quis accumsan euismod. Maecenas sed est
                mollis, convallis nisi convallis, imperdiet massa.{" "}
              </p>
              <div className="flex items-center mt-3">
                <Image src={assets.Testimonial} alt="" width={70} height={70} />
                <div className="ms-3">
                  <h1 className="text-xl">Marianne Bode</h1>
                  <h6 className="my-1">Product Intranet Agent</h6>
                  <div className="flex">
                    <Image src={assets.Star} alt="" width={20} />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src={assets.EllipsBg}
            alt=""
            className="absolute -bottom-[400px] -left-[340px] w-[50%]"
          />
          <Image
            src={assets.Vector2}
            alt=""
            className="w-[400px] absolute -bottom-[250px] -left-[180px] "
          />
        </div>
      </section>

      {/* Pricing table */}
      {/* <section id="pricing" className="overflow-y-hidden overflow-hidden">
        <div className="relative">
          <Image
            src={assets.EllipsBg}
            alt=""
            className="absolute -bottom-[350px] -left-[340px] w-[50%]"
          />
          <Image
            src={assets.Vector2}
            alt=""
            className="w-[400px] absolute -bottom-[250px] -left-[180px] "
          />
        </div>

        <div className="px-5 sm:px-10 md:px-20 mt-20 z-50 pt-16">
          <div className="flex justify-center">
            <div className="flex justify-center flex-col lg:w-[70%] text-center">
              <h6 className="text-[#3ED5DD]">PRICING TABLE</h6>
              <h2 className="lg:text-5xl md:text-3xl text-2xl text-white my-2">
                Start using cyber security protect
              </h2>
              <h5 className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue metus quis accumsan euismod. Maecenas sed est
                mollis, convallis nisi convallis, imperdiet massa.
              </h5>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-end mt-10">
            <div className="">
              <div
                className={`${cardGradient} rounded-3xl px-7 py-4  text-white z-20`}
              >
                <div className="text-center">
                  <h6>Basic</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum congue metus quis accumsan euismod.{" "}
                  </p>
                </div>

                <div className="flex justify-center items-center w-[100%] my-5">
                  <div className="w-[90%] flex justify-center items-center py-5 px-10 bg-[#171717] rounded-full">
                    <h4>
                      $199 <span className="mx-2">|</span>
                    </h4>
                    <p className="">/per month</p>
                  </div>
                </div>

                <div className="flex">
                  <Image src={assets.Mark} alt="" />
                  <p>Real-time Threat Monitoring</p>
                </div>
                <div className="flex mt-3">
                  <Image src={assets.Mark} alt="" />
                  <p>Real-time Threat Monitoring</p>
                </div>
                <div className="flex mt-3">
                  <Image src={assets.Mark} alt="" />
                  <p>Real-time Threat Monitoring</p>
                </div>

                <div className="bg-gradient-to-r from-[#00A7D6] to-[#0A767B] mt-10 w-[100%] px-5 py-4 text-center">
                  <Link
                    href="/#"
                    className="w-[100%] text-center font-semibold"
                  >
                    Purchase
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:mb-7 mt-5 lg:mt-0">
              <div
                className={`${cardGradient} rounded-3xl px-7 py-4  text-white z-20`}
              >
                <div className="text-center">
                  <h6>Basic</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum congue metus quis accumsan euismod.{" "}
                  </p>
                </div>

                <div className="flex justify-center items-center w-[100%] my-5">
                  <div className="w-[90%] flex justify-center items-center py-5 px-10 bg-[#171717] rounded-full">
                    <h4>
                      $199 <span className="mx-2">|</span>
                    </h4>
                    <p className="">/per month</p>
                  </div>
                </div>

                <div className="flex">
                  <Image src={assets.Mark} alt="" />
                  <p>Real-time Threat Monitoring</p>
                </div>
                <div className="flex mt-3">
                  <Image src={assets.Mark} alt="" />
                  <p>Real-time Threat Monitoring</p>
                </div>
                <div className="flex mt-3">
                  <Image src={assets.Mark} alt="" />
                  <p>Real-time Threat Monitoring</p>
                </div>
                <div className="flex mt-3">
                  <Image src={assets.Mark} alt="" />
                  <p>Real-time Threat Monitoring</p>
                </div>

                <div className="bg-gradient-to-r from-[#00A7D6] to-[#0A767B] mt-10 w-[100%] px-5 py-4 text-center">
                  <Link
                    href="/#"
                    className="w-[100%] text-center font-semibold"
                  >
                    Purchase
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:mb-7 mt-5 lg:mt-0">
              <div
                className={`${cardGradient} rounded-3xl px-7 py-4  text-white z-20`}
              >
                <div className="text-center">
                  <h6>Basic</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum congue metus quis accumsan euismod.{" "}
                  </p>
                </div>

                <div className="flex justify-center items-center w-[100%] my-5">
                  <div className="w-[90%] flex justify-center items-center py-5 px-10 bg-[#171717] rounded-full">
                    <h4>
                      $199 <span className="mx-2">|</span>
                    </h4>
                    <p className="">/per month</p>
                  </div>
                </div>

                <div className="flex">
                  <Image src={assets.Mark} alt="" />
                  <p>Real-time Threat Monitoring</p>
                </div>
                <div className="flex mt-3">
                  <Image src={assets.Mark} alt="" />
                  <p>Real-time Threat Monitoring</p>
                </div>
                <div className="flex mt-3">
                  <Image src={assets.Mark} alt="" />
                  <p>Real-time Threat Monitoring</p>
                </div>

                <div className="bg-gradient-to-r from-[#00A7D6] to-[#0A767B] mt-10 w-[100%] px-5 py-4 text-center">
                  <Link
                    href="/#"
                    className="w-[100%] text-center font-semibold"
                  >
                    Purchase
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src={assets.EllipsBg}
            alt=""
            className="absolute -top-[350px] -right-[340px] w-[50%]"
          />
          <Image
            src={assets.Vector}
            alt=""
            className="w-[400px] absolute -top-[350px] -right-[180px] "
          />
        </div>
      </section> */}

      {/* testimonial  */}
      {/* 
      <section id="testimonial" className="overflow-y-hidden overflow-hidden">
         <div className="relative">
          <Image
            src={assets.EllipsBg}
            alt=""
            className="absolute -top-[350px] -right-[340px] w-[50%]"
          />
          <Image
            src={assets.Vector}
            alt=""
            className="w-[400px] absolute -top-[350px] -right-[180px] "
          />
        </div> 

        <div className="px-5 sm:px-10 md:px-20 mt-20 pt-20">
          <div className="flex justify-center">
            <div className="flex justify-center flex-col lg:w-[70%] text-center">
              <h6 className="text-[#3ED5DD]">TESTIMONIAL</h6>
              <h2 className="lg:text-5xl md:text-3xl text-2xl text-white my-2">
                See What Others People Are Saying
              </h2>
              <h5 className="text-white ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue metus quis accumsan euismod. Maecenas sed est
                mollis, convallis nisi convallis, imperdiet massa.
              </h5>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-10 z-20">
            <div className="bg-[#1f1e1eaf] z-20 p-4 text-white">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue metus quis accumsan euismod. Maecenas sed est
                mollis, convallis nisi convallis, imperdiet massa.{" "}
              </p>
              <div className="flex items-center mt-3">
                <Image src={assets.Testimonial} alt="" width={70} height={70} />
                <div className="ms-3">
                  <h1 className="text-xl">Marianne Bode</h1>
                  <h6 className="my-1">Product Intranet Agent</h6>
                  <div className="flex">
                    <Image src={assets.Star} alt="" width={20} />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1f1e1eaf] z-20 p-4 text-white">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue metus quis accumsan euismod. Maecenas sed est
                mollis, convallis nisi convallis, imperdiet massa.{" "}
              </p>
              <div className="flex items-center mt-3">
                <Image src={assets.Testimonial} alt="" width={70} height={70} />
                <div className="ms-3">
                  <h1 className="text-xl">Marianne Bode</h1>
                  <h6 className="my-1">Product Intranet Agent</h6>
                  <div className="flex">
                    <Image src={assets.Star} alt="" width={20} />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1f1e1eaf] z-20 p-4 text-white">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue metus quis accumsan euismod. Maecenas sed est
                mollis, convallis nisi convallis, imperdiet massa.{" "}
              </p>
              <div className="flex items-center mt-3">
                <Image src={assets.Testimonial} alt="" width={70} height={70} />
                <div className="ms-3">
                  <h1 className="text-xl">Marianne Bode</h1>
                  <h6 className="my-1">Product Intranet Agent</h6>
                  <div className="flex">
                    <Image src={assets.Star} alt="" width={20} />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1f1e1eaf] z-20 p-4 text-white">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue metus quis accumsan euismod. Maecenas sed est
                mollis, convallis nisi convallis, imperdiet massa.{" "}
              </p>
              <div className="flex items-center mt-3">
                <Image src={assets.Testimonial} alt="" width={70} height={70} />
                <div className="ms-3">
                  <h1 className="text-xl">Marianne Bode</h1>
                  <h6 className="my-1">Product Intranet Agent</h6>
                  <div className="flex">
                    <Image src={assets.Star} alt="" width={20} />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div className="relative">
          <Image
            src={assets.EllipsBg}
            alt=""
            className="absolute -bottom-[400px] -left-[340px] w-[50%]"
          />
          <Image
            src={assets.Vector2}
            alt=""
            className="w-[400px] absolute -bottom-[250px] -left-[180px] "
          />
        </div> 
    </section>
    */}

      {/* Footer */}
      <section className="overflow-y-hidden overflow-hidden">
        {/* <div className="relative">
          <Image
            src={assets.EllipsBg}
            alt=""
            className="absolute -bottom-[350px] -left-[340px] w-[50%]"
          />
          <Image
            src={assets.Vector2}
            alt=""
            className="w-[400px] absolute -bottom-[250px] -left-[180px] "
          />
        </div> */}
        <div className="relative">
          <Image
            src={assets.EllipsBg}
            alt=""
            className="absolute -bottom-[350px] -left-[340px] w-[50%]"
          />
          <Image
            src={assets.Vector2}
            alt=""
            className="w-[400px] absolute -bottom-[250px] -left-[180px] "
          />
        </div>

        <div className="px-5 sm:px-10 md:px-20 py-10 mt-10">
          <div className="md:flex justify-between items-start mb-7">
            <div className="flex items-center">
              <Image src={assets.BrandLogo} alt="" width={50} />
              <h3 className="text-white text-4xl ms-5">
                Abi
                <span className="text-[#3ED5DD]">sentry</span>
              </h3>
            </div>
            <div className="md:w-[60%] text-white mt-5 md:mt-0">
              <h3 className="text-2xl mb-5">Newletter</h3>
              <form action="">
                <div className="flex relative">
                  <input
                    type="email"
                    placeholder="Enter your emai"
                    className="w-[100%] text-xl text-black bg-white py-4 px-4 rounded-2xl outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#3ED5DD] p-2 px-2 rounded-xl absolute right-4 top-2"
                  >
                    Subcribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 text-center text-white">
            {/* first part */}
            <div className="md:flex justify-between">
              <div className="text-xl md:w-[50%] mt-4">
                <h1 className="text-2xl">Services</h1>
                <div className="mt-2 text-base lg:text-lg md:text-start text-gray-300">
                  {[
                    "End point protextion",
                    "Vulnerability Assessment",
                    "Account Review",
                    "Therath Intelligences",
                    "Incident Responce",
                    "Compiances and Regulation",
                  ].map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              </div>

              {/* second  */}
              <div className="text-xl md:w-[50%] mt-4">
                <h1 className="text-2xl">About Us</h1>
                <div className="mt-2 text-base lg:text-lg md:text-start lg:text-center text-gray-300">
                  {["Career", "Press", "Blog", "SiteMap"].map((text, i) => (
                    <p key={i} className="my-2">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* third */}
            <div className="md:flex justify-between">
              <div className=" text-xl md:w-[50%] mt-4">
                <h1 className=" text-2xl">Quick Link</h1>
                <ul className=" mt-2 text-base lg:text-lg md:text-start lg:text-center text-gray-300">
                  <li>Testimonial</li>
                  <li>Our Service</li>
                  <li>About Us</li>
                  <li>Pricing</li>
                  <li>Our Goals</li>
                </ul>
              </div>

              {/* last */}
              <div className=" text-2xl md:w-[50%] mt-4">
                <h3>Contact Us</h3>
                <div className=" mt-4 flex justify-center md:justify-between text-gray-300">
                  <Link
                    href="/#"
                    className="border-[1px] border-gray-300 rounded-xl p-2 mx-6 md:mx-0"
                  >
                    <FaInstagram className="text-2xl" />
                  </Link>
                  <Link
                    href="/#"
                    className="border-[1px] border-gray-300 rounded-xl p-2 mx-6 md:mx-0"
                  >
                    <FiFacebook className="text-2xl" />
                  </Link>
                  <Link
                    href="/#"
                    className="border-[1px] border-gray-300 rounded-xl p-2 mx-6 md:mx-0"
                  >
                    <FaXTwitter className="text-2xl" />
                  </Link>
                  <Link
                    href="/#"
                    className="border-[1px] border-gray-300 rounded-xl p-2 mx-6 md:mx-0"
                  >
                    <FiYoutube className="text-2xl" />
                  </Link>
                  {/* <li>i dont know</li>
                  <li>+234700000000</li> */}
                </div>

                <div className="flex justify-center items-center md:justify-start md:items-start flex-col">
                  <div className="flex items-center my-5">
                    <HiOutlineMail className="text-2xl" />
                    <Link
                      href="abbisentry03@gmail.com"
                      className="ms-3 text-sm text-gray-300"
                    >
                      abbisentry03@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center mb-5">
                    <IoLocationOutline className="text-2xl" />
                    <p className="ms-3 text-sm"> I dont know</p>
                  </div>

                  <div className="flex items-center">
                    <LuPhone className="text-2xl" />
                    <p className="ms-3 text-sm"> +234 7067140451</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
