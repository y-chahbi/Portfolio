
import React from "react";
import CompTitle from "./Helpers/CompTitle";
import WorkItem from "./Helpers/WorkItem";
import WorkItems from "../data/WorkItems.json";

interface WorkProps {
  classname?: string; // Define the classname prop as optional string
}

const Work = ({ classname }: WorkProps) => {
  const convertToArray = (urls: string[]): URL[] => {
    return urls.map((itm) => new URL(itm));
  };

  return (
    <div id="Work" className={`${classname} mt-[200px]`}>
      <div className="Box w-full px-[20px] md:w-[1000px]">
        <CompTitle number="03. " title="Some Things I’ve Built" width=" w-0 sm:w-[100px] md:w-[300px]" titleStyle="text-[16px]"/>
        <div className="ContentItems">
          {WorkItems.map((item, index) => {
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
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
