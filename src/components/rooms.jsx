import Header from './header.jsx'
export default function Rooms({showInfo, infoRef}) {
    
    return(
        <>        
        {showInfo &&(
            <section ref={infoRef} className='mt-100 bg-neutral-400 h-800'>
                
                <h1>ROOMS</h1>
                <p>SOME INFORMATION ABOUT OUR ROOMS</p>
            </section>)}
        </>
        
    )
    
}