import React from 'react'
import img from './../data/ychahbi.jpeg'
import Image from 'next/image'
import Link from 'next/link'




const About = ({style} : any) => {
    return (
        <div id="About" className={`${style}`}>
            <div className='Box w-[1000px] m-[auto]'>
                <div className='BoxHead flex items-center justify-start'>
                    <p className='Number text-[26px] text-[var(--primaryColor)] mr-[10px] flex-none'>01.</p>
                    <p className='Title text-[var(--trdColor)] text-[30px] font-[Roboto] font-bold flex-none '>About Me</p>
                    <span className='w-[30%] mx-[20px] h-[0.2px] bg-[var(--trdColor)]'></span>
                </div>
                <div className='AboutParImageHolder flex justify-between my-[30px]'>
                    <div className='text-[var(--seconderyColor)] w-[62%] text-[19px] font-[Roboto]'>
                        <div className='Main'>
                            <p className='mb-[20px]'>
                                Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                            </p>
                            <p className='mb-[20px]'>
                                Fast-forward to today, and I’ve had the privilege of working at 
                                <Link href={'/'} className='text-[var(--primaryColor)]'> an advertising agency</Link>, 
                                <Link href={'/'} className='text-[var(--primaryColor)]'> a start-up</Link>, 
                                <Link href={'/'} className='text-[var(--primaryColor)]'> a huge corporation</Link>, and 
                                <Link href={'/'} className='text-[var(--primaryColor)]'> a student-led design studio</Link>
                                . My main focus these days is building accessible, inclusive products and digital experiences at 
                                <Link href={'/'} className='text-[var(--primaryColor)]'> Upstatement </Link>
                                for a variety of clients.
                            </p>
                            <p className='mb-[20px]'>
                                I also recently
                                <Link href={'/'} className='text-[var(--primaryColor)]'> launched a course </Link>
                                that covers everything you need to build a web app with the Spotify API using Node & React.
                            </p>
                            <p className='mb-[20px]'>
                                Here are a few technologies I’ve been working with recently:
                            </p>
                        </div>
                        <div className='Skilles flex justify-between'>
                            <div className='Skil flex flex-row items-center'>
                                <div className={`Icon w-0 h-0 relative border-t-[5px] border-t-transparent border-l-[10px] border-l-[var(--primaryColor)] border-b-[5px] border-b-transparent
                                                mr-[15px]`}>
                                    <div className='{`Icon w-0 h-0 absolute -top-[3px] -left-[9px] border-t-[3px] border-t-transparent border-l-[6px] border-l-[var(--background)] border-b-[3px] border-b-transparent
                                                mr-[15px]`'>

                                    </div>
                                </div>
                                <div className='SkillName'>JavaScript (ES6+)</div>
                            </div>
                        </div>
                    </div>
                    <div className='ImageHolder relative group'>

                        <div className='BoderdHolder relative top-0 left-0 rounded-md w-[300px] h-[300px] border-2 border-[var(--primaryColor)]
                            group-hover:top-1 group-hover:left-1 transition-all duration-200 ease-in-out'>
                        </div>

                        <div className='BoderdHolder absolute -top-3 -left-3 rounded-md w-[300px] h-[300px] border-2 border-[var(--primaryColor)]
                            group-hover:-top-4 group-hover:-left-4 contrast-100	group-hover:contrast-100 transition-all duration-200 ease-in-out'>
                            <Image src={img} alt="Picture of the author"/>
                        </div>

                        <div className='BoderdHolder absolute -top-3 -left-3 rounded-md w-[300px] h-[300px] border-2 border-[var(--primaryColor)]
                            group-hover:-top-4 group-hover:-left-4 bg-[var(--primaryColor)] opacity-50 group-hover:opacity-0 transition-all duration-200 ease-in-out'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
