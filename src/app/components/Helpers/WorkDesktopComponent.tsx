import Image from "next/image";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import { PiGithubLogo } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

type Props = {
    image: URL;
    title: string;
    newDescription: (JSX.Element)[] | null;
    justify: string;
    classname: string;
    direction: string;
    languages: Array<string>;
    projectLink: Array<URL>; // Changed to camelCase to follow common convention
  };
  

const WorkDesktopComponent = ({ image, title, newDescription, languages, projectLink, justify, direction, classname }: Props) => {

    return (
        <div className={twMerge("Item flex ", classname, "mt-[40px] justify-between mb-[100px]")}>
        <div className='ImageSide relative group'>
          <div className='ImageHolder'>
            <Image
              style={{ width: '550px', height: '400px' }}
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
          <div className={twMerge('StaticTile font-[Inconsolata] flex ', justify, ' text-[16px] text-[var(--primaryColor)]')}>
            Featured Project
          </div>
          <div className={twMerge('ProjectName flex ', justify, ' text-[22px] text-[var(--trdColor)] font-bold font-[Roboto]')}>{title}</div>
          <div className={twMerge('absHolder absolute top-[70px] ', direction)}>
            <div className={twMerge('DescriptionOfTheProject text-[17px] w-[600px] p-[30px] text-right bg-[#112240] font-[Roboto] text-[var(--seconderyColor)]')}>
              {newDescription}
            </div>
            <div className={twMerge('Items flex ', justify, ' mt-[20px]')}>
              {languages.map((item, index) => {
                return <span key={index} className='text-[var(--seconderyColor)] mx-[8px]'>{item}</span>;
              })}
            </div>
            <div className={twMerge('ProjectLinks flex ', justify, ' mt-[20px]')}>
              <Link href={projectLink[0]?.toString()} className='text-[25px] text-[#ffffffd2] ml-[10px] hover:text-[var(--primaryColor)]'>
                <PiGithubLogo />
              </Link>
              <Link href={projectLink[1]?.toString()} className='text-[25px] text-[#ffffffd2] ml-[10px] hover:text-[var(--primaryColor)]'>
                <LuExternalLink />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}


export default WorkDesktopComponent;