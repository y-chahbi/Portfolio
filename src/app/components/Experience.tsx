"use client";
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Copmany from './../data/Companyes.json';
import Exper from './Helpers/Exper';
import CompTitle from './Helpers/CompTitle';

interface ExperienceProps {
  classname?: string; // Define the classname prop as an optional string
}

const Experience: React.FC<ExperienceProps> = ({ classname }) => {

  // TailwindCSS class strings
  const CompanyStyle = `py-[10px] text-[var(--trdColor)] max-sm:border-b-[.1px] sm:border-l-[.1px] border-[var(--seconderyColor)] 
                        cursor-pointer px-[20px] hover:text-[var(--primaryColor)] hover:bg-[#112240]
                        sm:w-[80%] max-sm:grow max-sm:w-1 transition-all ease-in-out delay-100 text-[15px] active:border-l-2 
                        active:border-[var(--primaryColor)] active:text-[var(--primaryColor)]`;

  const ActiveClass = `sm:border-l-2 max-sm:border-b-2 border-[var(--primaryColor)] text-[var(--primaryColor)]`;

  // State for active company
  const [Active, setActive] = useState(0);

  // Handle active company change
  const handelActive = (id: number) => {
    setActive(id);
  };

  return (
    <div id="Experience" className={`${classname} mt-[200px] px-[20px]`}>
      <div className="Box w-[700px]">
        <CompTitle number="02. " title="Where I've Worked" width="grow w-1" titleStyle=''/>
        <div className="ContentData flex flex-col sm:flex-row mt-[40px] overflow-x-scroll">
          <div className="leftMenu sm:w-1/4 flex flex-row sm:flex-col mb-[20px] sm:mb-[0px] ">
            {Copmany.map((company, index) => (
              <div
                key={index}
                onClick={() => handelActive(company.id)}
                className={twMerge(`CompanyName`, CompanyStyle, Active === company.id ? ActiveClass : '')}
              >
                {company.name}
              </div>
            ))}
          </div>
          <div className="DetailesSection w-3/4 flex flex-col">
            <Exper id={Active} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
