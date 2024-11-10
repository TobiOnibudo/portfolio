import "../../../Styles/Projects.css"
import Project from "./Project";
import book from "../../../img/Book-img.png"
import quiz from "../../../img/Quiz-img.jpg"
import Social from "../../../img/SM-img.jpg"
import Blog from "../../../img/Blog-img.png"
import SmartSearch from "../../../img/Smart-search-img.png"
import threads from "../../../img/threads.webp"
import ecommerce from "../../../img/eCommerce-logo.jpg"
import { FaHtml5, FaJava,FaNode,FaAws} from "react-icons/fa6";
import { IoLogoJavascript,IoLogoCss3,IoLogoFirebase} from "react-icons/io5";
import { BsFiletypeXml } from "react-icons/bs";
import { SiKotlin, SiTypescript,SiMongodb,SiNextdotjs } from "react-icons/si";
import { FaReact,FaDatabase  } from "react-icons/fa";
import Particle from "@/assets/components/particles"





function Projects()
{
    const html =  { id : 0 ,reactIcon:<FaHtml5  className="stackIcon"/>}
    const java = { id : 1 ,reactIcon:<FaJava className="stackIcon"/>}
    const css = { id : 2 ,reactIcon: <IoLogoCss3 className="stackIcon"/>} 
    const xml  = { id : 3 ,reactIcon:<BsFiletypeXml className="stackIcon"/>}
    const kotlin = { id : 4 ,reactIcon:<SiKotlin className="stackIcon"/>}
    const javascript =  { id : 5 ,reactIcon:<IoLogoJavascript className="stackIcon"/>}
    const react =  { id : 6 ,reactIcon: <FaReact className="stackIcon"/>}
    const firebase =  { id : 7 ,reactIcon:<IoLogoFirebase className="stackIcon"/>}
    const sql = {id : 8 ,reactIcon:<FaDatabase className="stackIcon"/>}
    const typescript = {id : 9 ,reactIcon:<SiTypescript className="stackIcon"/>}
    const nodejs = {id : 10 ,reactIcon:<FaNode className="stackIcon"/>}
    const mongodb = {id : 11 ,reactIcon:<SiMongodb className="stackIcon"/>}
    const aws = {id : 12 ,reactIcon:<FaAws  className="stackIcon"/>}
    const nextjs = {id : 13, reactIcon:<SiNextdotjs  className="stackIcon"/>}
    return (
        <>
        <Particle givenWidth = '100%'/>
        <div className="layer">
        <div className="projects">
            <h3 className="portfolioTitle"> My Personal Projects</h3>

            <div className="portfolio">
                
                <div className="projectCard" data-scroll>
                    <Project 
                        Title="Threads Clone" 
                        description="This is a Threads clone app built with Clerk, MongoDB, and Next.js, enabling users to share posts and engage in discussions." image={threads} link = {"https://github.com/TobiOnibudo/threads"}
                        stack={[nextjs,typescript, html,css,mongodb]} 
                    />
                </div>

                <div className="projectCard" data-scroll>
                    <Project 
                        Title="Ecommerce WebApp" 
                        description="This is an e-commerce website with a catalog for women, men and kids. This allowed various users to browse and purchase products online." image={ecommerce} link = {"https://github.com/TobiOnibudo/Ecommerce"}
                        stack={[typescript,react,html,css,mongodb]} 
                    />
                </div>
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
           
        </div>
        </div>
        </>
    )
}


export default Projects;