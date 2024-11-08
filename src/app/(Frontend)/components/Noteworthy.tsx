"use client";
import React, {useState } from 'react';
import CompTitle from './Helpers/CompTitle';
import ProjectItem from './Helpers/ProjectItem';
import { twMerge } from 'tailwind-merge';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

type NoteworthyProps = {
  classname?: string; // Define the classname prop as optional and as a string
};

interface NoteworthyPropsItem {
    loadMore: boolean;
}



interface Data {
    UsedLanguages: string[];
    deskription: string;
    ProjectLink: string | undefined;
    GithubLink: string | undefined;
    title       :string,
    description :string,
    languages   :string[],
    github      :string | undefined,
    projectLink :string | undefined,
}


export const fetchComapny = async () => {
  const res = await fetch('/api/v1.01/projects');
  if (!res.ok) {
      throw new Error('Network response was not ok');
  }
  return res.json();
};

export const DataComponent: React.FC<NoteworthyPropsItem>  = ({loadMore}) => {

    const { data, error, isLoading } = useQuery({
        queryKey: ['Data'],
        queryFn: fetchComapny,
    });
    
    const projects: Data[] = data as Data[];

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message}</div>;

    return (
          projects.map((item, index) => {
              const githubUrl = item.GithubLink ? item.GithubLink.toString() : undefined;
              const projectUrl = item.ProjectLink ? item.ProjectLink.toString() : undefined;
                  return (
                    loadMore ? index < 6 && (
                      <ProjectItem
                          key={index}
                          title={item.title}
                          description={item.description}
                          languages={item.UsedLanguages}
                          github={githubUrl}
                          projectLink={projectUrl}
                      />
                    ) : (
                      <ProjectItem
                          key={index}
                          title={item.title}
                          description={item.description}
                          languages={item.UsedLanguages}
                          github={githubUrl}
                          projectLink={projectUrl}
                      />
                    )
                  );
          })
    )
}

const Noteworthy: React.FC<NoteworthyProps> = ({ classname }) => {
    const [loadMore, setLoadMore] = useState(true);
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div id="Noteworthy" className={twMerge(classname, " mt-[200px] md:px-[60px]")}>
                <div className='Box flex flex-col w-full md:w-[1000px]'>
                    <CompTitle number="" title="Other Noteworthy Projects" width="" classname="justify-center font-bold text-[24px]" titleStyle=''/>
                    <div className='SecondTil text-[16px] text-[var(--primaryColor)] font-[Inconsolata] flex mt-[10px] justify-center'>view the archive</div>
                    <div className='flex flex-col sm:flex-row sm:mx-[16px] justify-normal flex-wrap transition-all duration-700 ease-in-out'>
                            <DataComponent loadMore={loadMore} />
                    </div>
                    <div onClick={() => setLoadMore(prev => !prev)} className='ShowButtonHolder flex justify-center items-center mt-[60px]'>
                        <div className='backButton relative p-[10px] w-[140px] border-1 border-[var(--primaryColor)] rounded-md h-[60px] flex justify-center items-center bg-[var(--primaryColor)] text-black'>
                            <div className='backButton p-[10px] absolute border-[1px] border-[var(--primaryColor)]
                                    w-[140px] h-[60px] flex justify-center items-center
                                    text-[var(--primaryColor)] bg-[var(--background)] rounded-md transition-hover ease-in-out duration-150 hover:-translate-y-1 hover:-translate-x-1 hover:cursor-pointer'>
                                {!loadMore ? "Show Less" : "Show More"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </QueryClientProvider>
    );
};

export default Noteworthy;
