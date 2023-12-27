import "../../Styles/About.css"
import AppDev from "../../../public/img/app-dev.png"
import CloudComputing from "../../../public/img/cloud-computing.jpg";
import ML from "../../../public/img/ml.png"
import WebDev from "../../../public/img/web-dev.png"
function About()
{

    return (
        <section>

          {/* Give an intro to who you are  */}
          <h3>
            Getting to know me 
          </h3>
            <p> 

            </p>

            {/* TODO */}
            {/* Fill in content required for skills */}
            <section id="skills" >
              <span className="skillTitle"> What I do </span>
              <span className="skillDesc"> I am a passionate tech enthusiast and Software Engineer. 
              I have gained experience with several programming languages and frame works over the years.
              I am well versed in Python, JavaScript, Kotlin and Java just to name a few of them. 
              I continously learn frameworks that are built on them like React, Vue.js, Django and Flask  </span>

              <div className="skillBars">
                <div className="skillBar">
                  <img src="" alt="" className="skillBarImg" />
                  <div className="skillBarText">
                    <h2></h2>
                    <p></p>
                  </div>
                </div>
                
                <div className="skillBar">
                  <img src={AppDev} alt="" className="skillBarImg" />
                  <div className="skillBarText">
                    <h2>Mobile App Development</h2>
                    <p> I am experienced in making mobile applications with a focus in the 
                      android ecosystem.I am hoping to expand into the IOS ecosystem in the future </p>
                  </div>
                </div>

                <div className="skillBar">
                  <img src={WebDev} alt="" className="skillBarImg" />
                  <div className="skillBarText">
                    <h2>Web App Development</h2>
                    <p>I have made a few web Apps with React and Node.js.
                       I am always looking to grow in this space and gain more experience with the numerous frameworks and tools available </p>
                  </div>
                </div>

                <div className="skillBar">
                  <img src={CloudComputing} alt="" className="skillBarImg" />
                  <div className="skillBarText">
                    <h2>Cloud Engineering</h2>
                    <p>I gained a lot of experience deploying and managing resources in the cloud during my time at NorthBay solutions. 
                      I am passionate about utilizing the Cloud to build cost effective, resilient and secure software solutions .
                      I currently possess three Cloud computing certifications. </p>
                  </div>
                </div>

              </div>

            </section> 
            
            {/* TODO Fill in content required for interests */}
            {/*  */}
            <section id="skills" >
              <span className="skillTitle"> What I do </span>
              <span className="skillDesc"> This is a section on the topics or areas in the industry I am currently learning or building my skills on .</span>

              <div className="skillBars">
                <div className="skillBar">
                  <img src={ML} alt="" className="skillBarImg" />
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