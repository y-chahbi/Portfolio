import Link from 'next/link';
import React, { FC, ReactElement } from 'react';
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaCodepen } from "react-icons/fa";




interface PassContent {
    children: React.ReactNode;
    className?: string; // Change style to className to reflect usage
}

const Content: FC<PassContent> = ({ children, className }) => {
    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child as ReactElement, {
                classname: `${child.props.className || ''} ${className || ''}`, // Merge class names safely
            });
        }
        return child; // Return non-element children as-is
    });

  return (
        <div>
            <div className='FixedDiv fixed bottom-0 left-[50px]'>
                <div className='socialMedia text-[16px] fixed bottom-[120px] left-[42px] text-[var(--seconderyColor)] flex flex-col transition-all transform'>
                    <Link href={"https://github.com/y-chahbi/"} className='hover:text-[var(--primaryColor)] hover:translate-y-[-6px] ease-in-out duration-300'><FiGithub size={"20px"} style={{marginBottom: "24px"}}/></Link>
                    <Link href={"https://www.instagram.com/c_ussf/"} className='hover:text-[var(--primaryColor)] hover:translate-y-[-6px] ease-in-out duration-300'><FaInstagram size={"20px"} style={{marginBottom: "24px"}}/></Link>
                    <Link href={"https://x.com/c_ussf"} className='hover:text-[var(--primaryColor)] hover:translate-y-[-6px] ease-in-out duration-300'><FiTwitter size={"20px"} style={{marginBottom: "24px"}}/></Link>
                    <Link href={"https://www.linkedin.com/in/y-chahbi/"} className='hover:text-[var(--primaryColor)] hover:translate-y-[-6px] ease-in-out duration-300'><FiLinkedin size={"20px"} style={{marginBottom: "24px"}}/></Link>
                    <Link href={"https://codepen.io/"} className='hover:text-[var(--primaryColor)] hover:translate-y-[-6px] ease-in-out duration-300'><FaCodepen size={"20px"} style={{marginBottom: "24px"}}/></Link>
                </div>
                <div className='line w-[2px] h-[100px] bg-[var(--seconderyColor)]'></div>
            </div>
            {childrenWithProps}
            <div className='FixedDiv fixed bottom-0 right-[50px] transition-all'>
                <div className='email text-[16px] fixed rotate-90 cursor-pointer bottom-[200px] hover:text-[var(--primaryColor)] hover:translate-y-[-6px] ease-in-out duration-300 -right-[25px] text-[var(--seconderyColor)]'> contact@ychahbi.live</div>
                <div className='line w-[2px] h-[100px] bg-[var(--seconderyColor)]'></div>
            </div>
        </div>
    );
};

export default Content;
