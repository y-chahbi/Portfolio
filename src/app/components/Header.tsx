import Link from 'next/link'


const Header = ({style} : any) => {
    return (
        <div className={style}>
            <div className="left-side ">
                <div className='LogoHexagon absolute h-[48px] bg-[var(--primaryColor)] flex items-center justify-center'></div>
                <div className='MoverLogo z-10 LogoHexagon relative h-[48px] bg-[var(--primaryColor)] flex items-center justify-center
                    top-0 left-0 transition-all ease-linear duration-200 hover:top-[-3px] hover:left-[-3px] hover:cursor-pointer'>
                <div className='LogoContent absolute LogoHexagon font-bold text-[21px]
                    h-[42px] bg-[var(--background)] flex items-center justify-center'>
                    C
                </div>
            </div>

            </div>
            <div className="right-side space-x-10 flex items-center">
                <ul className={`flex flex-row space-x-16 text-[14px] font-[Inconsolata]
                    list-[decimal-leading-zero] marker:text-[var(--primaryColor)] text-[var(--trdColor)]`}>
                    <li className='hover:text-[var(--primaryColor)] hover:cursor-pointer'><Link href={"#About"}>About</Link></li>
                    <li className='hover:text-[var(--primaryColor)] hover:cursor-pointer'><Link href={"#Experience"}>Experience</Link></li>
                    <li className='hover:text-[var(--primaryColor)] hover:cursor-pointer'><Link href={"#Work"}>Work</Link></li>
                    <li className='hover:text-[var(--primaryColor)] hover:cursor-pointer'><Link href={"#Contact"}>Contact</Link></li>
                </ul>
                <div className='Download relative text-[13px] bg-[var(--primaryColor)] w-[80px] h-[40px] p-[8px] rounded-md'>
                    <Link 
                        className='DownloadButton absolute -top-0 -left-0 bg-[var(--background)]
                            text-[13px] text-center border-[1px] w-[80px] h-[40px]
                            border-[var(--primaryColor)] p-[8px] rounded-md
                            hover:-top-1 hover:-left-1 ease-linear duration-100'
                        href={'/download'}> Resume
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header