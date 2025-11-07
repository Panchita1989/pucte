

export default function CardLeft({title, children, img, iframe}){

    return(
        <>
            <h1 className='text-center'>{title}</h1>
            <section className='flex flex-col xl:flex-row md:items-center justify-center md:gap-8'>
                <section className='m-5 xl:p-10 xl:w-1/2 leading-relaxed text-neutral-300'>
                    {children}
                </section>
                 <section className='m-5 xl:p-10 xl:w-1/2 flex justify-center'>
                    {iframe ? (
                        iframe
                        ) : img ? (
                        <img src={img} alt="pucte" className='rounded' />
                        ) : null}
                 </section>
            </section>            
        </>
    )
}
