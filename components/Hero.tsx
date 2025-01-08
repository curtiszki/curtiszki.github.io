import React from 'react'
import { ShineBorder } from './ui/shine-border'
import { BounceArrow } from './ui/bounce-arrow'

const Hero = () => {
  return (
    <div className='relative w-full' id="hero">
        <ShineBorder
            className="relative -left-[5px] container justify-center text-left mx-auto mt-[25px] mb-[50px] px-10 pt-8 pb-14
            bg-black rounded-md"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
            <div className="flex flex-col gap-[2px] leading-normal text-md text-slate-200 text-md">
                <h3 className='text-4xl font-bold text-teal-500 leading-tight'>Curtis Grotzke</h3>
                <p>
                    Software developer and current student at Simon Fraser University located in Vancouver, British Columbia. 
                    <br></br>I enjoy coding and learning new things.
                </p>
                <a href="#contact">
                    <button className="relative w-fit leading-snug top-[10px]">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-sm" />
                        <div className="px-3 py-1 bg-slate-600 rounded-sm relative group transition duration-200 text-white hover:bg-transparent">
                            Want to talk?
                        </div>
                    </button>
                </a>
            </div>

        </ShineBorder>
    </div>
  )
}

export default Hero