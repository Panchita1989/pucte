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
    
    const onClose = () =>{
        setVisible(false)
    }

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
        <header  className={`sticky top-0 header flex text-xl ${
                    show ? 'justify-between bg-neutral-300/80  text-teal-900' : 'justify-end  text-neutral-300'
                    } items-center h-20`}>
            {show && <Link to='/' onClick={onClose}><img className=' h-15 rounded-full' src="src/assets/images/logo.png" alt="pucte" /></Link>}
            <div onClick={toggleSideBar}>Menu <FontAwesomeIcon icon={faBars} /></div>
            <SideBar onClose={onClose} visible={visible}  />
        </header>
    )
}