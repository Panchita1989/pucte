import CardLeft from "./cardLeft.jsx";
import CardRight from './cardRight.jsx'
export default function Info({showInfo, infoRef}) {
    return(
        <>        
        {showInfo &&(
            <section ref={infoRef} className='mt-100 pt-20 mb-30 bg-teal-950/80 text-neutral-300'>
                <CardLeft title='ROOMS' img='src/assets/images/rooms.webp'>
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
                </CardLeft>
                <CardRight title='SPACES' img='src/assets/images/palapa.webp'>
                    <h2>PALAPA</h2>
                    <p className='mb-5'>The palapa area is a welcoming communal space featuring a well-equipped kitchen 
                        with all modern appliances, including a stove, fridge, wine fridge, and coffee 
                        maker. A dining table for six and comfortable sofas create an ideal setting for 
                        meals and relaxation. This open-air area offers breathtaking views of the deck 
                        and lagoon, providing a perfect backdrop for socializing and enjoying the natural
                        beauty of Bacalar.</p>
                    <h2>PIER</h2>
                    <p className='mb-5'>Step outside and discover our private dock—your front-row seat to the beauty of 
                        the lagoon. Whether you're watching the sunset paint the sky, reading a book 
                        with your feet in the water, sunbathing, or enjoying a refreshing swim, this 
                        peaceful space invites you to slow down and reconnect. For those seeking a bit 
                        of adventure, kayaks and paddleboards are available to explore the lagoon at 
                        your own rhythm, guided only by the sound of nature.</p>               
                </CardRight>
            </section>)}
        </>
        
    )
    
}