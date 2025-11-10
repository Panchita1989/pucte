
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
        <main className='banner h-screen text-neutral-300 flex flex-col justify-center items-center gap-3'>
            <title text-center>Pucté Hotel – A Slice of Paradise on Bacalar Lagoon</title>
            <h1 className='h1 text-5xl p-2 h1-animate'>PUCTÉ</h1>
            <h2 className=' text-2xl p-2 content-animate ' > Hotel Bacalar</h2>
            <meta name="description" content="Relax at Pucté Hotel, directly on Bacalar Lagoon. Comfortable rooms, stunning views, and unforgettable boat tours." />
            <meta name="keywords" content="Hotel Bacalar, Bacalar Lagoon, Pucté Hotel, Lagoonfront Hotel, Bacalar Accommodation" />
            <p className='banner-content text-2xl content-animate'>A SLICE OF PARADISE ON BACALAR LAGOON</p>
            <Button className='banner-content bg-teal-950 active:bg-neutral-300 active:text-teal-950 xl:hover:bg-neutral-300 xl:hover:text-teal-950 p-2 rounded content-animate md:hover:cursor-pointer' content='Stay at Pucté' />
            <ScrollToButton handleShowMore={handleShowMore}/>
        </main>
        </>
    )
}
