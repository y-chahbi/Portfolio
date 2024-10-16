import React from 'react';
import img from './../data/ychahbi.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import Skill from './Helpers/Skill';
import CompTitle from './Helpers/CompTitle';

interface AboutProps {
  classname?: string; // Specify the correct type for the style prop
}

const About: React.FC<AboutProps> = ({ classname }) => {
  const Myskills = ["JavaScript (ES6+)", "TypeScript", "React", "Eleventy", "Node.js", "WordPress"];

  return (
    <div id="About" className={`${classname} md:px-[40px]`}>
      <div className="Box px-[40px] md:w-[1000px] m-[auto]">
        <CompTitle number="01. " title="About Me" width="w-[30%]" titleStyle='' />
        <div className="AboutParImageHolder flex max-md:flex-col md:justify-between my-[30px]">
          <div className="text-[var(--seconderyColor)] w-[100%] md:w-[60%] text-[18px] font-normal font-[Roboto]">
            <div className="Main">
              <p className="mb-[20px]">
                Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p>
              <p className="mb-[20px]">
                Fast-forward to today, and I’ve had the privilege of working at 
                <Link href={'/'} className="text-[var(--primaryColor)]"> an advertising agency</Link>, 
                <Link href={'/'} className="text-[var(--primaryColor)]"> a start-up</Link>, 
                <Link href={'/'} className="text-[var(--primaryColor)]"> a huge corporation</Link>, and 
                <Link href={'/'} className="text-[var(--primaryColor)]"> a student-led design studio</Link>
                . My main focus these days is building accessible, inclusive products and digital experiences at 
                <Link href={'/'} className="text-[var(--primaryColor)]"> Upstatement </Link>
                for a variety of clients.
              </p>
              <p className="mb-[20px]">
                I also recently
                <Link href={'/'} className="text-[var(--primaryColor)]"> launched a course </Link>
                that covers everything you need to build a web app with the Spotify API using Node & React.
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
