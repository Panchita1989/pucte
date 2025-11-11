
import { useState } from "react";
import { roomsList } from '../data/rooms.js'
import Button from "./button.jsx";

export default function Gallery() {

    const[index, setIndex] = useState(0)

    function handleClick() {
      setIndex(prev => (prev + 1) % roomsList.length);
    }

    const room = roomsList[index]

    return(
        <section className="flex flex-col items-center">
            <section>
                <img
                    src={room.url}
                    alt={room.alt}
                    className='rounded shadow-md w-full mb-2'
                />
            </section>
            <section >
                <Button onClick={handleClick} className='active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 banner-content bg-neutral-300 text-teal-950 px-1 w-full h-full rounded-full content-animate md:hover:cursor-pointer' content='→'/>
            </section>
        </section>
    )


    
}