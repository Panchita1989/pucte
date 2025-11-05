import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom'

export default function Footer() {
    return(
        <section className='footer flex flex-col md:flex-row gap-5 items-center md:justify-around rounded bg-zinc-300/50 fixed bottom-0 left-0 w-full'>
            <section className='hidden xl:block text-center'>
                <h2>LOCATION</h2>
                <p>Carretera Federal 307 KM 23 <br /> Bacalar, Quintana Roo, México</p>
            </section>
            <section className='hidden xl:block text-center'>
                <h2>CONTACT</h2>
                <p>info@pucte.com <br /> (+52) 983 752 96 59</p>
            </section>
            <section className='text-center' >
                <h2>FOLLOW</h2>
                <a href='https://www.instagram.com/pucte_bacalar/' target='blank'><FontAwesomeIcon icon={faInstagram} /></a>
            </section>
        </section>
    )
}