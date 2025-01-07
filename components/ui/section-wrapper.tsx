import React from 'react'

export const SectionWrapper = (props) => {
    return (
        <div className="mx-auto border-t-2 border-teal-100
        relative z-10 bg-inherit py-5 w-full max-w-[820px] px-5 md:px-8 sm:px-10">
            {props.children}
        </div>
    );
};