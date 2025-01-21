import React from 'react'

interface SectionProps {
    idName?: string,
    children: React.ReactNode;
}

export const SectionWrapper = ({
    idName, children
}: SectionProps) => {
    return (
        <div className="mx-auto flex flex-col
        relative z-10 bg-inherit py-5 w-full max-w-[820px] px-5 md:px-8 sm:px-10" 
        id={idName}>
            {children}
        </div>
    );
};

export const SectionContent = (props) => {
    return (
        <div className="container bg-inherit px-[24px] py-[12px]">
            {props.children}
        </div>
    );
}