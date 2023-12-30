import "../../../Styles/Project.css"

type icon = 
{
    id : Number,
    reactIcon : React.ReactNode 
}

type ProjectProps = {
    Title : String;
    description : String;
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
    <div className="project">
        <img src={image} alt="Image representing the project" className="projImg" />
        <div className="projDetails">
        <h4 className="projTitle"> {Title} </h4>
            <p className="projDesc">{description}</p>
            <div className="stackIcons"> {stack.map((item)=> 
            {
                return <div key= {item.id.toString()} >{item.reactIcon} </div>
            })}</div>
            <a className = "link" href={link} target="_blank"> <button className="projRepo">View</button> </a>
        </div>
   
    </div>
  )
};

export default Project;
