import React from 'react'
import SideBar from './sidebar.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



export default function Header() {
    const[visible, setVisible] = React.useState(false)
    const[show, setShow] = React.useState(false)

    const toggleSideBar = () => {
        setVisible(prev => !prev)
    } 
    

    return(
        <header  className={`header text-neutral-300 flex ${
                    show ? 'justify-between' : 'justify-end'
                    } items-center h-10`}>
            {show && <h1>Pucte</h1>}
            <div onClick={toggleSideBar}>Menu <FontAwesomeIcon icon={faBars} /></div>
            <SideBar visible={visible}  />
        </header>
    )
}