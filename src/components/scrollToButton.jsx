import Button from './button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from "react-router-dom";



export default function ScrollToButton({handleShowMore}){    


    return(
        <section className='info content-animate text-neutral-300 text-2xl text-center '>
           <a  href="https://hotels.cloudbeds.com/reservation/pucté"  target="_blank">
            <Button
                className='mt-10 banner-content bg-teal-950 active:bg-neutral-300 active:text-teal-950 xl:hover:bg-neutral-300 xl:hover:text-teal-950 p-2 rounded content-animate md:hover:cursor-pointer' content='Book Now' />
          </a>  
        </section>
    )
}