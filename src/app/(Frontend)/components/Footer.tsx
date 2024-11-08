import Link from 'next/link';
import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaCodepen } from "react-icons/fa";


interface FooterProps {
    classname?: string; // Define the classname prop as an optional string
}

const Footer: React.FC<FooterProps> = ({ classname }) => {
    return (
        <footer id="Footer" className={`${classname} mt-[60px] md:mt-[200px] mb-[40px] flex-col justify-center items-center h-[80px] text-[var(--seconderyColor)] text-[14px] py-[10px]`}>
            <div className='socialMedia md:hidden text-[16px] my-[20px] text-[var(--seconderyColor)] flex flex-row w-1/2 justify-between transition-all transform'>
                <Link href={"https://github.com/y-chahbi/"} className='hover:text-[var(--primaryColor)] hover:translate-y-[-6px] ease-in-out duration-300'>
                    <FiGithub size={"20px"}/>
                </Link>
                <Link href={"https://www.instagram.com/c_ussf/"} className='hover:text-[var(--primaryColor)] hover:translate-y-[-6px] ease-in-out duration-300'>
                    <FaInstagram size={"20px"}/>
                </Link>
                <Link href={"https://x.com/c_ussf"} className='hover:text-[var(--primaryColor)] hover:translate-y-[-6px] ease-in-out duration-300'>
                    <FiTwitter size={"20px"}/>
                </Link>
                <Link href={"https://www.linkedin.com/in/y-chahbi/"} className='hover:text-[var(--primaryColor)] hover:translate-y-[-6px] ease-in-out duration-300'>
                    <FiLinkedin size={"20px"}/>
                </Link>
                <Link href={"https://codepen.io/"} className='hover:text-[var(--primaryColor)] hover:translate-y-[-6px] ease-in-out duration-300'>
                    <FaCodepen size={"20px"}/>
                </Link>
            </div>
            <Link href={"https://github.com/y-chahbi/Portfolio"} className='hover:text-[var(--primaryColor)]  transition-all duration-100 ease-in-out'>
                <p>Designed & Built by Brittany Chiang</p>
                <div className='footer-tools flex flex-row justify-center'>
                    <div className='Stars flex felx-col justify-center items-center mx-[4px]'>{<FaRegStar style={{marginRight: "4px"}}/>} 7,535</div>
                    <div className='forks  flex felx-col justify-center items-center mx-[4px]'>{<GoRepoForked  style={{marginRight: "4px"}}/>} 3,726</div>
                </div>
            </Link>
        </footer>
    );
};

export default Footer;