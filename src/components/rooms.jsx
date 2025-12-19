import CardLeft from "./cardLeft.jsx";
import CardRight from './cardRight.jsx'
import NavBar from './navBar.jsx'
import Button from './button.jsx'
import Footer from './footer.jsx'
import Reviews from './reviews.jsx'
import { roomsList } from '../data/rooms.js'
import { spacesList } from '../data/spaces.js'
import { useCollapse } from "react-collapsed";
import { useTranslation } from 'react-i18next'



export default function Rooms() {  
    const { t,  i18n  } = useTranslation()  

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
            <main className=' md:mx-10 mt-20 mb-5 py-5 bg-teal-950/60 text-neutral-300 tracking-widest leading-loose'>
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
                <h1 className='text-center'>{t('rooms.title')}</h1>
                <CardLeft title={t('nav.rooms').toUpperCase()} images={roomsList} >
                            <p className='mb-5  text-[17px]'>
                                {t('rooms.description')}
                            </p>
                                {isRoomsExpanded ? '' : (
                                    <button className='border-1 rounded p-2' {...getToggleRooms()}>{t('buttons.show')}</button>
                                )}
                             <section className='mb-5' {...getCollapsRooms()}>
                                    <p>
                                        {t('rooms.descriptionExpanded')}
                                    </p>
                                    <h2 className='mt-8 mb-2'>{t('rooms.up').toUpperCase()}</h2>    
                                    <h3>KA'A | HUN</h3>
                                    <p>
                                        {t('rooms.upDescription')}
                                    </p>
                                    <h2 className='mt-8 mb-2'>{t('rooms.down').toUpperCase()}</h2>
                                    <h3>KAN | OX</h3>
                                    <p>
                                        {t('rooms.downDescription')}
                                    </p>
                            </section> 
                            {isRoomsExpanded ? (
                             <button className='border-1 rounded p-2' {...getToggleRooms()}>{t("buttons.less")}</button>
                            ) : ''}   
                </CardLeft>
                <div className='text-center mb-10'>
                    <a  href="https://hotels.cloudbeds.com/reservation/pucté"  target="_blank">
                        <Button 
                            className='active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 banner-content bg-neutral-300 text-teal-950 p-2 rounded md:hover:cursor-pointer' content='Stay at Pucté' />
                    </a>
                </div>
                <CardRight title={t('rooms.subtitle').toUpperCase()} images={spacesList}>
                    <h2>PALAPA</h2>
                    <p className='mb-5 text-[17px]'>
                        {t('rooms.palapaDescription')}
                    </p>
                     {isSpacesExpanded ? '' : (
                        <button className='border-1 rounded p-2' {...getToggleSpaces()}>{t('buttons.show')}</button>
                    )}
                    <section className='mb-5' {...getCollapseSpaces()}>
                                <p>
                                    {t('rooms.palapaDescriptionExpanded')}
                                </p>
                                <h2 className='mt-8'>{t('rooms.subtitle').toUpperCase()}</h2>
                                <p className='md:mb-5'>
                                    {t('rooms.pierDescription')}
                                </p>         
                    </section>  
                     {!isSpacesExpanded ? '' : (
                        <button className='border-1 rounded p-2' {...getToggleSpaces()}>{t('buttons.less')}</button>
                    )}    
                </CardRight>
            </main>
            <Reviews />
            <Footer />
        </>
        
    )
    
}