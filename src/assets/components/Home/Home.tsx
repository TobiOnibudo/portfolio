import "./Home.css"
import btnImg from "../../../img/hireme.png"
import Works from "../Works"
import {Link} from "react-router-dom"
import NBS from "../../../img/NBS_logo.jpg"
import ShiftKey from "../../../img/ShiftkeyLabs-Logo.png"
import DashHudson from "../../../img/dashhudson-logo.png"
import Particle from "../particles"


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
                    <div className="expBar">
                    <img src={DashHudson} alt="" className="expBarImg" />
                    <div className="expBarText">
                        <p className="expTitle">Development Intern</p>
                        <p className="expCompany">Dash Hudson</p>
                        <p  className="expPeriod">Jan 2024 - present</p>
                    </div>
                    </div>

                    <div className="expBar">
                    <img src={ShiftKey} alt="" className="expBarImg" />
                    <div className="expBarText">
                        <p className="expTitle">Student Ambassador</p>
                        <p className="expCompany">ShiftKey Labs</p>
                        <p className="expPeriod">Aug 2023 - present </p>
                    </div>
                    </div>

                    <div className="expBar">
                    <img src={NBS} alt="" className="expBarImg" />
                    <div className="expBarText">
                        <p className="expTitle">Junior Software Engineer</p>
                        <p className="expCompany">NorthBay Solutions</p>
                        <p className="expPeriod">May 2023 - Aug 2023</p>
                    </div>
                    </div>
                </div>

                
                </section>
             
             <Works />



        </section>        
    )
}


export default Home;