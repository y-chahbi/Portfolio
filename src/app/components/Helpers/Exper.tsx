import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';



interface ExperienceItem {
  id: number;
  title: string;
  name: string;
  Date: string;
  info: { info: string }[]; // Adjust based on your data structure
}

interface ExperProps {
    id: number; // Type for the id prop
}


export const fetchComapny = async () => {
    const res = await fetch('http://localhost:8080/company/');
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    return res.json();
};

export const DataComponent: React.FC<ExperProps>  = ({id}) => {

    const { data, error, isLoading } = useQuery({
        queryKey: ['Data'],
        queryFn: fetchComapny,
    });
    
    const companyData: ExperienceItem[] = data as ExperienceItem[];

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            {companyData.map((comp) => {
                if (comp.id === id) {
                    return (
                        <div key={comp.id} className='DetailesSectionHolder transition-all duration-300 ease-in-out'>
                            <div className='Title flex flex-row w-full items-center text-[20px]'>
                            <div className='Place mr-[10px] text-[var(--trdColor)]'>{comp.title}</div>
                                <div className='Company'><span className='font-[Roboto]'>@</span> {comp.name}</div>
                                </div>
                                <div className='Date my-[10px] text-[var(--trdColor)] text-[14px] mb-[20px]'>
                                {comp.Date}
                                </div>
                                {comp.info.map((item, index) => (
                                    <div key={index} className='ExHolder'>
                                    <div className='Exps flex flex-row'>
                                        <div className='ExpStylingParent w-0 h-0 mt-[6px] border-[#00000000] relative border-t-[6px] border-t-transparent border-l-[10px] border-l-[var(--primaryColor)] border-b-[6px] border-b-transparent mr-[15px]'>
                                            <div className='ExpStylingChiled w-0 h-0 border-[#00000000] absolute -top-[4px] -left-[9px] border-t-[4px] border-t-transparent border-l-[8px] border-l-[var(--background)] border-b-[4px] border-b-transparent mr-[15px]'></div>
                                        </div>
                                        <div className='ExpPostion text-[var(--seconderyColor)] mb-[10px]'>
                                            {item.info}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                }
                return null; // Return null for non-matching companies
            })}
        </>
    )
}

const Exper: React.FC<ExperProps> = ({ id }) => {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <DataComponent id={id}/>
        </QueryClientProvider>
    );
};

export default Exper;
