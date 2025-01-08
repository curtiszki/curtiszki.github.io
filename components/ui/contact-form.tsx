import { form_input_highlight, form_input_transition } from '@/constants'
import React from 'react'

const labelClass = `flex flex-col-reverse gap-2`
const inputClass = `appearance-none outline-none border-0 border-b-[1px] border-accent-slate-100 bg-transparent px-1 leading-6 peer focus:border-${form_input_highlight} ${form_input_transition}`
const subHeaderClass = `peer-focus:text-${form_input_highlight} ${form_input_transition}`

export const ContactForm = () => {
  return (
    <div className="container border-slate-400
                    p-[20px] shadow-[inset_0_0_0_3px_rgba(255,255,255,0.08)] rounded-sm text-white">
      <form className="flex flex-col gap-4 text-slate-300" action="" method="post">
          <label htmlFor="contact" className={labelClass}>
              <input 
                className='appearance-none outline-none border-0 border-b-[1px] border-accent-slate-100 bg-transparent px-1 leading-6 peer focus:border-red-400 duration-300 transition-colors' 
              type="text" name="contact"/>
              <p className='peer-focus:text-red-400 duration-300 transition-colors'>Name:</p>
          </label>
          <label htmlFor="email" className={labelClass}>
              <input className={inputClass} type="email" name="email"/>
              <p className={subHeaderClass}>Email:</p>
          </label>
          <label htmlFor="message" className={labelClass}>
            <input className={inputClass} type="text" name="message"/>
            <p className={subHeaderClass}>Message:</p>
          </label>
          <button type="submit"></button>
      </form>
    </div>
  )
}