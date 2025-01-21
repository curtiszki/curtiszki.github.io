import { form_input_highlight, form_input_transition } from '@/constants'
import React from 'react'
import { cn } from '@/lib/utils';

const labelClass = 'flex flex-col-reverse gap-2';
const inputClass = 'appearance-none outline-none border-0 border-b-[1px] border-accent-slate-100 bg-transparent px-1 leading-6 peer focus:border-red-400 duration-300 text-wrap';
const subHeaderClass = 'peer-focus:text-red-400 duration-300';

export const ContactForm = () => {
  return (
    <div className="container border-transparent sm:border-slate-600/65 border-[1px]
                    p-2 sm:p-[20px] rounded-sm text-white mb-4">
      <form className="flex flex-col gap-4 text-slate-300" action="" method="post" autoComplete='off'>
          <label htmlFor="contact_name" className={labelClass}>
              <input 
                className={inputClass} id="contact_name"
                type="text" name="contact" required={true} maxLength={48}/>
              <p className={subHeaderClass}>Name:</p>
          </label>
          <label htmlFor="contact_mail" className={labelClass}>
              <input className={inputClass} type="email" id="contact_mail" name="mail" required={true} maxLength={48}/>
              <p className={subHeaderClass}>Email:</p>
          </label>
          <label htmlFor="contact_message" className={labelClass}>
            <textarea className={`${inputClass} resize-none`} id="contact_message" name="message" required={true} cols={30} rows={10} maxLength={3200}></textarea>
            <p className={subHeaderClass}>Message:</p>
          </label>
          <button type="submit" className="w-fit px-4 py-1 md:py-0 md:px-2 rounded-md inset-0 border-teal-500 bg-transparent text-white font-semibold transition duration-200 hover:bg-teal-500/75 border-2 border-transparent my-2 sm:my-1">
            Submit
          </button>
      </form>
    </div>
  )
}