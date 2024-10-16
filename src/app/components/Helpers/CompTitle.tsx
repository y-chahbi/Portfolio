import React from 'react'
import { twMerge } from 'tailwind-merge';

type props = {
    number: string;
    title: string;
    width: string;
    titleStyle:string;
    classname?: string;  // Make style optional by adding a question mark
};

// {`Line bg-[var(--seconderyColor)] h-[.1px] w-${width} grow mx-[30px]`}
const CompTitle = ({number, title, width, classname = "", titleStyle = ""} : props) => {
    return (
        <div className={twMerge('title flex flex-row items-center', classname)}>
            {number && <div className='Number text-[var(--primaryColor)] text-[24px] mr-[10px]'>{number}</div>}
            <div className={twMerge("titleOf text-[var(--trdColor)] font-[Roboto] sm:text-[24px] font-bold", titleStyle)}>{title}</div>
            {width && <div className={twMerge('Line bg-[var(--seconderyColor)] h-[.1px] mx-[30px] ', width)}></div>}
        </div>
    )
}

export default CompTitle
