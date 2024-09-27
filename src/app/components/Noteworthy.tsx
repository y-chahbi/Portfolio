"use client"
import React, { useEffect, useRef, useState } from 'react'
import CompTitle from './Helpers/CompTitle'
import projects from '../data/Projects.json'
import ProjectItem from './Helpers/ProjectItem'
import { twMerge } from 'tailwind-merge'









const Noteworthy = ({style}:any) => {

    let githubUrl: string | undefined;
    let projectUrl: string | undefined;

    const [LoadMore, setLoadMore] = useState(true);
    const [VarName, setVarName] = useState(["Show More","Show Less"]);
    const [Opacity, setOpacity] = useState("opacity-0");

    useEffect(()=> {

    }, [Opacity])
    return (
        <div id="Noteworthy" onLoad={() => setOpacity(prevState => "opacity-100")} className={twMerge(style, Opacity," transition-opacity duration-1000 ease-in-out delay-500")}>
            <div className='Box w-[1000px] '>
                <CompTitle number="" title="Other Noteworthy Projects" width="" style="justify-center font-bold text-[24px]"/>
                <div className='SecondTil text-[16px] text-[var(--primaryColor)] font-[Inconsolata] flex mt-[10px] justify-center'>view the archive</div>
                <div className='flex flex-row justify-normal flex-wrap transition-all duration-700 ease-in-out'>
                    {projects.map((item, index) => {
                        githubUrl = item.GithubLink ? item.GithubLink.toString() : undefined;
                        projectUrl = item.ProjectLink ? item.ProjectLink.toString() : undefined;
                        return (
                            LoadMore ? index < 6 && <ProjectItem
                                key={index}
                                title={item.title} 
                                description={item.deskription} 
                                languages={item.UsedLanguages}
                                github={githubUrl}
                                projectLink={projectUrl}
                            />
                            :
                            <ProjectItem
                                key={index}
                                title={item.title} 
                                description={item.deskription} 
                                languages={item.UsedLanguages}
                                github={githubUrl}
                                projectLink={projectUrl}
                            />
                        );
                    })}
                </div>
                <div onClick={() => {setLoadMore(prevState => !LoadMore)}} className='ShowButtonHolder flex justify-center items-center mt-[60px]'>
                    <div className='backButton  relative p-[10px] w-[140px] border-1 border-[var(--primaryColor)] rounded-md
                        h-[60px] flex justify-center items-center bg-[var(--primaryColor)] text-black'>
                        <div className='backButton p-[10px] absolute border-[1px] border-[var(--primaryColor)]
                            w-[140px] h-[60px] flex justify-center items-center
                            text-[var(--primaryColor)] bg-[var(--background)] rounded-md transition-hover ease-in-out duration-150  hover:-translate-y-1 hover:-translate-x-1 hover:cursor-pointer'>
                                {VarName[LoadMore === true ? 0 : 1]}
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default Noteworthy
