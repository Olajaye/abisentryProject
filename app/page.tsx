import assets from "@/public/assets/assets";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const aboutGradient =
    "bg-gradient-to-r from-[#54F4FC] via-[#54F4FC] via-30% via-[#B4F3FF] via-75%  to-[#176DB4]";

  const cardGradient =
    "bg-gradient-to-r from-[#32333593] via-[#171717] via-30% via-[#171717] via-60% to-[#32333593]";
  return (
    <main className=" relative ">
      <Image
        src={assets.Ellips}
        alt=""
        className="absolute -top-60 right-10 hidden w-[60%] md:block"
      />

      {/* Hero */}
      <header className="md:flex px-5 sm:px-10 md:px-20 mb-20 md:mt-10">
        <div className="h-auto flex flex-col justify-end">
          <div className="flex">
            <div className="flex flex-col justify-center items-center">
              <Image src={assets.group} alt="" className="h-[80%]" />
            </div>
            <div className="text-2xl sm:text-3xl lg:text-5xl text-white h-auto w-auto">
              <h2>Comprehensive</h2>
              <h2>Cybersecurity Strategies for </h2>
              <h2>Growth and Resilience</h2>
              <p className="text-xs lg:text-base">
                Unlock your business&apos;s full potential with our
                comprehensive cybersecurity strategies. Safeguard your growth
                and resilience in the digital age.
              </p>
            </div>
          </div>

          <Link
            href="/#"
            className="text-white md:ms-10 mb-5 md:mb-10 mt-5 md:mt-[5%] bg-gradient-to-r from-[#00A7D6] to-[#0A767B] w-48 px-4 py-2 rounded-lg"
          >
            {" "}
            Learn more
          </Link>
        </div>
        <div className="relative">
          <Image
            src={assets.Ellips}
            alt=""
            className="absolute -top-20 right-0 md:hidden"
          />
          <Image src={assets.hero} alt="" />
        </div>
      </header>

      {/* About Us */}
      <section className="px-5 sm:px-10 md:px-20 mb-20">
        <div className="lg:flex justify-between">
          <div className="lg:w-[48%]">
            <Image src={assets.cyberSecurity} alt="cyber security" />
          </div>
          <div className="lg:w-[48%]">
            <h6 className="text-[#3ED5DD]">ABOUT US</h6>
            <h1 className="text-2xl lg:text-3xl xl:text-5xl text-white font-semibold mt-4">
              Discover Our Journey Protecting Your Digital World with Expertise
              and Care
            </h1>
            <p className="mt-4 text-lg lg:text-base xl:text-lg text-white">
              At <span className="text-[#3ED5DD]">Abisentry,</span> we&apos;re
              dedicated to protecting businesses and individuals from the
              ever-evolving threats in the digital landscape. With 5years of
              experience in the cybersecurity industry, we have honed our
              expertise to deliver innovative solutions that safeguard your
              digital assets and maintain your peace of mind.
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

      {/* Our sercices */}
      <section className="overflow-y-hidden overflow-hidden">
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

        <div className="px-5 sm:px-10 md:px-20">
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
            <div className="lg:mt-5 md:mt-10">
              <div
                className={`${cardGradient} border-[1px] border-[#3ED5DD] rounded-3xl relative h-auto flex flex-col justify-center items-center px-10 py-5 text-white`}
              >
                <Image
                  src={assets.IconCyberSecurity}
                  alt=""
                  className="border-[#3ED5DD] border-[1px] rounded-full p-3 bg-[#0A767B] absolute -top-[35px] w-[70px]"
                />

                <h4 className="text-center mt-10 text-3xl">
                  Cyber security Assessment{" "}
                </h4>
                <p className="text-center text-sm leading-7 mt-5">
                  Protect your devices and networks from malware, ransomware,
                  and other cyber threats with our comprehensive endpoint
                  security solutions. Safeguard sensitive data and ensure
                  business continuity with real-time threat detection and
                  response.{" "}
                </p>
              </div>
            </div>

            <div className="md:mt-10 lg:mt-0">
              <div className=" bg-gradient-to-r from-[#32333593] via-[#171717] via-30% via-[#171717] via-60% to-[#32333593] border-[1px] border-[#3ED5DD] rounded-3xl relative h-auto flex flex-col justify-center items-center px-10 py-5 text-white">
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
            </div>

            <div className=" lg:mt-7 md:mt-10">
              <div className=" bg-gradient-to-r from-[#32333593] via-[#171717] via-30% via-[#171717] via-60% to-[#32333593] border-[1px] border-[#3ED5DD] rounded-3xl relative h-auto flex flex-col justify-center items-center px-10 py-5 text-white">
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

      {/* Future point */}
      <section className="overflow-y-hidden overflow-hidden">
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

        <div className="px-5 sm:px-10 md:px-20 mt-20">
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
              <p className="mt-4 text-lg lg:text-base xl:text-lg text-white">
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

      {/* Our goal */}
      <section className="overflow-y-hidden overflow-hidden">
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

        <div className="px-5 sm:px-10 md:px-20 mt-20">
          <div className="flex justify-center">
            <div className="flex justify-center flex-col lg:w-[70%] text-center">
              <h6 className="text-[#3ED5DD]">OUR GOALS</h6>
              <h2 className="text-5xl text-white my-2">
                Securing Your Digital World Together
              </h2>
              <h5 className="text-white">
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
      <section className="overflow-y-hidden overflow-hidden">
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

        <div className="px-5 sm:px-10 md:px-20 mt-20 z-50">
          <div className="flex justify-center">
            <div className="flex justify-center flex-col lg:w-[70%] text-center">
              <h6 className="text-[#3ED5DD]">PRICING TABLE</h6>
              <h2 className="text-5xl text-white my-2">
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
      </section>

      {/* testimonial */}
      <section className="overflow-y-hidden overflow-hidden">
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

        <div className="px-5 sm:px-10 md:px-20 mt-20">
          <div className="flex justify-center">
            <div className="flex justify-center flex-col lg:w-[70%] text-center">
              <h6 className="text-[#3ED5DD]">TESTIMONIAL</h6>
              <h2 className="text-5xl text-white my-2">
                See What Others People Are Saying
              </h2>
              <h5 className="text-white">
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

      {/* Footer */}
      <section className="overflow-y-hidden overflow-hidden">
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
          <div className="grid sm:grid-cols-2 gap-4 justify-center items-center md:justify-start md:items-start lg:grid-cols-4 text-white">
            {/* first part */}
            <div>
              <div className="flex items-center">
                <Image src={assets.BrandLogo} alt="" width={50} />
                <h3 className="text-white text-4xl ms-5">
                  Abi
                  <span className="text-[#3ED5DD]">sentry</span>
                </h3>
              </div>
              <p>xxxxxxxxx</p>
              <div>social links</div>
            </div>

            {/* second  */}
            <div>
              <h3>Quick Link</h3>
              <ul>
                <li>Our Service</li>
                <li>About Us</li>
                <li>Pricing</li>
                <li>Testimonial</li>
              </ul>
            </div>

            {/* third */}
            <div>
              <h3>Quick Link</h3>
              <ul>
                <li>abisentry3@gmail.com</li>
                <li>i dont know</li>
                <li>+234700000000</li>
              </ul>
            </div>

            {/* Last part */}
            <div>
              <h3>Newletter</h3>
              <form action="">
                <div className="flex relative">
                  <input
                    type="button"
                    value=""
                    placeholder="Email"
                    className="w-[100%] bg-white py-2 px-4 rounded-2xl"
                  />
                  <button type="submit" className="bg-red-900 p-4 absolute">
                    Subcribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
