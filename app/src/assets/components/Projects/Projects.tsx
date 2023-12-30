import "../../../Styles/Projects.css"
import Project from "./Project";
import book from "../../../img/Book-img.png"
import quiz from "../../../img/Quiz-img.jpg"
import Social from "../../../img/SM-img.jpg"
import Blog from "../../../img/Blog-img.png"
import SmartSearch from "../../../img/Smart-search-img.png"
import { FaHtml5, FaJava,FaNode,FaAws} from "react-icons/fa6";
import { IoLogoJavascript,IoLogoCss3,IoLogoFirebase} from "react-icons/io5";
import { BsFiletypeXml } from "react-icons/bs";
import { SiKotlin, SiTypescript,SiMongodb } from "react-icons/si";
import { FaReact,FaDatabase  } from "react-icons/fa";
import Particle from "../particles";
import Particle2 from "../particles2";



function Projects()
{
    let html =  { id : 0 ,reactIcon:<FaHtml5  className="stackIcon"/>}
    let java = { id : 1 ,reactIcon:<FaJava className="stackIcon"/>}
    let css = { id : 2 ,reactIcon: <IoLogoCss3 className="stackIcon"/>} 
    let xml  = { id : 3 ,reactIcon:<BsFiletypeXml className="stackIcon"/>}
    let kotlin = { id : 4 ,reactIcon:<SiKotlin className="stackIcon"/>}
    let javascript =  { id : 5 ,reactIcon:<IoLogoJavascript className="stackIcon"/>}
    let react =  { id : 6 ,reactIcon: <FaReact className="stackIcon"/>}
    let firebase =  { id : 7 ,reactIcon:<IoLogoFirebase className="stackIcon"/>}
    let sql = {id : 8 ,reactIcon:<FaDatabase className="stackIcon"/>}
    let typescript = {id : 9 ,reactIcon:<SiTypescript className="stackIcon"/>}
    let nodejs = {id : 10 ,reactIcon:<FaNode className="stackIcon"/>}
    let mongodb = {id : 11 ,reactIcon:<SiMongodb className="stackIcon"/>}
    let aws = {id : 12 ,reactIcon:<FaAws  className="stackIcon"/>}
    return (

        <section className="cover"> 
            <h3 className="portfolioTitle"> My Personal Projects</h3>
           
        <div className="projects">
        <div className ="particle"style={{"width":"100%!important"}}>
                        <Particle givenWidth={"10vw"}/>
            </div>

            <div className="portfolio">
                
                <div className="projectCard" data-scroll>
                    <Project 
                        Title="Personal Library" 
                        description="This is a personal book library made for
                        users to keep track of books they are interested in and have read. This would be really
                        useful for fellow avid readers as it can be quite hard to keep track of hardcopy books 
                        in their library." image={book} link = {"https://github.com/TobiOnibudo/Book"}
                        stack={[kotlin,java,xml,sql]} 
                    />
                </div>

                <div className="projectCard">
                    <Project
                        Title="Quiz App" 
                        description="This is quiz app made for
                        teachers or educators to test their students on certain general questions. This app could be used for online assessments
                        for several scenarios like academic tests or online interviews." image={quiz} link = {"https://github.com/TobiOnibudo/Quiz_Game"}
                        stack={[kotlin,xml,firebase]} 
                    />
                </div>

                <div className="projectCard">
                    <Project
                        Title="Social Media App " 
                        description="This was an attempt to simulate the early stages of facebook where the biggest feature was the like feature.
                        It is currently still a work in progress but I hope to get it past an MVP stage some day.
                        " image={Social} link = {"https://github.com/TobiOnibudo/social-media-prototype"}
                        stack={[html,css,typescript]} 
                    />
                </div>
                

                <div className="projectCard">
                    <Project
                        Title="Blog Website " 
                        description="This was made to create a blog in which a community of friends would be able to blog on several ideas with out a limit on the word count. 
                        This can be seen as a substitute for X (formerly known as twitter) but only a few can put out content." 
                        image={Blog} link = {"https://github.com/TobiOnibudo/BlogWebsite"}
                        stack={[html,css,javascript,nodejs,mongodb]} 
                    />
                </div>

                <div className="projectCard">
                    <Project
                        Title="Smart Search" 
                        description="This was to scrape data off the SEC website toproduce the latest filings of the current month 
                        on an easily accessible and user friendly platform.While the backend is no longer 
                        active it utilize several cloud resources such as AWS RDS, AWS EC2 and AWS VPC. 
                        I completed this project to an MVP stage during my time at NorthBay Solutions " 
                        image={SmartSearch} link = {"https://github.com/TobiOnibudo/smartsearchUI"}
                        stack={[html,css,javascript,react,aws]} 
                    />
                </div>

            </div>
           
            <div className ="particle"style={{"width":"100rem!important",color:"white"}}>
                        <Particle2 givenWidth={"10vw"}/>
            </div>
        </div>
        </section>
    )
}


export default Projects;