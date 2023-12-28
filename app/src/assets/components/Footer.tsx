import "../../Styles/Footer.css"
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Resume from "../../img/resume.png"

function Footer()
{

    let iconStyle = {width: "3rem", height: "3rem", margin: "0.5rem"}
    return (
        <footer className="footer">
            

            <p>Copyright &#169; 2024 Tobi Onibudo. All rights received</p>

            <div className="links">
                {/* linkedin */}
                <AiFillLinkedin style={iconStyle}/>
                {/* github */}
                <AiFillGithub  style = {iconStyle}/> 
                {/* resume */}
                <img src={Resume} alt="" className="link" />
                {/* email */}
                <AiFillMail style={iconStyle}/>
            </div>
        </footer>
    )
}


export default Footer