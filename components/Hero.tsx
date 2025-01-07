import React from 'react'
import { ShineBorder } from './ui/shine-border'
import { BounceArrow } from './ui/bounce-arrow'

const Hero = () => {
  return (
    <div className='relative w-full'>
        <ShineBorder
            className="relative -left-[5px] container justify-center text-left mx-auto mt-[25px] mb-[50px] px-10 pt-8 pb-14
            bg-black rounded-md"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
            <div className="flex flex-col gap-[2px] leading-snug text-xl text-slate-200">
                <p className='font-bold flex-none'>Hi, my name is</p>
                <p className='text-3xl font-bold text-teal-500 flex-none'>Curtis Grotzke</p>
                <p className='flex-none'>
                    A software developer and current student at Simon Fraser University.
                </p>

                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            
            </div>

            <BounceArrow />
        </ShineBorder>
    </div>
  )
}

export default Hero