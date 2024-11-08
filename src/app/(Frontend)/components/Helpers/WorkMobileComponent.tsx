import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import { PiGithubLogo } from "react-icons/pi";
import { twMerge } from "tailwind-merge";


type Props = {
    image: URL;
    title: string;
    newDescription: (JSX.Element)[] | null;
    languages: Array<string>;
    projectLink: Array<URL>; // Changed to camelCase to follow common convention
  };

const WorkMobileComponent = ({ image, title, newDescription, languages, projectLink}: Props) => {
    return (
        <div className="Item flex  mt-[40px] mb-[100px]">
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
        </div>
    );
}

export default WorkMobileComponent;