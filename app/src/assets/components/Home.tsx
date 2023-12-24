import "../../Styles/Home.css"
import bg from "../../../public/img/image.png"
import btnImg from "../../../public/img/hireme.png"
import {Link} from "react-router-dom"

function Home()
{
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm <span className="introName">Tobi</span><br/>
                    Software Engineer
                </span>

                <p className="introPara">
                    I am skilled in building resilient and cost effective software with a focus on great ux designs. 
                </p>
                <Link to="/Contact"> 
                    <button className="btn"> <img src={btnImg} alt="Hire Me" /> Hire Me </button>
                </Link>
            </div>




            {/* TODO  */}
            {/* add image */}
            <img src={bg} alt="" className="bg" />

            {/* TODO */}
            {/* Include Experiences */}
            <h3> Experience</h3>

        </section>
       



            
      
    )
}


export default Home;