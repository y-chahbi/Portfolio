
import React from 'react'
import Copmany from './../../data/Companyes.json'



const Exper = ({id} : any) => {

  return (
    Copmany.map((comp:any, index:number) => {
        return (
            comp.id == id && <div key={index} className='DetailesSectionHolder transition-all duration-300 ease-in-out'>
                <div className='Title flex flex-row w-full items-center  text-[20px]'>
                    <div className='Place mr-[10px] text-[var(--trdColor)]'>{comp.title}</div>
                    <div className='Company'><span className='font-[Roboto]'>@</span> {comp.name}</div>
                </div>
                <div className='Date my-[10px] text-[var(--trdColor)] text-[14px] mb-[20px]'>
                    {comp.Date}
                </div>
                {
                    comp.info.map((item:any, index:number) => {

                        return (
                                <div key={index} className='ExHolder'>
                                    <div className='Exps flex flex-row'>
                                        <div className='ExpStylingParent w-0 h-0 mt-[6px] border-[#00000000] relative border-t-[6px] border-t-transparent border-l-[10px] border-l-[var(--primaryColor)] border-b-[6px] border-b-transparent mr-[15px]'>
                                            <div className='ExpStylingChiled w-0 h-0 border-[#00000000] absolute -top-[4px] -left-[9px] border-t-[4px] border-t-transparent border-l-[8px] border-l-[var(--background)] border-b-[4px] border-b-transparentmr-[15px]'></div>
                                        </div>
                                        <div className='ExpPostion text-[var(--seconderyColor)] mb-[10px]'>
                                        {item.info}
                                        </div>
                                    </div>
                                </div>
                            )
                    })
                }
            </div>
        )
    })
  )
}

export default Exper
