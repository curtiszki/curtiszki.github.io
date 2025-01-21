'use client';
import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";


const labelClass = 'flex flex-col-reverse gap-2';
const inputClass = 'appearance-none outline-none border-0 border-b-[1px] border-accent-slate-100 bg-transparent px-1 leading-6 peer focus:border-red-400 duration-300 text-wrap focus:bg-[rgb(17,18,21)]';
const subHeaderClass = 'peer-focus:text-red-400 duration-300';

export const ContactForm = () => {
  const [state, handleSubmit, reset] = useForm("xkgowrlz");

  const formRef = React.useRef<HTMLFormElement>(null);
  
  const [submittedState, setSubmittedState] = useState(false);
  
  const toggleOverlay = () => {
    setSubmittedState(!submittedState);
  };
  
  if (formRef.current && state.succeeded) {
    toggleOverlay();
    formRef.current.reset();
    reset();
  }


  return (
    <div className="relative border-transparent sm:border-slate-600/65 border-[1px]
                    p-2 sm:p-[20px] rounded-sm text-white mb-4">
      <form 
        ref = {formRef}
        className="flex flex-col gap-4 text-slate-300" 
        action="https://formspree.io/f/xkgowrlz" onSubmit={handleSubmit} method='post'
        autoComplete='off' id="contact_form">
          <label htmlFor="contact_name" className={labelClass}>
              <input 
                className={inputClass} id="contact_name"
                type="text" name="contact_name" required={true} maxLength={48}/>
              <p className={subHeaderClass}>Name:</p>
          </label>
          <ValidationError
            prefix="Name"
            field="contact_name"
            errors={state.errors}
          />
          <label htmlFor="contact_mail" className={labelClass}>
              <input className={inputClass} type="email" id="contact_mail" name="contact_mail" required={true} maxLength={48}/>
              <p className={subHeaderClass}>Email:</p>
          </label>
          <ValidationError
            prefix="Mail"
            field="contact_mail"
            errors={state.errors}
          />
          <label htmlFor="contact_message" className={labelClass}>
            <textarea className={`${inputClass} resize-none`} id="contact_message" name="contact_message" required={true} cols={30} rows={10} maxLength={3200}></textarea>
            <p className={subHeaderClass}>Message:</p>
          </label>
          <ValidationError
            prefix="Message"
            field="contact_message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} className="w-fit px-4 py-1 md:py-0 md:px-2 rounded-md inset-0 border-teal-500 bg-transparent text-white font-semibold transition duration-200 hover:bg-teal-500/75 border-2 my-2 sm:my-1">
            Submit
          </button>
      </form>

      <div className={`${submittedState? '':'hidden'} absolute w-full h-full left-0 top-0 z-10 bg-[rgb(17,18,21)] flex flex-col justify-center items-center gap-1`}>
        <IoCheckmarkCircleOutline className='text-9xl font-extrabold text-teal-400'/>
        <button
          onClick={toggleOverlay} 
          className='w-fit px-4 py-2 md:py-2 md:px-3 rounded-md inset-0 border-teal-500 bg-transparent text-white font-semibold transition duration-200 hover:bg-teal-500/75 border-2 my-2 sm:my-1'>
          Information sent successfully!
        </button>
      </div>
    </div>
  )
}