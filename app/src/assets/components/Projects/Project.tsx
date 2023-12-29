import "../../../Styles/Project.css"

type ProjectProps = {
    Title : String;
    description : String;
    image: string;
}


function Project(props : ProjectProps){
  return (
    <div>
        <img src={props.image} alt="Image representing the project" className="projImg" />
        <p className="projTitle"> {props.Title} </p>
        <p className="projDesc">{props.description}</p>
        <button className="projRepo">View</button>
    </div>
  )
};

export default Project;
