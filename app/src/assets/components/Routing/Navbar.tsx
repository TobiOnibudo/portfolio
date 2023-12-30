import "../../../Styles/Navbar.css"
import {NavLink,Link} from "react-router-dom"
import logo from "../../../img/Logo-t.png"
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";

function Navbar()
{
    const [showMenu,setShowMenu] = useState(false)

    return (
        //TODO
        // style the nav bar and add more content 
        <nav className= "navbar">

            
            <Link to="/">
            <img src={logo} id= "logo" alt="Tobi's image" />
            </Link>
            <div className="desktopMenu"> 
                    <NavLink
                        className={({ isActive }) =>
                        [
                        "desktopMenuListItem",
                        isActive ? "active" : null,
                        ]
                        .filter(Boolean)
                        .join(" ")} 
                        to="/"
                        >
                        Home 
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) =>
                        [
                        "desktopMenuListItem",
                        isActive ? "active" : null,
                        ]
                        .filter(Boolean)
                        .join(" ")} 
                        to="/Projects">
                        Portfolio
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) =>
                        [
                        "desktopMenuListItem",
                        isActive ? "active" : null,
                        ]
                        .filter(Boolean)
                        .join(" ")} 
                        to="/About">
                        About 
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) =>
                        [
                        "desktopMenuListItem",
                        isActive ? "active" : null,
                        ]
                        .filter(Boolean)
                        .join(" ")} 
                        to="/Contact-me">
                        Contact 
                    </NavLink>
            </div>

            
            <BiMenuAltRight className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}> 
                    <NavLink
                        className={({ isActive }) =>
                        [
                        "listItem",
                        isActive ? "active" : null,
                        ]
                        .filter(Boolean)
                        .join(" ")} 
                        to="/"
                        onClick={()=>setShowMenu(false)}>
                        Home 
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) =>
                        [
                        "listItem",
                        isActive ? "active" : null,
                        ]
                        .filter(Boolean)
                        .join(" ")} 
                        to="/Projects"onClick={()=>setShowMenu(false)}>
                        Portfolio
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) =>
                        [
                        "listItem",
                        isActive ? "active" : null,
                        ]
                        .filter(Boolean)
                        .join(" ")} 
                        to="/About"onClick={()=>setShowMenu(false)}>
                        About 
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) =>
                        [
                        "listItem",
                        isActive ? "active" : null,
                        ]
                        .filter(Boolean)
                        .join(" ")} 
                        to="/Contact-me"
                        onClick={()=>setShowMenu(false)}>
                        Contact 
                    </NavLink>
            </div>
        </nav>
    )
}


export default Navbar;