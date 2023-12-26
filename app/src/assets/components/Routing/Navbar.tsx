import "../../../Styles/Navbar.css"
import {Link} from "react-router-dom"
import logo from "../../../../public/img/favicon.png"
import contactImg from "../../../../public/img/contact.png"


function Navbar()
{

    return (
        //TODO
        // style the nav bar and add more content 
        <nav className= "navbar nav-header ">
            <img src={logo} id= "logo" alt="Tobi's image" />
            <ul className="nav"> 
                <li className ="nav-item">
                    <Link  className="nav-link pagelink" to="/">
                        Home 
                    </Link>
                </li>
                

                <li className ="nav-item ">
                    <Link className="nav-link pagelink" to="/Projects">
                        Projects
                    </Link>
                </li>

                <li className ="nav-item " >
                    <Link className="nav-link pagelink" to="/About">
                        About 
                    </Link>
                </li>
            </ul>

            <button className="desktopMenuBtn">
                <img src={contactImg} alt="" className="desktopMenuImg" /> Contact me
            </button>
        </nav>
    )
}


export default Navbar;