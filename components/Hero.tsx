import React from 'react'
import { ShineBorder } from './ui/shine-border'
import { BounceArrow } from './ui/bounce-arrow'

const Hero = () => {
  return (
    <div className='relative w-full' id="hero">
        <div
            className="relative -left-[5px] container justify-center text-left mx-auto mt-[25px] px-10 pt-8 pb-10
            rounded-md">
            <div className="flex flex-col gap-[2px] leading-normal text-md text-md">
                <h3 className='text-4xl font-bold text-slate-50 leading-snug'>Curtis Grotzke</h3>
                <p>
                    Software developer and current student at Simon Fraser University located in Vancouver, British Columbia. 
                    <br></br>
                </p>
                <a href="#contact" className="py-1">
                    <button className="relative w-fit leading-snug top-[10px]">
                        <div className="px-3 py-1 bg-[rgb(42,100,132)] rounded-sm relative group transition duration-200 text-white hover:bg-transparent">
                            Want to talk?
                        </div>
                    </button>
                </a>
            </div>

        </div>
    </div>
  )
}

export default Hero