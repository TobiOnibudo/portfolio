import "../../Styles/Works.css"
import Book from "../../img/Book-project.jpg"
import Keeper from "../../img/Google notes-project.png"
import Blog from "../../img/Blog-website.png"
function Works(){

  return (
    <section id="works">
      <h2 className="worksTitle"> My Portfolio </h2> 
        <span className="worksDesc">This is just a  glimpse of the side and passion projects 
        I have made through out my journey as a software engineer.
        Please check out the Portfolio page to view more
        </span>
        <div className="worksImgs">
            <img src={Book} alt="" className="worksImg" />
            <img src={Keeper} alt="" className="worksImg" />
            <img src={Blog} alt="" className="worksImg" />
        </div>
    </section>
  )
};

export default Works;
