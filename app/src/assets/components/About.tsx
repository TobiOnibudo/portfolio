import "../../Styles/About.css"
import AppDev from "../../img/app-dev.png"
import CloudComputing from "../../img/cloud-computing.avif";
import ML from "../../img/ml.png"
import WebDev from "../../img/web-dev.png"
function About()
{

    return (
        <section>

          {/*TODO Give an intro to who you are and why you decided to hop into the tech industry */}
          <h3>
            Getting to know me 
          </h3>
            <p> 

            </p>

           
            <section className="sectors" >
              <span className="skillTitle"> What I do </span>
              <span className="skillDesc"> 
                I am a passionate tech enthusiast and Software Engineer.
                I have gained experience with several programming languages and frame works over the years.
                I am well versed in Python, JavaScript, Kotlin and Java just to name a few of them. 
                I continously learn frameworks that are built on them like React, Vue.js, Django and Flask  
              </span>

              <div className="skillBars">   
                <div className="skillBar">
                  <img src={AppDev} alt="" className="skillBarImg" />
                  <div className="skillBarText">
                    <h2>Mobile App Development</h2>
                    <p> I am experienced in making mobile applications with a focus in the 
                      android ecosystem.
                      I am hoping to expand into the IOS ecosystem in the future </p>
                  </div>
                </div>

                <div className="skillBar">
                  <img src={WebDev} alt="" className="skillBarImg" />
                  <div className="skillBarText">
                    <h2>Web App Development</h2>
                    <p>I have made a few web Apps with React and Node.js.
                       I am always looking to grow in this space and gain more experience 
                       with the numerous frameworks and tools available. </p>
                  </div>
                </div>

                <div className="skillBar">
                  <img src={CloudComputing} alt=""  className="skillBarImg externalImg" />
                  <div className="skillBarText">
                    <h2>Cloud Engineering</h2>
                    <p> I am passionate about utilizing the Cloud to build cost effective, resilient and secure software solutions .
                      I also currently possess three Cloud computing certifications and hope to increase this count. </p>
                  </div>
                </div>

              </div>

            </section> 
            

            <section className="sectors" >
              <span className="skillTitle"> Interests</span>
              <span className="skillDesc"> These are topics or areas in the industry 
              I am currently learning or building my skills on. I may also include skills I think will be incredibly useful to anyone.</span>

              <div className="skillBars">
                <div className="skillBar">
                  <img src={ML} alt="" className="skillBarImg externalImg" />
                  <div className="skillBarText">
                    <h2>Machine Learning</h2>
                    <p>After taking  CSCI 3151 , the Intro to Machine Learning course, at Dalhousie University.
                    I  have garnered great interest in to this space and I hope to keep growing and increasing
                    in knowledge over the next few months. So stay tuned  </p>
                  </div>
                </div>
                

                
              </div>
              </section>
        </section>
    )
}


export default About;