"use client";
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Exper from './Helpers/Exper';
import CompTitle from './Helpers/CompTitle';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

interface ExperienceProps {
  classname?: string; // Define the classname prop as an optional string
}

interface ExperProp {
  handelActive(id : number): void;
  CompanyStyle?: string;
  Active: number;
  ActiveClass?: string;
}

interface ExperienceItem {
    id: number;
    title: string;
    name: string;
    Date: string;
    info: { info: string }[]; // Adjust based on your data structure
  }

export const fetchComapny = async () => {
  const res = await fetch('https://portfolio-server-l3fx.onrender.com/company/');
  if (!res.ok) {
      throw new Error('Network response was not ok');
  }
  return res.json();
};


export const DataComponent: React.FC<ExperProp>  = ({handelActive, CompanyStyle, Active, ActiveClass}) => {

  const { data, error, isLoading } = useQuery({
      queryKey: ['Data'],
      queryFn: fetchComapny,
  });
  
  const companyData: ExperienceItem[] = data as ExperienceItem[];

  if (isLoading) return <div className='flex justify-center items-center'>Loading...</div>;

  if (error) return <div className='flex justify-center items-center'>Error: {error.message}</div>;

  return (
      <>
            {companyData.map((company, index) => (
              <div
                key={index}
                onClick={() => handelActive(company.id)}
                className={twMerge(`CompanyName`, CompanyStyle, Active === company.id ? ActiveClass : '')}
              >
                {company.name}
              </div>
            ))}
      </>
  )
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

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <div id="Experience" className={`${classname} mt-[200px] px-[20px]`}>
            <div className="Box w-[700px]">
                <CompTitle number="02. " title="Where I've Worked" width="grow w-1" titleStyle=''/>
                <div className="ContentData flex flex-col sm:flex-row mt-[40px] overflow-x-scroll">
                    <div className="leftMenu sm:w-1/4 flex flex-row sm:flex-col mb-[20px] sm:mb-[0px] ">
                    <DataComponent handelActive={handelActive}  CompanyStyle={CompanyStyle}  Active={Active}  ActiveClass={ActiveClass} />
                    </div>
                    <div className="DetailesSection w-3/4 flex flex-col">
                        <Exper id={Active} />
                    </div>
                </div>
            </div>
        </div>
    </QueryClientProvider>
  );
};

export default Experience;
