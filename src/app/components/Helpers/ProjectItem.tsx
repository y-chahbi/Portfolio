import Link from 'next/link';
import React from 'react'
import { CiFolderOn } from "react-icons/ci";
import { LuExternalLink } from "react-icons/lu";
import { RiGithubLine } from "react-icons/ri";


{/* <CiFolderOn /> */}
{/* <LuExternalLink /> */}
{/* <RiGithubLine /> */}


type props = {
    title       :string,
    description :string,
    languages   :string[],
    github      :string | undefined,
    projectLink :string | undefined,
}


const ProjectItem = ({title, description, languages, github, projectLink}:props) => {

    return (
        <div key={Math.random()}
            className='transition-all duration-300 ease-in-out Item px-8 pb-16 pt-8 w-1/3 bg-[#112240] border-8 border-[var(--background)]
                group relative hover:cursor-pointer hover:relative hover:-translate-y-2'>
              <header className="flex flex-row justify-between items-center pb-[10px] ">
                <div className='left-side text-[45px]'>
                    <CiFolderOn className='text-[var(--primaryColor)]'/>
                </div>
                <div className='right-side flex flex-row justify-around items-center text-[25px]'>
                    {github && <Link href={github}><RiGithubLine className='text-[var(--seconderyColor)] hover:text-[var(--primaryColor)] mr-[10px]'/></Link>}
                    {projectLink && <Link href={projectLink}><LuExternalLink className='text-[var(--seconderyColor)] hover:text-[var(--primaryColor)]'/></Link>}
                </div>
              </header>
              <div className='Body'>
                <div className='Title font-[Roboto] text-[18px] font-bold py-[15px] text-[var(--trdColor)] group-hover:text-[var(--primaryColor)]'>{title}</div>
                <div className='description font-[Roboto] text-[var(--seconderyColor)] text-[14px]'>{description}</div>
              </div>
              <footer className='text-[var(--seconderyColor)] absolute bottom-6 text-[13px]'>
                {
                    languages.map((item, index) => { return <span key={index} className='Item ml-[12px]'>{item}</span>})
                }
              </footer>
        </div>
    )
}

export default ProjectItem
