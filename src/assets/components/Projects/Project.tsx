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

    <article className="project">
        <a
            className="projectCardLink"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${Title} — open repository`}
        >
            <div className="projMedia">
                <img src={image} alt={`${Title} preview`} className="projImg" />
            </div>
            <div className="projDetails">
                <h4 className="projTitle">{Title}</h4>
                <div className="projDesc">{description}</div>
                <p className="techStack">Tech Stack</p>
                <div className="stackIcons">
                    {stack.map((item)=> (
                        <div key={item.id.toString()} className="stackIcon">{item.reactIcon}</div>
                    ))}
                </div>
                <span className="projRepo">View project</span>
            </div>
        </a>
    </article>
  )
}

export default Project;
