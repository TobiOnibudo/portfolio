import "./About.css"
import bioImage from "../../../img/bioImage.jpeg"
import Particle from "@/assets/components/particles"

function About()
{
    return (
      <>
      <Particle givenWidth = '100%'/>
      <div className="layer">
        <section>          
          <div className="bio">
          <img src={bioImage} alt="Picture of Tobi Onibudo" className="bioImg" />
            <h3 className="bioTitle">
              Getting to know me 
            </h3>
            <p className="bioDesc">
              Hello! I'm Tobi Onibudo, a software engineer at CPP Investments (CPPIB) in Toronto.
              I studied Computer Science and Economics at Dalhousie University, including co-op roles in
              fintech, SaaS, and cloud. Previously, I was a Student Ambassador at ShiftKey Labs and
              Vice President External for the Dalhousie Computer Science Society; I'm also a member
              of ColorStack. I care about building resilient software and growing with the people around
              me—feel free to connect on{" "}
              <a
                className="bioLink"
                href="https://www.linkedin.com/in/tobi-onibudo/?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>

        </section>
        </div>
        </>
    )
}


export default About;