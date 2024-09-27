import React from 'react'
import CompTitle from './Helpers/CompTitle'
import WorkItem from './Helpers/WorkItem'
import WorkItems from '../data/WorkItems.json'




const Work = ({style}:any) => {

    const converToArray = (urls: string[]): URL[] => {
        return urls.map(itm => new URL(itm));
    }

    return (
        <div id="Work" className={`${style} h-auto mb-[200px]`}>
            <div className='Box w-[1000px]'>
                <CompTitle number="03. " title="Some Things I’ve Built" width="w-[300px]"/>
                <div className='ContentItems'>
                    {
                        WorkItems.map((item, index) => {
                            return <WorkItem key={index}
                            image={new URL(item.image)}
                            title={item.title}
                            description={item.description}
                            deskUrls={converToArray(item.deskUrls)}
                            languages={item.languages}
                            ProjectLink={converToArray(item.projectLink)}
                            index = {item.index}/>;
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Work
