import Button from './button.jsx'

export default function CardLeft({title, children, img}){

    return(
        <>
            <h1 className='text-center'>{title}</h1>
            <section className='flex flex-col xl:flex-row md:items-center justify-center md:gap-8'>
                <section className='m-5 xl:p-10 xl:w-1/2 leading-relaxed text-neutral-300'>
                    {children}
                </section>
                <section className='m-5 xl:p-10 xl:w-1/2 flex justify-center'>
                    <img src={img} alt="pucte" />
                </section>
            </section>
            <div className='text-center mb-10'>
                <Button className='hover:bg-teal-950 hover:text-neutral-300 banner-content bg-neutral-300 text-teal-950 p-2 rounded content-animate md:hover:cursor-pointer' content='Book now' />
            </div>
        </>
    )
}