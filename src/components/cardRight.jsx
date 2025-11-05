



export default function CardRight({title, children, img}){

    return(
        <>
            <h1 className='text-center'>{title}</h1>
            <section className='flex flex-col md:flex-row items-center justify-center gap-8'> 
                <section className='m-5 p-10 w-1/2 flex justify-center'>
                    <img src={img} alt="pucte" />
                </section>
                <section className='m-5 p-10 w-1/2 leading-relaxed text-neutral-300'>
                    {children}
                </section>
            </section>
        </>
    )
}