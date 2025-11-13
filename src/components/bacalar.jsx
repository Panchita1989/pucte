import CardLeft from './cardLeft.jsx'
import CardRight from './cardRight.jsx'
import NavBar from './navBar.jsx'
import Footer from './footer.jsx'
import { useCollapse } from "react-collapsed";


export default function Bacalar() {

    const {
        getCollapseProps: getCollapseBacalar,
        getToggleProps: getToggleBacalar,
        isExpanded: isBacalarExpanded
    } = useCollapse()

    const{
        getCollapseProps: getCollapseFood,
        getToggleProps: getToggleFood,
        isExpanded: isFoodExpanded
    } = useCollapse()

    return(
        <>
        <main className='md:mx-10 my-5 py-5 bg-teal-950/60 text-neutral-300 tracking-widest leading-loose ransition-opacity duration-700 ease-out opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]'>
            <title>Explore Bacalar – Pucté Hotel and Tours on Bacalar Lagoon</title>
            <meta 
                name="description" 
                content="Discover Bacalar and its Lagoon of Seven Colors. Explore food, drinks, water adventures, and historical Mayan sites nearby Pucté Hotel." 
            />
            <meta name="keywords" content="Bacalar, Bacalar Lagoon, Lagoon of Seven Colors, Pucté Hotel, Bacalar restaurants, Bacalar activities, Bacalar tours" />
            
            <NavBar />
            <h1 className='text-center'>EXPLORE BACALAR</h1>
            <CardLeft title='BACALAR' img='images/bacalar1.jpg' alt="Aerial view of Bacalar Lagoon in Mexico" >
                <p className='tracking-widest leading-loose mb-5'>
                    Located on the eastern coast of the Yucatán Peninsula, the charming town of Bacalar serves as the gateway to
                    paradise. </p>
                 {isBacalarExpanded ? '' : (
                    <button className='border-1 rounded p-2' {...getToggleBacalar()}>Show More</button>
                )}
                 <section className='mb-5' {...getCollapseBacalar()}>
                    <p>Steeped in history and culture, Bacalar town boasts a rich heritage dating back to ancient Mayan 
                        civilizations. Bacalar Lagoon, also known as the 'Lagoon of Seven Colors,' is a mesmerizing natural wonder in 
                        the heart of Quintana Roo, Mexico. With its crystal-clear turquoise waters and lush surrounding landscapes, 
                        this enchanting lagoon captivates visitors from around the world.</p>
                 </section>
                {!isBacalarExpanded ? '' : (
                    <button className='border-1 rounded p-2' {...getToggleBacalar()}>Show More</button>
                )}
            </CardLeft>
            <CardRight title='FOOD' img='images/food.jpg' alt='Tigre Restaurant Bacalar'>
                <p>Food connoisseur or simply someone seeking a delightful meal, we highly recommend these exceptional restaurants in Bacalar:</p>
                <ul className='pt-5 flex justify-between flex-wrap'>
                    <li><a href="">TIGRE</a></li>
                    <li>|</li>
                    <li><a href="">FINISTERRE</a></li>
                    <li>|</li>
                    <li><a href="">NIXTAMAL</a></li>
                    <li>|</li>
                    <li><a href="">CHEUNIC</a></li>
                </ul>
            </CardRight>
            <CardLeft title='Time for a drink' img='images/drinks.jpg' alt='Tigre Restaurant'>
                <p>Pucté's favorite stops for a relaxed night out:</p>
                <ul className='pt-5 flex justify-between flex-wrap'>
                    <li><a href="">TIGRE</a></li>
                    <li>|</li>
                    <li><a href="">NAO</a></li>
                    <li>|</li>
                    <li><a href="">HABITAS</a></li>
                    <li>|</li>
                    <li><a href="">CATRINA - for Salsa</a></li>
                </ul>
            </CardLeft>
            <CardRight title='Water is everywhere and is everything' img='images/water.webp' alt='Tours and fun in the Lagoon'>
                <p>We love the lagoon, so we always recommend avoiding motor vehicles. The most beautiful way to experience the
                    lagoon is by exploring it on your own. Our favorite water adventures include:</p>
                <ul className='pt-5 flex justify-between flex-wrap'>
                    <li><a href="">SAILING</a></li>
                    <li>|</li>
                    <li><a href="">SUP</a></li>
                    <li>|</li>
                    <li><a href="">KAYAKS</a></li>
                    <li>|</li>
                    <li><a href="">DIP IN THE CENOTE</a></li>  
                </ul>
            </CardRight>
            <CardLeft title='OUR PAST' img='images/past.webp' alt='History of Bacalar and the Lagoon'>
                <p>To truly comprehend our present lives, we must genuinely embrace the richness of the past. In our quest for
                    cultural enlightenment, we highly recommend exploring the magnificent sites:</p>
                <ul className='pt-5 flex justify-between flex-wrap'>
                    <li><a href="">CALAKMUL</a></li>
                    <li>|</li>
                    <li><a href="">KOHUNLICH</a></li>
                    <li>|</li>
                    <li><a href="">CHACCHOBEN</a></li>
                    <li>|</li>
                    <li><a href="">FUERTE SAN FELIPE</a></li> 
                    <li>|</li>
                    <li><a href="">ICHKABAL</a></li> 
                    </ul>
            </CardLeft>
        </main>
        <Footer />
        </>
    )
    
}