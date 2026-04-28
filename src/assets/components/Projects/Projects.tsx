import "../../../Styles/Projects.css"
import Project from "./Project";
import book from "../../../img/Book-img.png"
import Blog from "../../../img/Blog-img.png"
import threads from "../../../img/threads.webp"
import ecommerce from "../../../img/eCommerce-logo.jpg"
import vayroLogo from "../../../img/vayro-logo.png"
import cartcloudLogo from "../../../img/cartcloud-logo.png"
import dalLogo from "../../../img/dal-css-logo.png"
import mlHero from "../../../img/ml.png"
import cloudHero from "../../../img/cloud-computing.jpg"
import { FaHtml5, FaJava, FaNode } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoCss3, IoLogoFirebase } from "react-icons/io5";
import { BsFiletypeXml } from "react-icons/bs";
import { SiKotlin, SiTypescript, SiMongodb, SiNextdotjs, SiGo, SiPython, SiExpo } from "react-icons/si";
import { FaReact, FaDatabase } from "react-icons/fa";
import Particle from "@/assets/components/particles"

function Projects() {
    const html = { id: 0, reactIcon: <FaHtml5 className="stackIcon" /> }
    const java = { id: 1, reactIcon: <FaJava className="stackIcon" /> }
    const css = { id: 2, reactIcon: <IoLogoCss3 className="stackIcon" /> }
    const xml = { id: 3, reactIcon: <BsFiletypeXml className="stackIcon" /> }
    const kotlin = { id: 4, reactIcon: <SiKotlin className="stackIcon" /> }
    const javascript = { id: 5, reactIcon: <IoLogoJavascript className="stackIcon" /> }
    const react = { id: 6, reactIcon: <FaReact className="stackIcon" /> }
    const firebase = { id: 7, reactIcon: <IoLogoFirebase className="stackIcon" /> }
    const sql = { id: 8, reactIcon: <FaDatabase className="stackIcon" /> }
    const typescript = { id: 9, reactIcon: <SiTypescript className="stackIcon" /> }
    const nodejs = { id: 10, reactIcon: <FaNode className="stackIcon" /> }
    const mongodb = { id: 11, reactIcon: <SiMongodb className="stackIcon" /> }
    const nextjs = { id: 13, reactIcon: <SiNextdotjs className="stackIcon" /> }
    const golang = { id: 14, reactIcon: <SiGo className="stackIcon" /> }
    const python = { id: 15, reactIcon: <SiPython className="stackIcon" /> }
    const expo = { id: 16, reactIcon: <SiExpo className="stackIcon" /> }
    return (
        <>
            <Particle givenWidth='100%' />
            <div className="layer">
                <div className="projects">
                    <h3 className="portfolioTitle"> My Personal Projects</h3>

                    <div className="portfolio">

                        <div className="projectCard" data-scroll>
                            <Project
                                Title="Threads Clone"
                                description="This is a Threads clone app built with Clerk, MongoDB, and Next.js, enabling users to share posts and engage in discussions." image={threads} link={"https://github.com/TobiOnibudo/threads"}
                                stack={[nextjs, typescript, html, css, mongodb]}
                            />
                        </div>

                        <div className="projectCard" data-scroll>
                            <Project
                                Title="Atlantic AI Summit — HealthByte (1st place)"
                                description="60-hour healthcare AI challenge: dual LLM agents (persona + editor) with a reinforcement loop to model how audiences react to health articles and refine messaging. Includes a live analytics dashboard."
                                image={mlHero}
                                link={"https://github.com/TobiOnibudo/atlantic-ai-conference-hackathon"}
                                stack={[nextjs, typescript, react, css, python]}
                            />
                        </div>

                        <div className="projectCard" data-scroll>
                            <Project
                                Title="Varyo"
                                description="Expo mobile marketplace for pricing and selling household items when moving: listings, buyer–seller chat, AI-assisted price suggestions, and location-aware discovery."
                                image={vayroLogo}
                                link={"https://github.com/TobiOnibudo/vayro"}
                                stack={[typescript, react, expo, firebase, html, css]}
                            />
                        </div>

                        <div className="projectCard" data-scroll>
                            <Project
                                Title="CartCloud"
                                description="Full-stack marketplace so shoppers buy from many vendors in one flow and small sellers get listings, checkout, and order tools. Live demo on Netlify with a separate Node backend."
                                image={cartcloudLogo}
                                link={"https://github.com/TobiOnibudo/cartcloud"}
                                stack={[typescript, react, html, css, mongodb, nodejs]}
                            />
                        </div>

                        <div className="projectCard" data-scroll>
                            <Project
                                Title="Ecommerce WebApp"
                                description="This is an e-commerce website with a catalog for women, men and kids. This allowed various users to browse and purchase products online." image={ecommerce} link={"https://github.com/TobiOnibudo/Ecommerce"}
                                stack={[typescript, react, html, css, mongodb]}
                            />
                        </div>
                        <div className="projectCard" data-scroll>
                            <Project
                                Title="Personal Library"
                                description="This is a personal book library made for
                        users to keep track of books they are interested in and have read. This would be really
                        useful for fellow avid readers as it can be quite hard to keep track of hardcopy books 
                        in their library." image={book} link={"https://github.com/TobiOnibudo/Book"}
                                stack={[kotlin, java, xml, sql]}
                            />
                        </div>

                        <div className="projectCard">
                            <Project
                                Title="Blog Website "
                                description="This was made to create a blog in which a community of friends would be able to blog on several ideas with out a limit on the word count. 
                        This can be seen as a substitute for X (formerly known as twitter) but only a few can put out content."
                                image={Blog} link={"https://github.com/TobiOnibudo/BlogWebsite"}
                                stack={[html, css, javascript, nodejs, mongodb]}
                            />
                        </div>

                        <div className="projectCard">
                            <Project
                                Title="Ollama non-sudo installer"
                                description="Go CLI that installs Ollama into user-space on Windows, Linux, and macOS (no admin). Documents build steps, PATH setup, usage, uninstall, and troubleshooting."
                                image={cloudHero}
                                link={"https://github.com/TobiOnibudo/ollama-non-sudo-installer"}
                                stack={[golang]}
                            />
                        </div>

                        <div className="projectCard">
                            <Project
                                Title="Daltweets"
                                description="Java-based Twitter-style client and API for the Dalhousie community (multi-module repo with app and backend). Repository README is still minimal; see code on the dev branch."
                                image={dalLogo}
                                link={"https://github.com/TobiOnibudo/Daltweets"}
                                stack={[java, xml, sql]}
                            />
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}


export default Projects;
