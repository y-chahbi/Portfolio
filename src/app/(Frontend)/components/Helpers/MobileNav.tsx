"use client"
import { useEffect, useState } from "react";
import { TbListTree } from "react-icons/tb";
import { RiCloseLargeLine } from "react-icons/ri";
import Link from "next/link";


export default function MobileNav () {
    const [showMenu, setshowMenu] = useState(false);

    const handleClick = () => {
        setshowMenu(!showMenu);
    }

    const ButtonStyle = {
        fontSize: "36px",
        zIndex: "10",
    }; 

    useEffect(() => {
        if (showMenu) {
          // Disable scrolling on body
          document.body.style.overflow = 'hidden';
        } else {
          // Enable scrolling again
          document.body.style.overflow = 'auto';
        }
        
        // Cleanup the effect
        return () => {
          document.body.style.overflow = 'auto'; // Ensure scrolling is reset when component unmounts
        };
    }, [showMenu]);

    return (
        <div className="Holder relative">
            <button className="z-10" onClick={handleClick}>{!showMenu ? <TbListTree style={ButtonStyle} /> : <RiCloseLargeLine style={ButtonStyle} />}</button>

            {showMenu && (
                <div  className="z-[8] inset-0 overflow-hidden fixed top-[80px] left-0 w-full h-screen backdrop-opacity-95 backdrop-blur-lg">
                    <div className="newMenu right-0 fixed top-[10px] w-full sm:w-1/2 h-screen bg-[#112240] rounded-tl-md flex flex-col items-center justify-center">
                        <ul className={`flex flex-col text-[24px] font-[Inconsolata]
                            list-[decimal-leading-zero] marker:text-[var(--primaryColor)] text-[var(--trdColor)]`}>
                            <li className='hover:text-[var(--primaryColor)] hover:cursor-pointer mt-[30px]'>
                                <Link onClick={() => setshowMenu(false)} href="#About">About</Link></li>
                            <li className='hover:text-[var(--primaryColor)] hover:cursor-pointer mt-[30px]'>
                                <Link onClick={() => setshowMenu(false)} href="#Experience">Experience</Link></li>
                            <li className='hover:text-[var(--primaryColor)] hover:cursor-pointer mt-[30px]'>
                                <Link onClick={() => setshowMenu(false)} href="#Work">Work</Link></li>
                            <li className='hover:text-[var(--primaryColor)] hover:cursor-pointer mt-[30px]'>
                                <Link onClick={() => setshowMenu(false)} href="#Contact">Contact</Link></li>
                        </ul>
                        <div className='Download relative text-[22px] bg-[var(--primaryColor)] w-[120px] h-[50px] p-[8px] mt-[40px] rounded-md'>
                            <Link 
                                className='DownloadButton absolute -top-0 -left-0 bg-[var(--background)]
                                    text-[22px] text-center border-[1px] w-[120px] h-[50px]
                                    border-[var(--primaryColor)] p-[8px] rounded-md
                                    hover:-top-1 hover:-left-1 ease-linear duration-100'
                                href='/download'> Resume
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}

