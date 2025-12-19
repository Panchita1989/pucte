import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Footer from './footer.jsx'
import NavBar from './navBar.jsx'
import { useTranslation } from 'react-i18next'

function Contact() {
  const{ t, i18n } = useTranslation()
  const [state, handleSubmit] = useForm("mdkynnob");
  if (state.succeeded) {
      return <p className='text-center mt-80'>{t('contact.thanks')}</p>;
  }
  return (
    <>
    
    <section className='h-screen rounded xl:mx-10 md:mx-2 mt-20 mb-5 px-3 bg-teal-950/60 text-neutral-300 tracking-widest leading-loose '>
      <NavBar />
      <h1 className='pt-2 text-center text-3xl font-bold mb-2'>{t('contact.title').toUpperCase()}</h1>
      <p className='text-center' >{t('contact.subtitle')}</p>
      
       <form onSubmit={handleSubmit} className='mx-10 flex flex-col justify-start items-center gap-4 w-full max-w-2xl mx-auto'>
        
        <fieldset className='w-full'>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex flex-col flex-1'>
            <label htmlFor="firstName" className='mb-1'>{t('contact.first')}</label>
            <input
              id="firstName"
              type="text" 
              name="firstName"
              className='border rounded p-2'
              required
            />
          </div>
          <div className='flex flex-col flex-1'>
            <label htmlFor="lastName" className='mb-1'>{t('contact.last')}</label>
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
        <label htmlFor="email" className='mb-1'>{t('contact.email')}</label>
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
        <label htmlFor="subject" className='mb-1'>{t('contact.subject')}</label>
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
        <label htmlFor="message" className='mb-1'>{t('contact.message')}</label>
        <textarea
          id="message"
          name="message"
          rows={3}
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
        {t('contact.send')}
      </button>
    </form>
    </section>
    <Footer />
    </>
  );
}

export default Contact