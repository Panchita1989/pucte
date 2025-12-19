import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const SideBar = ({visible, onClose}) => {
    const { t,  i18n  } = useTranslation()
    const navMenu = [ { path: '/rooms', label: t('nav.rooms') },  {path: '/bacalar', label: t('nav.bacalar')}, {path: '/experiences', label: t('nav.experiences')}, {path: '/location', label: t('nav.location')}, {path: '/contact', label:t('nav.contact')}]
    
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return(
        <div
            className={`z-20 flex flex-col justify-between z-10 rounded-xl fixed top-0 right-0 h-full md:w-64 w-40 bg-neutral-300/40 backdrop-blur-md shadow-xl transform transition-transform duration-500 ease-in-out ${
                visible ? "translate-x-0" : "translate-x-full"
                }`}
        >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
                >
                    ✕
                </button>
               
                <ul className="flex flex-col items-center mt-20 space-y-8 text-lg font-medium text-gray-800">
                {navMenu.map(e => {              
                    return <li key={e.path}
                            onClick={onClose}
                            className='text-[20px]'>
                                <Link className="active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 rounded p-2 transition-colors"
                                 to={`${e.path}`}
                                >
                                    {e.label}
                                </Link>
                    </li>
                })}
                    <li className='text-[20px] text-center active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 rounded p-2 transition-colors'><a href="https://hotels.cloudbeds.com/reservation/pucté" target='blank'> {t('nav.stay')}</a></li>
                </ul> 
                <div className="mt-6 text-center pt-4 text-sm">
                    <div className="mt-6 text-sm flex justify-center space-x-4">
                        <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'underline font-semibold' : "cursor-pointer "}>EN</button>
                        <button onClick={() => changeLanguage('es')} className={i18n.language === 'es' ? 'underline font-semibold' : "cursor-pointer "}>ES</button>
                        <button onClick={() => changeLanguage('de')} className={i18n.language === 'de' ? 'underline font-semibold' : "cursor-pointer "}>DE</button>
                        <button onClick={() => changeLanguage('fr')} className={i18n.language === 'fr' ? 'underline font-semibold' : "cursor-pointer "}>FR</button>
                    </div>
                
                    <span className='text-center text-gray-900 text-sm'>  © {new Date().getFullYear()} Pucté. All rights reserved.</span>     
                </div>      
        </div>
    )
}

export default SideBar