
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
        <main className='banner pt-25 xl:pt-20 h-screen text-neutral-300 flex flex-col items-center'>
            <title>Pucté Hotel – A Slice of Paradise on Bacalar Lagoon</title>
            <img src="images/Pucte3Logo.png" alt="Pucté" className='md:max-h-[150px] max-h-[100px] h1-animate'/>           
            <h2 className=' text-2xl p-2 content-animate text-center' >Boutique Hotel</h2>
            <meta name="description" content="Relax at Pucté Hotel, directly on Bacalar Lagoon. Comfortable rooms, stunning views, and unforgettable boat tours." />
            <meta name="keywords" content="Hotel Bacalar, Bacalar Lagoon, Pucté Hotel, Lagoonfront Hotel, Bacalar Accommodation" />
            <p className='banner-content text-2xl content-animate text-center'>A SLICE OF PARADISE ON BACALAR LAGOON</p>
        
            <ScrollToButton handleShowMore={handleShowMore}/>
            
        </main>
        </>
    )
}
