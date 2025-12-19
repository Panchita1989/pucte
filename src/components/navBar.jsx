import {Link, useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next'


export default function NavBar({visible}) {

    const { t,  i18n  } = useTranslation()
    const navMenu = [ { path: '/rooms', label: t('nav.rooms') },  {path: '/bacalar', label: t('nav.bacalar')}, {path: '/experiences', label: t('nav.experiences')}, {path: '/location', label: t('nav.location')}, {path: '/contact', label:t('nav.contact')}]
    
    const[active, setActive] = useState('')

    const {pathname} = useLocation()
    
    useEffect(() =>{
        if(pathname !== '/'){
            setActive(pathname.replace('/', ''))
        }

    }, [pathname])

    return(
        <nav className='p-10 hidden md:block'>
            <ul className={`${
                visible ? 'flex flex-col justify-end ' : 'flex flex-row justify-around' }`}>
                {navMenu.map(e => {
                   const lower = e.path.toLowerCase()
                   const isActive = active === lower 
                   return <li className={`${
                        isActive ? 'border-b-2 border-neutral-300 text-neutral-100' : 'text-neutral-400 hover:text-neutral-200'
                        } transition-all duration-200`}
                         key={e.path}>
                        <Link  to={`${e.path.toLowerCase()}`}>
                            {e.label}
                        </Link>
                    </li>
                })}
                    <li className='text-neutral-400 hover:text-neutral-200'><a href="https://hotels.cloudbeds.com/reservation/pucté" target='blank'>{t('nav.stay')}</a></li>
            </ul>
        </nav>
    )
    
}