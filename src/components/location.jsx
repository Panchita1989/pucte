import CardLeft from './cardLeft.jsx'
import NavBar from './navBar.jsx'
import Footer from './footer.jsx'
import Button from './button.jsx'
import { useCollapse } from "react-collapsed"
import { useTranslation } from 'react-i18next'



function Location() {

  const { t, i18n } = useTranslation()
  
  const { 
    getCollapseProps: getCollapseChetu,
    getToggleProps: getToggleChetu,
    isExpanded: isChetuExpanded
 } = useCollapse();

 const { 
    getCollapseProps: getCollapseTulum,
    getToggleProps: getToggleTulum,
    isExpanded: isTulumExpanded
 } = useCollapse();

 const { 
    getCollapseProps: getCollapseCancun,
    getToggleProps: getToggleCancun,
    isExpanded: isCancunExpanded
 } = useCollapse();

  return (
    <>
     <section className=' md:mx-10 mt-20 mb-5 py-5 bg-teal-950/60 text-neutral-300 tracking-widest leading-loose'>
      <NavBar />
      <CardLeft 
        title={t('location.title').toUpperCase()}
        iframe={
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.056501162068!2d-88.38919471894607!3d18.706288418175838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5bb39377823331%3A0x8c30610f28ec058f!2sPuct%C3%A9%20Bacalar!5e0!3m2!1sde!2smx!4v1762529740854!5m2!1sde!2smx"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
  }>
    <span>{t('location.description')}</span>
    <h3 className='mt-10 mb-2'>{t('location.chetumal').toUpperCase()}</h3>
    {isChetuExpanded ? '' : (
    <button className='border-1 rounded p-2' {...getToggleChetu()}>{t('buttons.show')}</button>
    )}
    <section className='mb-5' {...getCollapseChetu()}>
      <h5>Taxi</h5>   
      <p className='mb-2'>
        {t('location.chetumalTaxi')}
      </p>
      <h5>{t('location.car')}</h5>
      <p className='mb-2'>
        {t('location.chetumalCar')}
      </p>
      <h5>{t('location.train')}</h5>
      <p className='mb-2'>
        {t('location.chetumalTrain')}
      </p>
    </section>
    {!isChetuExpanded ? '' : (
      <button className='border-1 rounded p-2' {...getToggleChetu()}>{t('buttons.less')}</button>
    )}
    <h3 className='mt-10 mb-2'>{t('location.tulum').toUpperCase()}</h3>
    {isTulumExpanded ? '' : (
      <button className='border-1 rounded p-2' {...getToggleTulum()}>{t('buttons.show')}</button>
    )}
    <section className='mb-5' {...getCollapseTulum()}>
      <h5>{t('location.car')}</h5>
      <p className='mb-2'>
        {t('location.tulumCar')}
      </p>
      <h5>{t('location.ado')}</h5>
      <p className='mb-2'>
        {t('location.tulumAdo')}
      </p>
      <h5>{t('location.train')}</h5>
      <p className='mb-2'>
        {t('location.tulumTrain')}
      </p>
    </section>
    {!isTulumExpanded ? '' : (
      <button className='border-1 rounded p-2' {...getToggleTulum()}>{t('buttons.less')}</button>
    )}
     <h3 className='mt-10 mb-2'>{t('location.cancun').toUpperCase()}</h3>
 {isCancunExpanded ? '' : (
   <button className='border-1 rounded p-2' {...getToggleCancun()}>{t('buttons.show')}</button>
 )}

 <section className='mb-5' {...getCollapseCancun()}>
   <h5>{t('location.car')}</h5>
   <p className='mb-2'>{t('location.cancunCar')}</p>
   <h5>{t('location.ado')}</h5>
   <p className='mb-2'>
    {t('location.cancunAdo')}
   </p>
   <h5>{t('location.train')}</h5>
   <p className='mb-2'>
    {t('location.cancunTrain')}
  </p>
 </section>
 {!isCancunExpanded ? '' : (
   <button className='border-1 rounded p-2' {...getToggleCancun()}>{t('buttons.less')}</button>
 )}
  </CardLeft>
     </section>
     <Footer />
     </>
  )
}

export default Location
