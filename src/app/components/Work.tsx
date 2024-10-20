"use client"

import React from "react";
import CompTitle from "./Helpers/CompTitle";
import WorkItem from "./Helpers/WorkItem";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

interface WorkProps {
  classname?: string; // Define the classname prop as optional string
}

interface WorkPropsSecond {
    convertToArray (urls: string[]) :URL[] ; 
}

type WorkPropsata = {
  image: URL;
  title: string;
  description: string;
  deskUrls: Array<string>;
  languages: Array<string>;
  projectLink: Array<string>; // Changed to camelCase to follow common convention
  index: number;
};


export const fetchComapny = async () => {
  const res = await fetch('https://portfolio-server-l3fx.onrender.com/workitems/');
  if (!res.ok) {
      throw new Error('Network response was not ok');
  }
  return res.json();
};

export const DataComponent: React.FC<WorkPropsSecond>  = ({convertToArray}) => {

    const { data, error, isLoading } = useQuery({
        queryKey: ['Data'],
        queryFn: fetchComapny,
    });
    
    const WorkItems: WorkPropsata[] = data as WorkPropsata[];

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message}</div>;

    return (
        WorkItems.map((item, index) => {
          return (
            <WorkItem
                key={index}
                image={new URL(item.image)}
                title={item.title}
                description={new Array(item.description)}
                deskUrls={convertToArray(item.deskUrls)}
                languages={item.languages}
                projectLink={convertToArray(item.projectLink)} // Corrected prop name
                index={item.index}
            />
          );
        })
    )
}




const Work = ({ classname }: WorkProps) => {
    const queryClient = new QueryClient();
    const convertToArray = (urls: string[]): URL[] => {
        return urls.map((itm) => new URL(itm));
    };

  return (
    <QueryClientProvider client={queryClient}>
        <div id="Work" className={`${classname} mt-[200px]`}>
        <div className="Box w-full px-[20px] md:w-[1000px]">
            <CompTitle number="03. " title="Some Things I’ve Built" width=" w-0 sm:w-[100px] md:w-[300px]" titleStyle="text-[16px]"/>
            <div className="ContentItems">
                <DataComponent convertToArray={convertToArray}/>
            </div>
        </div>
        </div>
    </QueryClientProvider>
  );
};

export default Work;
