function Footer(props : {text: string})
{
    return (
        <div className="footer">
            {props.text}

            <div className="links">
                {/* linkedin */}
                <img src="" alt="" className="link" /> 
                {/* github */}
                <img src="" alt="" className="link" />
                {/* resume */}
                <img src="" alt="" className="link" />
                {/* email */}
                <img src="" alt="" className="link" />
            </div>
        </div>
    )
}


export default Footer