import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const SideBar = ({visible, onClose}) => {
     const { t } = useTranslation()
    const navMenu = [ { path: '/rooms', label: t('sideNav.rooms') },  {path: '/bacalar', label: t('sideNav.bacalar')}, {path: '/experiences', label: t('sideNav.experiences')}, {path: '/location', label: t('sideNav.location')}, {path: '/contact', label:t('sideNav.contact')}]
   
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
                    <li className='active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 rounded p-2 transition-colors'><a href="https://hotels.cloudbeds.com/reservation/pucté" target='blank'> {t('sideNav.stay')}</a></li>
                </ul> 
                <span className='text-center text-gray-900 text-sm'>  © {new Date().getFullYear()} Pucté. All rights reserved.</span>           
        </div>
    )
}

export default SideBar