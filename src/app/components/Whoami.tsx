"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface WhoamiProps {
  classname?: string; // Use string if style is optional; use 'string | undefined' if not.
}

const Whoami = ({ classname }: WhoamiProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [IsLoad, setIsLoad] = useState(false);

  useEffect(() => {setIsLoad(true)}, []);

    return (
        <div id="Whoami" className={twMerge(classname, " px-[40px] md:px-[80px] h-screen transform transition-[all 0.25s cubic-bezier(0.645,0.045,0.355,1)] ")}>
            <div className="contant w-[1000px] m-[auto]">
                <p className={twMerge("introduction block transition-opacity duration-[300ms] delay-[300ms]", IsLoad ? " opacity-100 " : " opacity-0 ")}>Hi, my name is </p>
                <p className={twMerge("MyName text-[var(--trdColor)] text-[34px] md:text-[80px] font-bold font-[Roboto] block  transition-opacity duration-[500ms] delay-[500ms]", IsLoad ? " opacity-100 " : " opacity-0 ")}>Chahbi Youssef.</p>
                <p className={twMerge("WhatIdo text-[var(--seconderyColor)] text-[28px] md:text-[70px] font-bold font-[Roboto] block  transition-opacity duration-[700ms] delay-[700ms]", IsLoad ? " opacity-100 " : " opacity-0 ")}>I build things for the web.</p>
                <p className={twMerge("Description text-[var(--seconderyColor)] md:text-[18px] font-[Roboto] md:w-[600px] my-[20px] block transition-opacity duration-[900ms] delay-[900ms]", IsLoad ? " opacity-100 " : " opacity-0 ")}>
                I’m a software engineer specializing in creating innovative digital solutions that solve real-world problems. Currently, I’m focused on developing robust, user-friendly applications while deepening my expertise in technologies like JavaScript, React, and Node.js
                    {/* <Link
                        href="https://github.com/y-chahbi"
                        className="transition-all duration-500 ease-in-out relative inline-block"
                        style={{ color: "var(--primaryColor)" }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Upstatement
                        <span
                            className={`${
                                isHovered ? "w-full" : "w-0"
                            } transition-all duration-500 ease-in-out text-[var(--primaryColor)] h-[.1px] absolute bottom-0 left-0 bg-[var(--primaryColor)]`}
                        ></span>
                    </Link> */}
                    .
                </p>
                <div className={twMerge("CheckMyGithub mt-10 relative transition-opacity duration-[1200ms] delay-[1200ms]", IsLoad ? " opacity-100 " : " opacity-0 ")}>
                    <div className="BackDiv w-[230px] h-[60px] bg-[var(--primaryColor)] rounded-md"></div>
                    <div className={twMerge("BackDiv absolute top-0 left-0 w-[230px] h-[60px] bg-[var(--background)] flex border-[1px] border-[var(--primaryColor)] rounded-md justify-center items-center hover:-top-1 hover:-left-1 cursor-pointer transition-all duration-200 ease-in-out")}>
                        <Link href={'https://github.com/y-chahbi'}>Check out my github!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whoami;
