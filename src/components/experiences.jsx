import CardLeft from './cardLeft.jsx'
import CardRight from './cardRight.jsx'
import NavBar from './navBar.jsx'
import Footer from './footer.jsx'
import Button from './button.jsx'
import { useTranslation } from 'react-i18next'



function Experiences() { 

    const { t, i18n } = useTranslation()

      const massage = "Hi 👋 I would like to reserve a massage"
      const urlMassage = `https://api.whatsapp.com/send?phone=529837529659&text=${encodeURIComponent(massage)}`

     return(
         <>  
             <section className=' md:mx-10 mt-20 mb-5 py-5 bg-teal-950/60 text-neutral-300 tracking-widest leading-loose'>
                 <NavBar />
                 <CardLeft title={t('experiences.title').toUpperCase()} img='images/sail.png'>
                             <p className='pb-5'>
                              {t('experiences.description')}
                              </p>
                              <p className='pb-5'>{t('experiences.options')}</p>
                              <h4>{t('experiences.vessel')}</h4> 
                              <ul className='md:mb-5 pb-5'>
                                <li className='mt-10 flex items-center justify-between border-b pb-2'>
                                  <h3>{t('experiences.catamaran')}</h3>
                                  <a href="https://sailbacalar.com/" target='_blank'>
                                  <Button 
                                    className='text-[14px] active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 banner-content bg-neutral-300 text-teal-950 p-1 rounded content-animate md:hover:cursor-pointer' 
                                    content={t('buttons.book')} />
                                    </a></li>
                                <li className='mt-10 flex items-center justify-between border-b pb-2'>
                                  <h3>{t('experiences.monohull')}</h3>
                                  <a href="" target='_blank'>
                                  <Button 
                                    className='text-[14px] active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 banner-content bg-neutral-300 text-teal-950 p-1 rounded content-animate md:hover:cursor-pointer'
                                    content={t('buttons.book')} />
                                    </a></li>
                                <li className='mt-10 flex items-center justify-between border-b pb-2'>
                                  <h3>Hobbie Cat</h3>
                                  <a href="" target='_blank'>
                                  <Button 
                                    className='text-[14px] active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 banner-content bg-neutral-300 text-teal-950 p-1 rounded content-animate md:hover:cursor-pointer'
                                    content={t('buttons.book')} />
                                  </a></li>
                              </ul>                                            
                 </CardLeft>               
                 <CardRight title={t('experiences.paddleTitle')} img='images/paddle.png'>
                     <h6 className='pb-5'>{t('experiences.paddleIntro')}</h6>
                     <p className='md:mb-5 pb-5'>
                      {t('experiences.paddleDescription')}
                     </p>
                     <div className='text-center mb-10'>
                      <a href="" target='blank'>
                        <Button 
                          className='active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 banner-content bg-neutral-300 text-teal-950 p-2 rounded content-animate md:hover:cursor-pointer' 
                          content={t('buttons.book')} />
                      </a>
                    </div>
                 </CardRight>
                 <CardLeft title='MASSAGE' img='images/massage.webp'>
                  <p className='pb-5'>
                    {t('experiences.massageDescription')}
                  </p>
                  
                  <div className='text-center mt-5'>
                      <a href={urlMassage} target='blank'>
                        <Button 
                          className='active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 banner-content bg-neutral-300 text-teal-950 p-2 rounded content-animate md:hover:cursor-pointer' 
                          content={t('buttons.book')}  />
                      </a>
                  </div>


                 </CardLeft>
             </section>
             <Footer />
         </>
         
     )
}

export default Experiences
