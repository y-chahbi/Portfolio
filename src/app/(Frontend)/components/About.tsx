import React from 'react';
import img from './../data/ychahbi.jpeg';
// import newImg from './../data/ychahbi.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Skill from './Helpers/Skill';
import CompTitle from './Helpers/CompTitle';

interface AboutProps {
  classname?: string; // Specify the correct type for the style prop
}

const About: React.FC<AboutProps> = ({ classname }) => {
  
  const Myskills = ["C programming", "C++", "Java", "TypeScript", "JavaScript", "React.js", "Next.js", "Node.js", "Docker", "Git", "Bash"];

  return (
    <div id="About" className={`${classname} md:px-[40px]`}>
      <div className="Box px-[40px] md:w-[1000px] m-[auto]">
        <CompTitle number="01. " title="About Me" width="w-[30%]" titleStyle='' />
        <div className="AboutParImageHolder flex max-md:flex-col md:justify-between my-[30px]">
          <div className="text-[var(--seconderyColor)] w-[100%] md:w-[60%] text-[18px] font-normal font-[Roboto]">
            <div className="Main">
              <p className="mb-[20px]">
              Hello! My name is Youssef Chahbi, and I am a passionate coding enthusiast currently studying at<Link href={'https://42.fr'} className="text-[var(--primaryColor)]">  1337</Link> coding school, part of 
              <Link href={'https://42.fr'} className="text-[var(--primaryColor)]"> 42.fr</Link>
              . My journey in programming began about four years ago when I started coding in C, C++, and Java. I thrive on tackling challenging projects and enjoy the satisfaction of diving deep into low-level programming.              </p>
              <p className="mb-[20px]">
                {/* <Link href={'/'} className="text-[var(--primaryColor)]"> an advertising agency</Link>,  */}
                At<Link href={'https://42.fr'} className="text-[var(--primaryColor)]">  1337</Link>, I believe in learning by doing, which has allowed me to hone my skills through hands-on projects rather than traditional internships. As I continue to develop my skills, I am eager to expand my knowledge in JavaScript and Java, particularly with frameworks like React, Next.js, Node.js, and Spring Boot. I am also exploring algorithms to further enhance my programming proficiency.
              </p>
              <p className="mb-[20px]">
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>
            <div className="Skilles flex justify-between flex-wrap text-[15px] font-[Inconsolata]">
              {Myskills.map((skill, index) => (
                <Skill key={index} name={`${skill}`} />
              ))}
            </div>
          </div>
          <div className="ImageHolder relative group max-md:mt-[100px] md:mt-[20px] max-md:m-auto">
            <div className="BoderdHolder relative top-0 left-0 rounded-md md:w-[200px] md:h-[200px] w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] border-2 border-[var(--primaryColor)] group-hover:top-1 group-hover:left-1 transition-all duration-200 ease-in-out" />
            <div className="BoderdHolder absolute -top-3 -left-3 rounded-md md:w-[200px] md:h-[200px] w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] border-2 border-[var(--primaryColor)] group-hover:-top-4 group-hover:-left-4 contrast-100 group-hover:contrast-100 transition-all duration-200 ease-in-out">
              <Image src={img} alt="Picture of the author" />
            </div>
            <div className="BoderdHolder absolute -top-3 -left-3 rounded-md md:w-[200px] md:h-[200px] w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] border-2 border-[var(--primaryColor)] group-hover:-top-4 group-hover:-left-4 bg-[var(--primaryColor)] opacity-50 group-hover:opacity-0 transition-all duration-200 ease-in-out" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
