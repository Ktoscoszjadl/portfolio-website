"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#09FF87] via-[#0074D4] to-[#FFD006]">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Bartek",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Student",
                1000,
                "a Software Developer",
                1000,
                "a Robotics Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mt-6 lg:text-xl">
            {" "}
            I am a hardworking College Student seeking employment. My goal is to
            gain experience in the industry and be able to develop further,
            especially towards robotics, AI and computer science. I am motivated
            by the prospect of working with experienced staff who will certainly
            help me acquire new skills.
          </p>
          <div className="mt-6">
            <button className=" px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#FFD006] via-[#09FF87] to-[#0074D4] hover:bg-slate-200 text-black">
              HIRE ME
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-transparent bg-gradient-to-br from-[#09FF87] via-[#0074D4] to-[#FFD006] hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-10 lg:mt-0">
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/zdj-pass.png"
              alt="hero image"
              className="rounded-xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
