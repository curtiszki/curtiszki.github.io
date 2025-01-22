import React, { ReactNode } from 'react'

interface SectionProps {
    idName?: string,
    children: React.ReactNode;
}

export const SectionWrapper = ({
    idName, children
}: SectionProps) => {
    return (
        <div className="mx-auto flex flex-col
        relative z-10 bg-inherit py-5 w-full px-2 items-center md:items-start" 
        id={idName}>
            {children}
        </div>
    );
};

export const SectionContent = (props: {
    children?: ReactNode;
}) => {
    return (
        <div className="container bg-inherit sm:px-2 py-2 md:py-3">
            {props.children}
        </div>
    );
}