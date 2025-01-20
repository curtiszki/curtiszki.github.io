import React from 'react'
import {SectionWrapper, SectionContent} from './ui/section-wrapper'
import { SectionTitle } from './ui/section-title'

const About = () => {
  return (
    <SectionWrapper idName='about'>
        <SectionTitle 
            title='About Me'
            />
        <SectionContent>
            <p>
                Hello, there! I&apos;m a current undergraduate student undertaking the Software Systems program at Simon Fraser University. 
                Software development is something I developed a passion for after attempting to understand how to create mods for games &#40;Sid Meier&apos;s Civilization and Paradox Games are something I have long been addicted to&#41;, and fully realized after building a full stack LAMP application in my spare time.                 
                I enjoy drafting, designing, and implementing ideas into functional code.
            </p>
        </SectionContent>
    </SectionWrapper>
)}

export default About