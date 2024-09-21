import React from 'react'
import img from './../data/ychahbi.jpeg'
import Image from 'next/image'




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
                    <div className=''>Par</div>
                    <div className='ImageHolder relative'>
                        <div className='BoderdHolder rounded-md w-[300px] h-[350px] border-2 border-[var(--primaryColor)]'></div>
                        <div className='BoderdHolder absolute -top-3 -left-3 rounded-md w-[300px] h-[350px] border-2 border-[var(--primaryColor)]'>
                            <Image src={img} alt="Picture of the author"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
