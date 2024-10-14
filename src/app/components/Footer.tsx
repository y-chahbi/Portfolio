import Link from 'next/link';
import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";



interface FooterProps {
    classname?: string; // Define the classname prop as an optional string
}

const Footer: React.FC<FooterProps> = ({ classname }) => {
    return (
        <footer id="Footer" className={`${classname} mt-[200px] flex-col justify-center items-center h-[80px] text-[var(--seconderyColor)] text-[14px] py-[10px]`}>
            <Link href={"https://github.com/y-chahbi/Portfolio"} className='hover:text-[var(--primaryColor)] transition-all duration-100 ease-in-out'>
                <p>Designed & Built by Brittany Chiang</p>
                <div className='footer-tools flex flex-row'>
                    <div className='Stars flex felx-col justify-center items-center mx-[4px]'>{<FaRegStar style={{marginRight: "4px"}}/>} 7,535</div>
                    <div className='forks  flex felx-col justify-center items-center mx-[4px]'>{<GoRepoForked  style={{marginRight: "4px"}}/>} 3,726</div>
                </div>
            </Link>
        </footer>
    );
};

export default Footer;