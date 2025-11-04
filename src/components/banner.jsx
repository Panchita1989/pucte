import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import Header from './header.jsx'
import Button from './button.jsx'
import ScrollToButton from './scrollToButton.jsx'
import Info from './info.jsx'


export default function Banner(){
    const [showInfo, setShowInfo] = useState(false)
    const infoRef = useRef()
    const topRef = useRef()
    

    const handleShowMore = () =>{
        setShowInfo(true)
        infoRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(()=>{
        if(showInfo &&  infoRef.current){            
            infoRef.current.scrollIntoView({ behavior: "smooth" })
        }
       
    },[showInfo])


    /*
    add this effect if you want scrolling bar to desapear when scrolling to top
    useEffect(() =>{
        if(!topRef.current)return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setShowInfo(false)
                }
            },
           
        )
        observer.observe(topRef.current)
        return () => observer.disconnect()     
      
    },[])

    */
    return(
        <>
        <Header show={showInfo} />
        <section ref={topRef} className='banner text-neutral-300 mt-40 p-2 flex flex-col justify-center items-center gap-3'>
            <h1 className='h1 text-5xl p-2 h1-animate'>PUCTÉ</h1>
            <p className='banner-content text-2xl content-animate'>ESCAPE TO PARADISE</p>
            <Button className='banner-content bg-teal-950 p-2 rounded content-animate md:hover:cursor-pointer' content='Book now' />
            <ScrollToButton showInfo={showInfo} handleShowMore={handleShowMore}/>
        </section>
        <section>
            <Info infoRef={infoRef} showInfo={showInfo}/>
        </section>
        </>
    )
}
