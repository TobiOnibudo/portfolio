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
    <div>
        <img src={image} alt="Image representing the project" className="projImg" />
        <h4 className="projTitle"> {Title} </h4>
        <p className="projDesc">{description}</p>
        
        <div>{stack.map((item)=> 
        {
            return <div key= {item.id.toString()} >{item.reactIcon} </div>
        })}</div>
        <a href={link} target="_blank"> <button className="projRepo">View</button> </a>
    </div>
  )
};

export default Project;
