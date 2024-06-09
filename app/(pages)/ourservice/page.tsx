import Image from "next/image";
import assets from "@/public/assets/assets";

const page = () => {
  return (
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

      <div className="px-20">
        <div className="flex justify-center">
          <div className="flex justify-center flex-col w-[60%] text-center">
            <h6 className="text-[#3ED5DD]">Our Service</h6>
            <h2 className="text-5xl text-white my-2">
              Protecting Your Digital Assets Expertly
            </h2>
            <h5 className="text-white">
              Protect your devices and networks from malware, ransomware, and
              other cyber threats with our comprehensive endpoint security
              solutions. Safeguard sensitive data and ensure business continuity
              with real-time threat detection and response.
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-20">
          <div className="mt-5">
            <div className=" bg-gradient-to-r from-[#32333593] via-[#171717] via-30% via-[#171717] via-60% to-[#32333593] border-[1px] border-[#3ED5DD] rounded-3xl relative h-auto flex flex-col justify-center items-center px-10 py-5 text-white">
              <Image
                src={assets.IconCyberSecurity}
                alt=""
                className="border-[#3ED5DD] border-[1px] rounded-full p-3 bg-[#0A767B] absolute -top-[35px] w-[70px]"
              />

              <h4 className="text-center mt-10 text-3xl">
                Cyber security Assessment{" "}
              </h4>
              <p className="text-center text-sm leading-7 mt-5">
                Protect your devices and networks from malware, ransomware, and
                other cyber threats with our comprehensive endpoint security
                solutions. Safeguard sensitive data and ensure business
                continuity with real-time threat detection and response.{" "}
              </p>
            </div>
          </div>

          <div className="">
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

          <div className=" mt-7">
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
                Protect your devices and networks from malware, ransomware, and
                other continuity with real-time threat detection and response.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <Image
          src={assets.EllipsBg}
          alt=""
          className="absolute -bottom-[350px] -left-[340px] w-[50%]"
        />
        <Image
          src={assets.Vector2}
          alt=""
          className="w-[400px] absolute -bottom-[200px] -left-[180px] "
        />
      </div>
    </section>
  );
};

export default page;
