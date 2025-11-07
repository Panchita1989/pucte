import {Link, useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'


export default function NavBar({visible}) {

    const navMenu = ['Rooms', 'Bacalar', 'Experiences', 'Location', 'Contact']
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
                   const lower = e.toLowerCase()
                   const isActive = active === lower 
                   return <li className={`${
                        isActive ? 'border-b-2 border-neutral-300 text-neutral-100' : 'text-neutral-400 hover:text-neutral-200'
                        } transition-all duration-200`}
                         key={e}>
                        <Link  to={`/${e.toLowerCase()}`}>
                            {e}
                        </Link>
                    </li>
                })}
                    <li className='text-neutral-400 hover:text-neutral-200' ><a href="">Book now</a></li>
            </ul>
        </nav>
    )
    
}