


const Skill = ({name}:any) => {
    return (
        <div className='Skil flex flex-row items-center w-[300px]'>
            <div className={`Icon w-0 h-0 relative border-t-[4px] border-t-transparent
                border-l-[8px] border-l-[var(--primaryColor)] border-b-[4px] border-b-transparent
                mr-[15px]`}>
                <div className='{`Icon w-0 h-0 absolute -top-[2px] -left-[7px] border-t-[2px] border-t-transparent border-l-[5px] border-l-[var(--background)] border-b-[2px] border-b-transparent
                            mr-[15px]`'>
                </div>
            </div>
            <div className='SkillName'>{name}</div>
        </div>
    )
}



export default Skill