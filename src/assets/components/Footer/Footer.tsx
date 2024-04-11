import "./Footer.css"
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Resume from "../../../img/resume.png"
import Pdf from "../../../img/Resume.pdf"
import { NavLink } from "react-router-dom";

function Footer()
{

    
    return (
        <footer className="footer">
            <div className="links">
                {/* linkedin */}
                <a href="https://www.linkedin.com/in/tobi-onibudo/" target="_blank" > <AiFillLinkedin className="link"/> </a>
                {/* github */}
                <a href="https://github.com/TobiOnibudo" target="_blank" >  <AiFillGithub   className="link"/> </a>
                {/* resume */}
                    <a href={Pdf} target="_blank" ><img src={Resume} alt="" className="resume" /> </a>
                {/* email */}
                <NavLink to="/Contact-me" target="_blank">  <AiFillMail className="link"/> </NavLink>
            </div>
        </footer>
    )
}


export default Footer