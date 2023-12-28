import "../../Styles/Home.css"
import bg from "../../img/image.png"
import btnImg from "../../img/hireme.png"
import Works from "./Works"
import {Link} from "react-router-dom"

function Home()
{
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm <span className="introName">Tobi</span><br/>
                    A Software Engineer
                </span>

                <p className="introPara">
                    I am skilled in building resilient and cost effective software with a focus on great ux designs. 
                </p>
                <Link to="/Contact-me"> 
                    <button className="btn"> <img src={btnImg} alt="Hire Me" className="btnImg" /> Hire Me </button>
                </Link>
            </div>

            {/* TODO Include Experiences*/}
            <h2> Experience</h2>


             {/* TODO Include Projects*/}
             <Works />



        </section>        
    )
}


export default Home;