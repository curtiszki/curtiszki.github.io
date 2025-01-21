import React from 'react'
import { ShineBorder } from './ui/shine-border'
import { BounceArrow } from './ui/bounce-arrow'

const Hero = () => {
  return (
    <div className='relative w-full' id="hero">
        <div
            className="relative -left-[5px] container justify-center text-left mx-auto mt-[25px] px-10 pt-8 pb-6
            rounded-md">
            <div className="flex flex-col gap-[2px] leading-normal text-md text-md">
                <h3 className='text-4xl font-bold leading-snug'>Curtis Grotzke</h3>
                <p>
                    Software developer and current student at Simon Fraser University located in Vancouver, British Columbia. 
                    <br></br>
                </p>
                <a href="#contact" className="py-1">
                <button className="p-[3px] relative">
                    <div className="px-2 py-1 rounded-[6px] bg-cyan-300/40 relative group transition duration-200 text-white hover:bg-cyan-300/60">
                        Get in touch
                    </div>
                </button>
                </a>
            </div>

        </div>
    </div>
  )
}

export default Hero