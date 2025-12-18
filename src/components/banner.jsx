
import { useNavigate } from "react-router-dom";
import Button from './button.jsx'
import { useTranslation } from 'react-i18next'



export default function Banner(){
    const { t, i18n } = useTranslation()
    i18n.changeLanguage('en')
    
    return(
        <>
        <main className='banner pt-25 xl:pt-20 h-screen text-neutral-300 flex flex-col items-center'>
            <img src="images/Pucte3Logo.png" alt="Pucté" className='md:max-h-[150px] max-h-[100px] h1-animate'/>           
            <h2 className=' text-2xl p-2 content-animate text-center' >{t('banner.subtitle')}</h2>
            <p className='banner-content text-2xl content-animate text-center max-w-100'>{t('banner.headline').toUpperCase()}</p>
            <section className='info content-animate text-neutral-300 text-2xl text-center '>
                <a  href="https://hotels.cloudbeds.com/reservation/pucté"  target="_blank">
                <Button
                    className='mt-10 banner-content bg-teal-950 active:bg-neutral-300 active:text-teal-950 xl:hover:bg-neutral-300
                    xl:hover:text-teal-950 p-2 rounded content-animate md:hover:cursor-pointer' content={t('buttons.book')} />
                </a>  
            </section>            
        </main>
        </>
    )
}
