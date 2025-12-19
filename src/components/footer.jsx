import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from 'react-i18next'
import {Link} from 'react-router-dom'

export default function Footer() {

    const { t, i18n} = useTranslation()

    const message = "Hi 👋 I would like to get more information."
    const url = `https://api.whatsapp.com/send?phone=529837529659&text=${encodeURIComponent(message)}`


    return(
        <section className='my-5 flex md:flex-row gap-5 items-center justify-center md:justify-around rounded font-semibold text-teal-950'>
            <section className='hidden md:block text-center'>
                <h2>{t('footer.location').toUpperCase()}</h2>
                <p>Carretera Federal 307 KM 23 <br /> Bacalar, Quintana Roo, México</p>
            </section>
            <section className='hidden md:block text-center'>
                <h2>{t('footer.contact').toUpperCase()}</h2>
                <p><a href="mailto:info@pucte.com?subject=Contact%20from%20Website&body=I%20would%20like%20to%20get%20more%20information.">info@pucte.com </a><br />
                <a href={url} target='blank' rel="noopener noreferrer">(+52) 983 752 96 59</a></p>
            </section>
            <section className='text-center' >
                <h2 className='hidden md:block'>{t('footer.follow').toUpperCase()}</h2>
                <a href='https://www.instagram.com/pucte_bacalar/' target='blank'><FontAwesomeIcon className='mt-1 text-lg' icon={faInstagram} /></a>
            </section>
            <section className='text-center md:hidden'>
                <a href={url} target='blank'><FontAwesomeIcon className='mt-1 text-lg' icon={faWhatsapp} /></a>
            </section>
        </section>
    )
}