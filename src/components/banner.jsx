import Button from './button.jsx'

export default function Banner(){
    return(
        <section className='banner text-neutral-300 mt-40 p-2 flex flex-col justify-center items-center gap-3'>
            <h1 className='h1 text-5xl p-2 h1-animate'>PUCTÉ</h1>
            <p className='banner-content text-2xl content-animate'>ESCAPE TO PARADISE</p>
            <Button className='banner-content bg-teal-950 p-2 rounded content-animate md:hover:cursor-pointer' content='Book now' />
        </section>
    )
}
