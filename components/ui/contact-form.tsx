import { form_input_highlight, form_input_transition } from '@/constants'
import React from 'react'

const labelClass = `flex flex-col-reverse gap-2`
const inputClass = `appearance-none outline-none border-0 border-b-[1px] border-accent-slate-100 bg-transparent px-1 leading-6 peer focus:border-${form_input_highlight} ${form_input_transition} text-wrap`
const subHeaderClass = `peer-focus:text-${form_input_highlight} ${form_input_transition}`

export const ContactForm = () => {
  return (
    <div className="container border-slate-400
                    p-[20px] shadow-[inset_0_0_0_3px_rgba(255,255,255,0.08)] rounded-sm text-white">
      <form className="flex flex-col gap-4 text-slate-300" action="" method="post" autoComplete='off'>
          <label htmlFor="contact" className={labelClass}>
              <input 
                className={`${inputClass}`}
                type="text" name="contact" required={true} maxLength={48}/>
              <p className='peer-focus:text-red-400 duration-300 transition-colors'>Name:</p>
          </label>
          <label htmlFor="mail" className={labelClass}>
              <input className={inputClass} type="email" name="mail" required={true} maxLength={48}/>
              <p className={subHeaderClass}>Email:</p>
          </label>
          <label htmlFor="message" className={labelClass}>
            <textarea className={`${inputClass} resize-none`} name="message" required={true} cols={30} rows={10} maxLength={3200}></textarea>
            <p className={subHeaderClass}>Message:</p>
          </label>
          <button type="submit" className="w-fit px-8 py-2 rounded-md bg-slate-500 text-white font-bold transition duration-200 hover:bg-red-400 hover:text-black border-2 border-transparent hover:border-teal-500">
            Submit
          </button>
      </form>
    </div>
  )
}