"use client";
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Copmany from './../data/Companyes.json';
import Exper from './Helpers/Exper';
import CompTitle from './Helpers/CompTitle';

interface ExperienceProps {
  style?: string; // Define the style prop as an optional string
}

const Experience: React.FC<ExperienceProps> = ({ style }) => {

  // TailwindCSS class strings
  const CompanyStyle = `py-[10px] text-[var(--trdColor)] border-l-[.1px] border-[var(--seconderyColor)] 
                        cursor-pointer px-[20px] hover:text-[var(--primaryColor)] hover:bg-[#112240]
                        w-[80%] transition-all ease-in-out delay-100 text-[15px] active:border-l-2 
                        active:border-[var(--primaryColor)] active:text-[var(--primaryColor)]`;

  const ActiveClass = `border-l-2 border-[var(--primaryColor)] text-[var(--primaryColor)]`;

  // State for active company
  const [Active, setActive] = useState(0);

  // Handle active company change
  const handelActive = (id: number) => {
    setActive(id);
  };

  return (
    <div id="Experience" className={`${style}`}>
      <div className="Box w-[700px]">
        <CompTitle number="02. " title="Where I've Worked" width="grow w-1" />
        <div className="ContentData flex flex-row mt-[40px]">
          <div className="leftMenu w-1/4 flex flex-col">
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
