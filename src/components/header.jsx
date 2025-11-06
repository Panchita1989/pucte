import React from 'react'
import SideBar from './sidebar.jsx'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



export default function Header() {
    const[visible, setVisible] = React.useState(false)
    const[show, setShow] = React.useState(false)

    const {pathname} = useLocation()
    

    const toggleSideBar = () => {
        setVisible(prev => !prev)
    } 
    useEffect(() => {
        if(pathname !== '/'){
            setShow(true)
        }else{
            setShow(false)
        }
    }, [pathname])
    

    return(
        <header  className={`sticky top-0 header flex ${
                    show ? 'justify-between bg-zinc-300/50 text-black' : 'justify-end  text-neutral-300'
                    } items-center h-10`}>
            {show && <Link to='/'><h1>Pucte</h1></Link>}
            <div onClick={toggleSideBar}>Menu <FontAwesomeIcon icon={faBars} /></div>
            <SideBar visible={visible}  />
        </header>
    )
}