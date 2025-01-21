import React from 'react'
import { SectionWrapper } from './ui/section-wrapper'

const Hero = () => {
  return (
    <SectionWrapper idName="hero">
        <div
            className="relative -left-[5px] text-left mx-0 mt-[25px] px-2 sm:px-0 sm:pt-8 sm:pb-6
            rounded-md">
            <div className="flex flex-col gap-2 md:gap-1 leading-normal text-justify box-border px-[8px] md:px-0">
                <h3 className='text-3xl lg:text-4xl font-bold leading-snug mb-1 md:my-0 text-center md:text-left'>Curtis Grotzke</h3>
                <p className="md:text-left">
                    Software developer and current student at Simon Fraser University located in Vancouver, British Columbia. 
                    <br></br>
                </p>
                <a href="#contact" className="text-center w-[90%] md:w-fit h-fit px-2 py-1 my-1 mt-2 mx-auto md:mx-0 md:mt-1 rounded-md inset-0 border-teal-600 md:border-teal-500 bg-teal-400/50 md:bg-transparent text-white font-bold transition duration-200 hover:bg-teal-500/75 border-2 border-transparent">
                    <button>
                        Get in touch
                    </button>
                </a>
            </div>

        </div>
    </SectionWrapper>
  )
}

export default Hero