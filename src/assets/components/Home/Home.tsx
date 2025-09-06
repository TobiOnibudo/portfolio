import "./Home.css"
import btnImg from "../../../img/hireme.png"
import Works from "../Works"
import {Link} from "react-router-dom"
import NBS from "../../../img/NBS_logo.jpg"
import ShiftKey from "../../../img/ShiftkeyLabs-Logo.png"
import Cobweb from "@/img/cobweb.jpeg"
import DashHudson from "@/img/dashhudson-logo.png"
import DalCSS from '@/img/dal-css-logo.png'
import CPPIB from '@/img/CPPIB.jpg'
import Particle from "../particles"
import Experience from "../shared/Experience"


function Home()
{
    return (
        
        <section id="intro">
            <div style={{"width":"10rem"}}>
            <Particle givenWidth = '100%'/>
            </div>
            <div className="introContent">
           
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm <span className="introName">Tobi</span><br/>
                    A Software Engineer
                </span>

                <p className="introPara">
                    I am skilled in building resilient and cost effective software with a focus on great ux designs. 
                </p>
                <Link to="/About" className="learn"> 
                    <button className="btn"> <img src={btnImg} alt="Learn More" className="btnImg" /> Learn More </button>
                </Link>
               
            </div>
        

            
            <section className="sectors" >
              <h2 className="expTitle">Experience </h2>

                <div className="expBars">
                    <Experience
                        source={CPPIB}
                        title="Senior Intern Engineer"
                        company="CPP Investments"
                        dateRange="Sep 2024 - Dec 2024"
                    />

                    <Experience
                        source={DalCSS}
                        title="Vice President External"
                        company="Dalhousie Computer Science Society"
                        dateRange="May 2024 - May 2025"
                    />

                    <Experience
                        source={Cobweb}
                        title="Vice President Outreach"
                        company="COBWEB (Halifax Chapter)"
                        dateRange="March 2024 - March 2025"
                    />  
                    <Experience 
                        source={DashHudson} 
                        title="Development Intern" 
                        company="Dash Hudson" 
                        dateRange="Jan 2024 - April 2024"  
                    />

                    <Experience 
                        source={ShiftKey} 
                        title="Student Ambassador" 
                        company="ShiftKey Labs" 
                        dateRange="Aug 2023 - present"  
                    />

                    <Experience 
                        source={NBS} 
                        title="Junior Software Engineer" 
                        company="NorthBay Solutions" 
                        dateRange="May 2023 - Aug 2023"  
                    />
                </div>
            </section>

            <Works />
        </section>        
    )
}


export default Home;