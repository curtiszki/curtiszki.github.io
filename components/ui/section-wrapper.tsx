import React from 'react'

export const SectionWrapper = (props) => {
    return (
        <div className="mx-auto mt-10 border-t-2 border-teal-100
        relative z-10 bg-inherit py-5 w-full">
            {props.children}
        </div>
    );
};