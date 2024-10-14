import React from 'react';

interface ContactProps {
    classname?: string; // Define the classname prop as an optional string
}

const Contact: React.FC<ContactProps> = ({ classname }) => {
    return (
        <div id="Contact" className={`${classname} flex-col justify-center items-center mt-[200px]`}>
            <div className='Title flex justify-center items-end'>
                <div className='number mr-[4px]'>04. </div>
                <div className='title text-[16px]'>  What’s Next?</div>
            </div>
            <div className='SecondTil text-[56px] py-[10px] text-[var(--trdColor)] font-[Roboto] font-bold flex mt-[10px] justify-center'>Get In Touch</div>
            <div className='Description text-[var(--seconderyColor)] px-[260px] text-center'>
                Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </div>
            <div className='backButton my-[40px] relative p-[10px] w-[140px] border-1 border-[var(--primaryColor)] rounded-md h-[60px] flex justify-center items-center bg-[var(--primaryColor)] text-black'>
                <div className='backButton p-[10px] absolute border-[1px] border-[var(--primaryColor)]
                    w-[140px] h-[60px] flex justify-center items-center
                    text-[var(--primaryColor)] bg-[var(--background)] rounded-md transition-hover ease-in-out duration-150 hover:-translate-y-1 hover:-translate-x-1 hover:cursor-pointer'>
                    Say Hello
                </div>
          </div>
        </div>
    );
};

export default Contact;
