
export default function Rooms({showInfo, infoRef}) {
    
    return(
        <>        
        {showInfo &&(
            <section ref={infoRef} className='mt-100 mb-30 bg-teal-950/80 text-neutral-300'>
                <h1 className='text-center'>ROOMS</h1>
                <section className='flex flex-col md:flex-row items-center justify-center gap-8'> 
                <section className='m-5 w-1/2 leading-relaxed text-neutral-300'>
                    <p className='mb-5'>Nestled in the heart of nature, Pucté is a tranquil retreat where timeless
                        design meets the soul of the Mayan jungle. We offer four exclusive suites,
                        each thoughtfully named after the sacred numbers of the ancient Mayan culture, 
                        inviting you to connect with the heritage and rhythm of this land.
                        Each suite is equipped with air conditioning to ensure a cool and comfortable 
                        stay. A dedicated work desk is provided for those who need to stay connected or
                        inspired, and the private bathroom offers a serene space to refresh and unwind.</p>
                    <h2>UPSTAIRS ROOMS</h2>    
                    <h3>KA'A | HUN</h3>
                    <p className='mb-5'>Experience tranquility in our upstairs rooms, each featuring a comfortable
                        king-size bed perfect for a restful night’s sleep. Wake up to stunning views of
                        the lagoon from your private terrace, where you can enjoy a morning coffee or
                        unwind in the evening. The upstairs location provides a more elevated perspective
                        of the beautiful surroundings, enhancing your stay with panoramic vistas.</p>
                    <h2>DOWNSTAIRS ROOMS</h2>
                    <h3>KAN | OX</h3>
                    <p>Our downstairs rooms offer the convenience of easy access to the main palapa,
                        communal area, and kitchen, making it ideal for socializing or enjoying a meal.
                        Step out onto your private terrace to take in the serene lagoon views, a perfect
                        spot to relax and soak in the natural beauty of Bacalar.</p>
                </section>
                <section className='m-5 w-1/2 flex justify-center'>
                    <img src="src/assets/images/rooms.webp" alt="pucte" />
                </section>
                </section>
            </section>)}
        </>
        
    )
    
}