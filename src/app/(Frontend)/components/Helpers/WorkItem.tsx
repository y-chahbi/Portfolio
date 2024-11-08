import Link from 'next/link';
import React from 'react';
import WorkDeviceHnadler from './WorkDeviceHnadler';

type Props = {
  image: URL;
  title: string;
  description: string[];
  deskUrls: Array<URL>;
  languages: Array<string>;
  projectLink: Array<URL>; // Changed to camelCase to follow common convention
  index: number;
};

const WorkItem = ({ image, title, description, deskUrls, languages, projectLink, index }: Props) => {
  const createDescription: () => JSX.Element[] | null = () => {
    const fromNativeToParsing:  JSX.Element[] = [];
    let i = 0;
    let links = 0;

    while (description && i < description.length) {
      const deskItem = description[i];
      if (deskItem !== '[') {
        fromNativeToParsing.push(<span key={i}>{deskItem}</span>);
      } else {
        const textField: string[] = [];
        while (++i < description.length && description[i] !== ']') {
          textField.push(deskItem);
        }
        if (deskUrls[links]) {
          fromNativeToParsing.push(
            <Link key={links} className='text-[var(--primaryColor)] relative group whitespace-nowrap' href={deskUrls[links++].toString()}>
              {textField}
              <span className='w-0 h-[1px] absolute bottom-0 left-0 bg-[var(--primaryColor)] group-hover:w-full transition-all ease-out delay-100'></span>
            </Link>
          );
        }
      }
      i++;
    }
    return fromNativeToParsing;
  };

    return (
            <WorkDeviceHnadler image={new URL(image)} title={title}
                newDescription={createDescription()} justify={index % 2 ? 'justify-end' : 'justify-start'}
                direction={index % 2 ? 'right-0' : 'left-0'} languages={languages} classname={index % 2 ? 'flex-row' : 'flex-row-reverse'}
                projectLink={projectLink}/>
    );
};

export default WorkItem;











































{/*****





import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PiGithubLogo } from 'react-icons/pi';
import { LuExternalLink } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';

type Props = {
  image: URL;
  title: string;
  description: string;
  deskUrls: Array<URL>;
  languages: Array<string>;
  projectLink: Array<URL>; // Changed to camelCase to follow common convention
  index: number;
};

const WorkItem = ({ image, title, description, deskUrls, languages, projectLink, index }: Props) => {
  const createDescription = () => {
    const fromNativeToParsing: (string | JSX.Element)[] = [];
    let i = 0;
    let links = 0;

    while (description && i < description.length) {
      if (description[i] !== '[') {
        fromNativeToParsing.push(description[i]);
      } else {
        const textField: string[] = [];
        while (++i < description.length && description[i] !== ']') {
          textField.push(description[i]);
        }
        if (deskUrls[links]) {
          fromNativeToParsing.push(
            <Link key={links} className='text-[var(--primaryColor)] relative group whitespace-nowrap' href={deskUrls[links++].toString()}>
              {textField}
              <span className='w-0 h-[1px] absolute bottom-0 left-0 bg-[var(--primaryColor)] group-hover:w-full transition-all ease-out delay-100'></span>
            </Link>
          );
        }
      }
      i++;
    }
    return <>{fromNativeToParsing}</>;
  };

  const newDescription = createDescription();
  // const justify = index % 2 ? 'justify-end' : 'justify-start';
  // const direction = index % 2 ? 'right-0' : 'left-0';

  return (
    // md:${index % 2 ? 'flex-row' : 'flex-row-reverse'}
    <div className={`Item flex  mt-[40px] mb-[100px]`}>
      {/* <div className='ImageSide hidden md:flex relative group'>
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



      <div className={`DeskSide w-full flex mt-[0px] bg-cover`} style={{ backgroundImage: `url(${image})` }} >
      <div className='holder bg-[var(--background)] w-full opacity-80 px-[10px] sm:px-[40px] py-[60px]'>
          <div className={twMerge('StaticTile font-[Inconsolata] flex text-[16px] text-[var(--primaryColor)]')}>
            Featured Project
          </div>
          <div className={twMerge('ProjectName flex text-[22px] text-[var(--trdColor)] font-bold font-[Roboto]')}>{title}</div>
          <div className={twMerge('absHolder ')}>
              <div className={twMerge('DescriptionOfTheProject mt-[20px] sm:mt-[0px] w-[100%] sm:w-full text-[12px] sm:text-[17px]  sm:py-[30px] font-[Roboto] text-[var(--seconderyColor)]')}>
                  {newDescription}
              </div>
              <div className={twMerge('Items flex mt-[20px] w-[250px] sm:w-full flex-wrap')}>
                  {languages.map((item, index) => {
                      return <span key={index} className='text-[var(--seconderyColor)] mx-[8px]'>{item}</span>;
                  })}
              </div>
              <div className={twMerge('ProjectLinks flex mt-[20px]')}>
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
    {/* <div className={`DeskSide flex flex-col mt-[40px] relative`}>
      <div className={twMerge('StaticTile font-[Inconsolata] flex ', justify, ' text-[16px] text-[var(--primaryColor)]')}>
        Featured Project
      </div>
      <div className={twMerge('ProjectName flex ', justify, ' text-[22px] text-[var(--trdColor)] font-bold font-[Roboto]')}>{title}</div>
      <div className={twMerge('absHolder absolute top-[70px] ', direction)}>
        <div className={twMerge('DescriptionOfTheProject text-[17px] w-[600px] p-[30px] text-right bg-[#112240]   font-[Roboto] text-[var(--seconderyColor)]')}>
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
};

export default WorkItem;








*/}