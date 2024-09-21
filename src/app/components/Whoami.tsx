"use client"

import {useState } from "react"
import Link from "next/link"


const Whoami = ({style} : any) => {

  const [isHovred, setisHoverd] = useState(false);

  return (
    <div id="Whoami" className={`${style}`}>
        <div className="contant w-[1000px] m-[auto]">
            <p className="introduction block">Hi, my name is </p>
            <p className="MyName text-[var(--trdColor)] text-[80px] font-bold font-[Roboto] block">Chahbi Youssef.</p>
            <p className="WhatIdo text-[var(--seconderyColor)] text-[70px] font-bold font-[Roboto] block">I build things for the web.</p>
            <p className="Description text-[var(--seconderyColor)] text-[18px] font-[Roboto] w-[600px] my-[20px] block">
                I’m a software engineer specializing in building (and occasionally designing)
                exceptional digital experiences. Currently, I’m focused on building accessible,
                human-centered products at <Link href="https://github.com/y-chahbi"
                    className="transition-all duration-500 ease-in-out relative inline-block"
                    style={{color: "var(--primaryColor)"}}
                    onMouseEnter={() => setisHoverd(true)}
                    onMouseLeave={() => setisHoverd(false)}
                >Upstatement
                <span className={` ${isHovred ? "w-full" : "w-0"} transition-all duration-500 ease-in-out text-[var(--primaryColor)]
                    h-[.1px] absolute bottom-0 left-0 bg-[var(--primaryColor)]`}></span></Link>.
            </p>
            <div className="CheckMyGithub mt-10 relative">
                <div className="BackDiv w-[230px] h-[60px] bg-[var(--primaryColor)] rounded-md"></div>
                <div className="BackDiv absolute top-0 left-0 w-[230px] h-[60px] bg-[var(--background)]
                    flex border-[1px] border-[var(--primaryColor)] rounded-md justify-center items-center
                    hover:-top-1 hover:-left-1 cursor-pointer transition-all duration-200 ease-in-out">
                    <Link href={'https://github.com/y-chahbi'}>Check out my github!</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whoami
