



export default function CardRight({title, children, img, alt}){

    return(
        <>
            
            <section className='flex flex-col xl:flex-row md:items-center justify-center gap-8'> 
                <section className='m-5 xl:p-10 xl:w-1/2 flex justify-center'>
                    <img src={img} alt={alt} className='rounded'/>
                </section>
                <section className='m-5 xl:p-10 xl:w-1/2 leading-relaxed text-neutral-300'>
                <h2 className='text-center mb-5 mt-5 pb:5'>{title}</h2>
                    {children}
                </section>
            </section>
        </>
    )
}