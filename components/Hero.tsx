import React from 'react'
import { HeroHighlight } from './ui/hero-highlight'

const Hero = () => {
  return (
    <div className='relative w-full'>
        <HeroHighlight
            containerClassName={`relative w-full bg-transparent py-14 px-36 bg-blend-luminosity bg-dot-thick-red/[0.02]`}
            className={'opacity-100'}
        >
            Display something here???
        </HeroHighlight>
    </div>
  )
}

export default Hero