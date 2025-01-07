import React from 'react'

interface SectionTitleProps {
    title: string;
    className?: string;
    bgColor?: string;
}
  
export const SectionTitle = ({
    title,
    className,
    bgColor ='#FF3322', 
} : SectionTitleProps) => {
    return (
        <div className={`relative w-max ${className}`}>
            <h3 className='relative z-10'>{title}</h3>
            <span className='absolute z-1 h-[30%] top-[60%] w-[100%] px-5 left-[2px] opacity-70'
                style={{
                    backgroundColor: `${bgColor};`  
                }}
            />
        </div>
    );
};