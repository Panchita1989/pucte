import CardLeft from './cardLeft.jsx'
import CardRight from './cardRight.jsx'
import NavBar from './navBar.jsx'
import Footer from './footer.jsx'

export default function Bacalar() {
    return(
        <>
        <main className='mx-10 my-1 py-5 bg-teal-950/80 text-neutral-300 tracking-widest leading-loose ransition-opacity duration-700 ease-out opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]'>
            <NavBar />
            <h1 className='text-center'>EXPLORE BACALAR</h1>
            <CardLeft title='BACALAR' img='images/bacalar1.jpg' >
                <p className='tracking-widest leading-loose'>Located on the eastern coast of the Yucatán Peninsula, the charming town of Bacalar serves as the gateway to
                    paradise. Steeped in history and culture, Bacalar town boasts a rich heritage dating back to ancient Mayan 
                    civilizations. Bacalar Lagoon, also known as the 'Lagoon of Seven Colors,' is a mesmerizing natural wonder in 
                    the heart of Quintana Roo, Mexico. With its crystal-clear turquoise waters and lush surrounding landscapes, 
                    this enchanting lagoon captivates visitors from around the world.</p>
            </CardLeft>
            <CardRight title='FOOD' img='images/food.jpg'>
                <p>Food connoisseur or simply someone seeking a delightful meal, we highly recommend these exceptional restaurants in Bacalar:</p>
                <ul className='pt-10 flex justify-between flex-wrap'>
                    <li><a href="">TIGRE</a></li>
                    <li>|</li>
                    <li><a href="">FINISTERRE</a></li>
                    <li>|</li>
                    <li><a href="">NIXTAMAL</a></li>
                    <li>|</li>
                    <li><a href="">CHEUNIC</a></li>
                </ul>
            </CardRight>
            <CardLeft title='Time for a drink' img='images/drinks.jpg'>
                <p>Pucté's favorite stops for a relaxed night out:</p>
                <ul className='pt-10 flex justify-between flex-wrap'>
                    <li><a href="">TIGRE</a></li>
                    <li>|</li>
                    <li><a href="">NAO</a></li>
                    <li>|</li>
                    <li><a href="">HABITAS</a></li>
                    <li>|</li>
                    <li><a href="">CATRINA - for Salsa</a></li>
                </ul>
            </CardLeft>
            <CardRight title='Water is everywhere and is everything' img='images/water.webp'>
                <p>We love the lagoon, so we always recommend avoiding motor vehicles. The most beautiful way to experience the
                    lagoon is by exploring it on your own. Our favorite water adventures include:</p>
                <ul className='pt-10 flex justify-between flex-wrap'>
                    <li><a href="">SAILING</a></li>
                    <li>|</li>
                    <li><a href="">SUP</a></li>
                    <li>|</li>
                    <li><a href="">KAYAKS</a></li>
                    <li>|</li>
                    <li><a href="">DIP IN THE CENOTE</a></li>  
                </ul>
            </CardRight>
            <CardLeft title='OUR PAST' img='images/past.webp'>
                <p>To truly comprehend our present lives, we must genuinely embrace the richness of the past. In our quest for
                    cultural enlightenment, we highly recommend exploring the magnificent sites:</p>
                <ul className='pt-10 flex justify-between flex-wrap'>
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