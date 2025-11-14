import Gallery from './gallery.jsx'

export default function CardLeft({title, children, img, alt, iframe, images}){

    return(
        <>
            
            <section className=' flex flex-col xl:flex-row justify-center md:gap-8'>
                <section className='md:showAll m-5 xl:p-10 xl:w-1/2 leading-relaxed text-neutral-300'>
                <h2 className='text-center mb-5'>{title.toUpperCase()}</h2>
                    {children}
                </section>
                 <section className='m-5 xl:p-10 xl:w-1/2 flex justify-center'>
                    {iframe ? (
                        iframe
                        ) : img ? (
                        <img src={img} alt={alt || title} className='rounded' />
                        ) : <Gallery images={images} />}
                 </section>
            </section>            
        </>
    )
}
