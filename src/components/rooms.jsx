
export default function Rooms({showInfo}) {
    
    return(
        <>
        {showInfo &&(
            <section className='mt-100 bg-neutral-400 h-800'>
                <h1>ROOMS</h1>
                <p>SOME INFORMATION ABOUT OUR ROOMS</p>
            </section>)}
        </>
        
    )
    
}