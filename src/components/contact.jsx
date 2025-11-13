import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Footer from './footer.jsx'
import NavBar from './navBar.jsx'

function Contact() {
  const [state, handleSubmit] = useForm("mdkynnob");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
    
    <section className='h-screen rounded xl:mx-20 md:mx-2 mt-20 mb-5 px-3 bg-teal-950/60 text-neutral-300 tracking-widest leading-loose '>
      <NavBar />
      <h1 className='pt-2 text-center text-3xl font-bold mb-2'>Contact</h1>
      <p className='text-center' >For more information please contact us:</p>
      
       <form onSubmit={handleSubmit} className='mt-10 flex flex-col justify-start items-center gap-4 w-full max-w-2xl mx-auto'>
        
        <fieldset className='w-full'>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex flex-col flex-1'>
            <label htmlFor="firstName" className='mb-1'>First Name</label>
            <input
              id="firstName"
              type="text" 
              name="firstName"
              className='border rounded p-2'
              required
            />
          </div>
          <div className='flex flex-col flex-1'>
            <label htmlFor="lastName" className='mb-1'>Last Name</label>
            <input
              id="lastName"
              type="text" 
              name="lastName"
              className='border rounded p-2'
            />
          </div>
        </div>
      <ValidationError 
        prefix="Name" 
        field="Name"
        errors={state.errors}
      />
      </fieldset>
      <div className='flex flex-col w-full'>
        <label htmlFor="email" className='mb-1'>Email Address</label>
        <input
          id="email"
          type="email" 
          name="email"
          className='border-1 rounded p-2'
          required
        />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div className='flex flex-col w-full'>
        <label htmlFor="subject" className='mb-1'>Subject</label>
        <input
          id="subject"
          type="text" 
          name="subject"
          className='border-1 rounded p-2'
          required
        />
      <ValidationError 
        prefix="Subject" 
        field="subject"
        errors={state.errors}
      />
      </div>
      <div className='flex flex-col w-full'>
        <label htmlFor="message" className='mb-1'>Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className='border rounded p-2'
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>

      <button type="submit" disabled={state.submitting} className='bg-teal-950 text-neutral-300 p-2 rounded hover:bg-neutral-300 active:bg-neutral-300 hover:text-teal-950 active:text-teal-950  w-full'>
        Submit
      </button>
    </form>
    </section>
    <Footer />
    </>
  );
}

export default Contact