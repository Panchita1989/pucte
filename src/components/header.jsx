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
        <>
        <header  className={`sticky top-0 header flex text-xl w-full z-20 ${
                    show ? 'justify-between bg-black/60 backdrop-blur-md text-neutral-300 ransition-opacity duration-700 ease-out opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]' : 'justify-end bg-teal-900/20 text-neutral-300'
                    } items-center h-20`}>
            {show && <Link to='/' onClick={onClose}><img className=' h-15 rounded-full' src="images/logo.png" alt="pucte" /></Link>}
            <div onClick={toggleSideBar}>Menu <FontAwesomeIcon icon={faBars} /></div>
            
        </header>
        <SideBar onClose={onClose} visible={visible}  />
        </>
    )
}