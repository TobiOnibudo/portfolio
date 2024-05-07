import "../../../Styles/Project.css"

type icon = 
{
    id : number,
    reactIcon : React.ReactNode 
}

type ProjectProps = {
    Title : string;
    description : string;
    image: string;
    stack : Array<icon>;
    link : string
}



function Project ({
    Title ,
    description ,
    image,
    stack,
    link
} : ProjectProps) {
  return (

    <section className="projSec">
        <div className="project">
            <img src={image} alt="Image representing the project" className="projImg" />
            <a className = "link" href={link} target="_blank">
            <div className="projDetails">
                <h4 className="projTitle"> {Title} </h4>
                <div className="projDesc">{description}</div>
                <p className="techStack">Tech Stack</p>
                <div className="stackIcons"> {stack.map((item)=> 
                    {
                        return <div key= {item.id.toString()}  className="stackIcon">{item.reactIcon} </div>
                    })}
                </div>

            </div>  
        <button className="projRepo">View</button> </a>
        
    
        </div>
    </section>
  )
}

export default Project;
