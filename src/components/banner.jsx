
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
        <main className='banner h-screen text-neutral-300 flex flex-col justify-center items-center'>
            <title>Pucté Hotel – A Slice of Paradise on Bacalar Lagoon</title>
            <img src="images/logoNeutral.png" alt="Pucté" className='max-h-50 p-2 h1-animate'/>           
            <h2 className=' text-2xl p-2 content-animate text-center' >Boutique Hotel</h2>
            <meta name="description" content="Relax at Pucté Hotel, directly on Bacalar Lagoon. Comfortable rooms, stunning views, and unforgettable boat tours." />
            <meta name="keywords" content="Hotel Bacalar, Bacalar Lagoon, Pucté Hotel, Lagoonfront Hotel, Bacalar Accommodation" />
            <p className='banner-content text-2xl content-animate text-center'>A SLICE OF PARADISE ON BACALAR LAGOON</p>
            <Button className='banner-content bg-teal-950 active:bg-neutral-300 active:text-teal-950 xl:hover:bg-neutral-300 xl:hover:text-teal-950 p-2 rounded content-animate md:hover:cursor-pointer' content='Book Now' />
            <ScrollToButton handleShowMore={handleShowMore}/>
            
        </main>
        </>
    )
}
