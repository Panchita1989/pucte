import Button from './button.jsx'

export default function Banner(){
    return(
        <section className='mt-55 p-2 flex flex-col justify-center items-center  gap-3'>
            <h1 className='text-5xl p-2 border-t-2 border-b-2'>PUCTÉ</h1>
            <p className='text-2xl'>ESCAPE TO PARADISE</p>
            <Button className='bg-teal-950 text-white p-2 cursor-pointer rounded' content='Book now' />
        </section>
    )
}