import CardLeft from "./cardLeft.jsx";
import CardRight from './cardRight.jsx'
import NavBar from './navBar.jsx'
import Button from './button.jsx'
import Footer from './footer.jsx'
import { roomsList } from '../data/rooms.js'
import { spacesList } from '../data/spaces.js'
import { useCollapse } from "react-collapsed";




export default function Rooms() {    

    const { 
        getCollapseProps: getCollapsRooms,
        getToggleProps: getToggleRooms,
        isExpanded: isRoomsExpanded
     } = useCollapse();
    const { 
        getCollapseProps: getCollapseSpaces,
        getToggleProps: getToggleSpaces, 
        isExpanded: isSpacesExpanded } = useCollapse();

    return(
        <>  
            <main className=' md:mx-10 my-5 py-5 bg-teal-950/60 text-neutral-300 tracking-widest leading-loose ransition-opacity duration-700 ease-out opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]'>
                <title>Rooms at Pucté Hotel – Lagoon Front Comfort in Bacalar</title>
                <meta
                    name="description"
                    content="Discover Pucté Lagoon Front Hotel in Bacalar. Exclusive suites, private terraces with lagoon views, palapa, dock, and serene water adventures."
                />
                <meta
                    name="keywords"
                    content="Pucté Hotel, Bacalar Lagoon, Lagoon Front Hotel, Bacalar Mexico, Suites Bacalar, Hotel with Dock, Palapa Bacalar"
                />
                <NavBar />
                <h1 className='text-center'>PUCTÉ - LAGOON FRONT HOTEL</h1>
                <CardLeft title='ROOMS' images={roomsList} >
                            <p className='mb-5  '>Nestled in the heart of nature, Pucté is a tranquil retreat where timeless
                                design meets the soul of the Mayan jungle.</p>
                                {isRoomsExpanded ? '' : (
                                    <button className='border-1 rounded p-2' {...getToggleRooms()}>Show More</button>
                                )}
                             <section className='mb-5' {...getCollapsRooms()}>
                                    <p>We offer four exclusive suites,
                                    each thoughtfully named after the sacred numbers of the ancient Mayan culture, 
                                    inviting you to connect with the heritage and rhythm of this land.
                                    Each suite is equipped with air conditioning to ensure a cool and comfortable 
                                    stay. A dedicated work desk is provided for those who need to stay connected or
                                    inspired, and the private bathroom offers a serene space to refresh and unwind.</p>
                                    <h2 className='mt-8 mb-2'>UPSTAIRS ROOMS</h2>    
                                    <h3>KA'A | HUN</h3>
                                    <p>Experience tranquility in our upstairs rooms, each featuring a comfortable
                                        king-size bed perfect for a restful night’s sleep. Wake up to stunning views of
                                        the lagoon from your private terrace, where you can enjoy a morning coffee or
                                        unwind in the evening. The upstairs location provides a more elevated perspective
                                        of the beautiful surroundings, enhancing your stay with panoramic vistas.</p>
                                    <h2 className='mt-8 mb-2'>DOWNSTAIRS ROOMS</h2>
                                    <h3>KAN | OX</h3>
                                    <p>Our downstairs rooms offer the convenience of easy access to the main palapa,
                                        communal area, and kitchen, making it ideal for socializing or enjoying a meal.
                                        Step out onto your private terrace to take in the serene lagoon views, a perfect
                                        spot to relax and soak in the natural beauty of Bacalar.</p>
                            </section> 
                            {isRoomsExpanded ? (
                             <button className='border-1 rounded p-2' {...getToggleRooms()}>Show Less</button>
                            ) : ''}   
                </CardLeft>
                <div className='text-center mb-10'>
                    <Button className='active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 banner-content bg-neutral-300 text-teal-950 p-2 rounded md:hover:cursor-pointer' content='Stay at Pucté' />
                </div>
                <CardRight title='SPACES' images={spacesList}>
                    <h2>PALAPA</h2>
                    <p className='mb-5'>The palapa area is a welcoming communal space featuring a well-equipped kitchen 
                        with all modern appliances, including a stove, fridge, wine fridge, and coffee 
                        maker.</p>
                     {isSpacesExpanded ? '' : (
                        <button className='border-1 rounded p-2' {...getToggleSpaces()}>Show More</button>
                    )}
                    <section className='mb-5' {...getCollapseSpaces()}>
                                <p>A dining table for six and comfortable sofas create an ideal setting for 
                                    meals and relaxation. This open-air area offers breathtaking views of the deck 
                                    and lagoon, providing a perfect backdrop for socializing and enjoying the natural
                                    beauty of Bacalar.</p>
                                <h2 className='mt-8'>PIER</h2>
                                <p className='md:mb-5'>Step outside and discover our private dock—your front-row seat to the beauty of 
                                    the lagoon. Whether you're watching the sunset paint the sky, reading a book 
                                    with your feet in the water, sunbathing, or enjoying a refreshing swim, this 
                                    peaceful space invites you to slow down and reconnect. For those seeking a bit 
                                    of adventure, kayaks and paddleboards are available to explore the lagoon at 
                                    your own rhythm, guided only by the sound of nature.</p>         
                    </section>  
                     {!isSpacesExpanded ? '' : (
                        <button className='border-1 rounded p-2' {...getToggleSpaces()}>Show Less</button>
                    )}    
                </CardRight>
            </main>
            <Footer />
        </>
        
    )
    
}