"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface WhoamiProps {
  classname?: string; // Use string if style is optional; use 'string | undefined' if not.
}

const Whoami = ({ classname }: WhoamiProps) => {
  const [isHovred, setIsHovered] = useState(false);
  const [IsLoad, setIsLoad] = useState(false);

  useEffect(() => {setIsLoad(true)}, []);

  return (
    <div id="Whoami" className={twMerge(classname, " transform ease-in transition-all")}>
      <div className="contant w-[1000px] m-[auto]">
          <p className={twMerge("introduction block delay-100 transition-opacity duration-200", IsLoad ? " opacity-100 " : " opacity-0 ")}>Hi, my name is </p>
          <p className={twMerge("MyName text-[var(--trdColor)] text-[80px] font-bold font-[Roboto] block  delay-200 transition-opacity duration-300", IsLoad ? " opacity-100 " : " opacity-0 ")}>Chahbi Youssef.</p>
          <p className={twMerge("WhatIdo text-[var(--seconderyColor)] text-[70px] font-bold font-[Roboto] block  delay-300 transition-opacity duration-400", IsLoad ? " opacity-100 " : " opacity-0 ")}>I build things for the web.</p>
          <p className={twMerge("Description text-[var(--seconderyColor)] text-[18px] font-[Roboto] w-[600px] my-[20px] block  delay-400 transition-opacity duration-500", IsLoad ? " opacity-100 " : " opacity-0 ")}>
          I’m a software engineer specializing in building (and occasionally designing)
          exceptional digital experiences. Currently, I’m focused on building accessible,
          human-centered products at{" "}
          <Link
            href="https://github.com/y-chahbi"
            className="transition-all duration-500 ease-in-out relative inline-block"
            style={{ color: "var(--primaryColor)" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Upstatement
            <span
              className={`${
                isHovred ? "w-full" : "w-0"
              } transition-all duration-500 ease-in-out text-[var(--primaryColor)] h-[.1px] absolute bottom-0 left-0 bg-[var(--primaryColor)]`}
            ></span>
          </Link>
          .
        </p>
        <div className="CheckMyGithub mt-10 relative">
          <div className="BackDiv w-[230px] h-[60px] bg-[var(--primaryColor)] rounded-md"></div>
          <div className="BackDiv absolute top-0 left-0 w-[230px] h-[60px] bg-[var(--background)] flex border-[1px] border-[var(--primaryColor)] rounded-md justify-center items-center hover:-top-1 hover:-left-1 cursor-pointer transition-all duration-200 ease-in-out">
            <Link href={'https://github.com/y-chahbi'}>Check out my github!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoami;
