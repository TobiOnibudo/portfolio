import "./Experience.css"
interface Props{
    source: string;
    title : string;
    company : string;
    dateRange: string; 
}


function Experience({source,title,company,dateRange} : Props){
  return (
    <div className="expBar">
    <img src={source} alt="" className="expBarImg" />
    <div className="expBarText">
        <p className="expTitle">{title}</p>
        <p className="expCompany">{company}</p>
        <p className="expPeriod">{dateRange}</p>
    </div>
    </div>
  )
}

export default Experience;
