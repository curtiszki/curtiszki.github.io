import React from 'react'
import { SectionWrapper, SectionContent } from './ui/section-wrapper'
import { SectionTitle } from './ui/section-title'
import { ContactForm } from './ui/contact-form'

const Contact = () => {
  return (
    <SectionWrapper>
        <SectionTitle 
            title='Get in touch'
        />
        <SectionContent>
                <ContactForm/>
        </SectionContent>
    </SectionWrapper>
)}

export default Contact