import Button from './button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'; 



export default function ScrollToButton(){
    
    const handleClick = () => {

    }

    return(
        <section className='info text-neutral-300 text-center m-5'>
            <p>More Information</p>
            <Button 
                content={<FontAwesomeIcon icon={faArrowDown} /> }
                className='p-2 rounded-full hover:bg-neutral-300 hover:text-black'
                onClick={handleClick}/>
        </section>
    )
}