import "../../../Styles/Navbar.css"
import {Link} from "react-router-dom";



function Navbar()
{

    return (
        //TODO
        // style the nav bar and add more content 
        <nav className="navbar bg-body-tertiary">
            <Link to="/">
            Home 
            </Link>
            
            <Link to="/Projects">
             Projects
            </Link>

            <Link to="/About">
             About 
            </Link>
      
        </nav>
    )
}


export default Navbar;