import {Link} from 'react-router-dom'

export default function NavBar({navMenu}) {

    return(
        <nav className='p-10'>
            <ul className='flex flex-row justify-around'>
                {navMenu.map(e => {
                   return <li key={e}>
                        <Link to={`/${e.toLowerCase()}`}>
                            {e}
                        </Link>
                    </li>
                })}
            </ul>
        </nav>
    )
    
}