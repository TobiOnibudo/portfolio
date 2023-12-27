import "../../../Styles/Navbar.css"
import {Link} from "react-router-dom"
import logo from "../../../img/Logo-t.png"
import contactImg from "../../../img/contact.png"


function Navbar()
{

    return (
        //TODO
        // style the nav bar and add more content 
        <nav className= "navbar">
            <Link to="/">
            <img src={logo} id= "logo" alt="Tobi's image" />
            </Link>
            <div className="desktopMenu"> 
                    <Link  className="desktopMenuListItem" to="/">
                        Home 
                    </Link>
                    <Link className="desktopMenuListItem " to="/Projects">
                        Portfolio
                    </Link>
                    <Link className="desktopMenuListItem " to="/About">
                        About 
                    </Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="" className="desktopMenuImg" /> Contact me
            </button>
        </nav>
    )
}


export default Navbar;