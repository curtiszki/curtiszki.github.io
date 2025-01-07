import React from 'react'

interface SectionTitleProps {
    title: string;
    bgColor?: string;
}
  
export const SectionTitle = ({
    title,
    bgColor ='#FF3322', 
} : SectionTitleProps) => {
    return (
        <div className={`relative w-max`}>
            <h3 className='relative z-10 text-2xl font-extrabold leading-none mb-[6px]'>{title}</h3>
            <span className='absolute z-1 h-[30%] top-[60%] w-[100%] px-5 left-[2px] opacity-70'
                style={{
                    backgroundColor: `${bgColor}`  
                }}
            />
        </div>
    );
};