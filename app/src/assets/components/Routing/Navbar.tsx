import "../../../Styles/Navbar.css"
import {Link} from "react-router-dom"
import logo from "../../../../public/img/favicon.png"
import contactImg from "../../../../public/img/contact.png"


function Navbar()
{

    return (
        //TODO
        // style the nav bar and add more content 
        <nav className= "navbar">
            <img src={logo} id= "logo" alt="Tobi's image" />
            <div className="desktopMenu"> 
                    <Link  className="desktopMenuListItem" to="/">
                        Home 
                    </Link>
                    <Link className="desktopMenuListItem " to="/Projects">
                        Projects
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