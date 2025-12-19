import CardLeft from './cardLeft.jsx'
import CardRight from './cardRight.jsx'
import NavBar from './navBar.jsx'
import Footer from './footer.jsx'
import { useCollapse } from "react-collapsed";
import { useTranslation } from 'react-i18next'


export default function Bacalar() {

    const { t, i18n } = useTranslation()

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
        <main className='md:mx-10 mt-20 mb-5 py-5 bg-teal-950/60 text-neutral-300 tracking-widest leading-loose'>
            <title>Explore Bacalar – Pucté Hotel and Tours on Bacalar Lagoon</title>
            <meta 
                name="description" 
                content="Discover Bacalar and its Lagoon of Seven Colors. Explore food, drinks, water adventures, and historical Mayan sites nearby Pucté Hotel." 
            />
            <meta name="keywords" content="Bacalar, Bacalar Lagoon, Lagoon of Seven Colors, Pucté Hotel, Bacalar restaurants, Bacalar activities, Bacalar tours" />
            
            <NavBar />
            <h1 className='text-center'>{t('bacalar.title').toUpperCase()}</h1>
            <CardLeft title='BACALAR' img='images/bacalar1.jpg' alt="Aerial view of Bacalar Lagoon in Mexico" >
                <p className='tracking-widest leading-loose mb-5'>
                    {t('bacalar.bacalarDescription')}
                </p>
                 {isBacalarExpanded ? '' : (
                    <button className='border-1 rounded p-2' {...getToggleBacalar()}>{t('buttons.show')}</button>
                )}
                 <section className='mb-5' {...getCollapseBacalar()}>
                    <p>
                        {t('bacalar.bacalarDescriptionExpanded')}
                    </p>
                 </section>
                {!isBacalarExpanded ? '' : (
                    <button className='border-1 rounded p-2' {...getToggleBacalar()}>{t('buttons.less')}</button>
                )}
            </CardLeft>
            <CardRight title='FOOD' img='images/food.jpg' alt='Tigre Restaurant Bacalar'>
                <p>
                    {t('bacalar.foodDescription')}
                </p>
                <ul className='pt-5 flex justify-between flex-wrap'>
                    <li><a href="https://tigrebacalar.com/" target='blank'>TIGRE</a></li>
                    <li>|</li>
                     <li><a href="https://www.norumx.com/" target='blank'> NORU </a></li>
                    <li>|</li>
                    <li><a href="https://share.google/VmAP1cVsyXgujgVux" target='blank'>NIXTAMAL</a></li>
                    <li>|</li>
                    <li><a href="https://casaumay.com/en/cheunic-espanol" target='blank'>CHEUNIC</a></li>
                </ul>
            </CardRight>
            <CardLeft title='Time for a drink' img='images/drinks.jpg' alt='Tigre Restaurant'>
                <p>{t('bacalar.drinksDescription')}</p>
                <ul className='pt-5 flex justify-between flex-wrap'>
                    <li><a href="https://tigrebacalar.com/" target='blank'>TIGRE</a></li>
                    <li>|</li>
                    <li><a href="https://www.norumx.com/" target='blank'> NORU </a></li>
                    <li>|</li>
                    <li><a href="https://linktr.ee/fruta_bacalar" target='blank'>FRUTA</a></li>
                    <li>|</li>
                    <li><a href="https://share.google/Zu4mNSMBpAxSy8gTF" target='blank'>CATRINA - for Salsa</a></li>
                </ul>
            </CardLeft>
            <CardRight title={t('bacalar.water').toUpperCase()} img='images/water.webp' alt='Tours and fun in the Lagoon'>
                <p>
                    {t('bacalar.waterDescription')}
                </p>
                <ul className='pt-5 flex justify-between flex-wrap'>
                    <li>{t('bacalar.sail').toUpperCase()}</li>
                    <li>|</li>
                    <li>SUP</li>
                    <li>|</li>
                    <li>KAYAKS</li>
                    <li>|</li>
                    <li>{t('bacalar.cenote').toUpperCase()}</li>  
                </ul>
            </CardRight>
            <CardLeft title={t('bacalar.past').toUpperCase()} img='images/past.webp' alt='History of Bacalar and the Lagoon'>
                <p>
                    {t('bacalar.pastDescription')}
                </p>
                <ul className='pt-5 flex justify-between flex-wrap'>
                    <li><a href="https://share.google/Hte2rzOiAzKRI0jLV" target='blank'>CALAKMUL</a></li>
                    <li>|</li>
                    <li><a href="https://share.google/ai281cPrVryVnOy0O" target='blank'>KOHUNLICH</a></li>
                    <li>|</li>
                    <li><a href="https://www.chacchobenruins.com/" target='blank'>CHACCHOBEN</a></li>
                    <li>|</li>
                    <li><a href="https://share.google/sl0EVpIsPFE5U1rTt" target='blank'>FUERTE SAN FELIPE</a></li> 
                    <li>|</li>
                    <li><a href="https://share.google/u3rU2ehTMC5pL6Pkh" target='blank'>ICHKABAL</a></li> 
                    </ul>
            </CardLeft>
        </main>
        <Footer />
        </>
    )
    
}