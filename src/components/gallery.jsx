
import { useState } from "react";
import Button from "./button.jsx";

export default function Gallery({images}) {

    const[index, setIndex] = useState(0)

    function handleClick() {
      setIndex(prev => (prev + 1) % images.length);
    }

    const currentImage = images[index]

    return(
        <section className="flex flex-col items-center">
            <section>
                <img
                    src={currentImage.url}
                    alt={currentImage.alt}
                    className='rounded shadow-md w-full mb-2'
                />
            </section>
            <section >
                <Button onClick={handleClick} className='active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 banner-content bg-neutral-300 text-teal-950 px-1 w-full h-full rounded-full content-animate md:hover:cursor-pointer' content='→'/>
            </section>
        </section>
    )


    
}