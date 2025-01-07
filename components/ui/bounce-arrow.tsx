'use client'
import React from 'react'
import { LuSquareArrowDown } from 'react-icons/lu'
import { motion, Comp } from 'framer-motion'
import { reverse } from 'dns'

const ArrowBounce = motion(LuSquareArrowDown)

export const BounceArrow = () => {
  return (
    <div
        className='w-full h-8 flex flex-col justify-center items-center relative'
    >
        <ArrowBounce
            className = ' text-3xl absolute cursor-pointer opacity-90 hover:opacity-100 duration-100 ease-in-out' 
            animate = {{
                y: ['25%', '75%']
            }}
            transition = {{
                type: 'tween',
                duration: 1.6,
                ease: 'easeOut',
                repeat: Infinity,
                repeatType: 'mirror'
            }}
        />
    </div>
  )
}