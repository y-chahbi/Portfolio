import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { PiGithubLogo } from "react-icons/pi";
import { LuExternalLink } from "react-icons/lu";
import { twMerge } from 'tailwind-merge';




type prpos = {
    image : URL,
    title : string,
    description : string,
    deskUrls    : Array<URL>,
    languages   : Array<string>,
    ProjectLink : Array<URL>,
    index       : number
}



const WorkItem = ({image, title, description, deskUrls, languages, ProjectLink, index} : prpos) => {
    
    const CraeteDescription = () => {
        let fromNativeToParsing: (string | JSX.Element)[] = [];
        let i = 0;
        let links = 0;

        while (description && i < description.length) {
            if (description[i] != '[')
                fromNativeToParsing.push(description[i]);
            else {
                let textField : (string)[] = [];
                while (++i < description.length && description[i] != ']') {
                    textField.push(description[i]);
                }
                if (deskUrls[links])
                    fromNativeToParsing.push(
                            <Link key={links} className='text-[var(--primaryColor)] relative group whitespace-nowrap' href={deskUrls[links++].toString()}>
                                {textField}
                                <span className='w-0 h-[1px] absolute bottom-0 left-0 bg-[var(--primaryColor)] group-hover:w-full transition-all ease-out delay-100 '></span>
                            </Link>
                    );
            }
            i++;
        }
        return <>{fromNativeToParsing}</>;
    }

    const NewDescription = CraeteDescription();
    const Justify = index % 2 ? "justify-end" : "justify-start";
    const Dierction = index % 2 ? "right-0" : "left-0";
    return (
        <div className={`Item flex ${index % 2 ? "flex-row" : "flex-row-reverse"} mt-[40px] justify-between mb-[100px]`}>
            <div className='ImageSide relative group'>
                <div className='ImageHolder'>
                    <Image style={{width: "550px", height:"400px"}}
                        src={image.toString()}
                        alt={`${title} picture`}
                        width={0}
                        height={0}
                        unoptimized
                    />
                </div>
                <div className='ImageHolderHover transition-all duration-200 ease-in-out absolute w-[550px] h-[400px] bg-[var(--primaryColor)] top-0 left-0 opacity-30 group-hover:cursor-pointer group-hover:opacity-0'></div>
            </div>

            <div className={`DeskSide flex flex-col mt-[40px] relative`}>
                <div className={twMerge('StaticTile font-[Inconsolata] flex ',Justify,' text-[16px] text-[var(--primaryColor)]')}>Featured Project</div>
                <div className={twMerge('ProjectName flex ',Justify,' text-[22px] text-[var(--trdColor)] font-bold font-[Roboto]')}>{title}</div>
                <div className={twMerge('absHolder absolute top-[70px] ', Dierction)}>
                    <div className={twMerge('DescriptionOfTheProject text-[17px] ', ' w-[600px] p-[30px] text-right bg-[#112240] font-[Roboto] text-[var(--seconderyColor)]')}>
                        {NewDescription}
                    </div>
                    <div className={twMerge('Items flex ',Justify,' mt-[20px]')}>
                        {
                            languages.map((item, index) => {
                                return (<span key={index} className='text-[var(--seconderyColor)] mx-[8px]'>{item}</span>);
                            })
                        }
                    </div>
                    <div className={twMerge('ProjectLinks flex ',Justify,' mt-[20px]')}>
                        <Link href={"ProjectLink[0]"} className='text-[25px] text-[#ffffffd2] ml-[10px] hover:text-[var(--primaryColor)]'><PiGithubLogo /></Link>
                        <Link href={"ProjectLink[1]"} className='text-[25px] text-[#ffffffd2] ml-[10px] hover:text-[var(--primaryColor)]'><LuExternalLink /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkItem

