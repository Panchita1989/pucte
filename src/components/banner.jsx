
import { useNavigate } from "react-router-dom";
import Button from './button.jsx'
import ScrollToButton from './scrollToButton.jsx'


export default function Banner(){
    const navigate = useNavigate()
    

    const handleShowMore = () =>{
        navigate('/rooms')        
     
    }

    return(
        <>
        <section className='banner pt-50 text-neutral-300 p-2 flex flex-col justify-center items-center gap-3'>
            <h1 className='h1 text-5xl p-2 h1-animate'>PUCTÉ</h1>
            <p className='banner-content text-2xl content-animate'>ESCAPE TO PARADISE</p>
            <Button className='banner-content bg-teal-950 active:bg-neutral-300 active:text-teal-950 xl:hover:bg-neutral-300 xl:hover:text-teal-950 p-2 rounded content-animate md:hover:cursor-pointer' content='Book now' />
            <ScrollToButton handleShowMore={handleShowMore}/>
        </section>
        </>
    )
}
