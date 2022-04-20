import React from 'react'
import { Link } from 'react-router-dom'

function Agentbox(props) {
  return (
    <div className="a-box">
        <div className="a-b-img">
            <img src={props.image} alt=""/>
        </div>
        <div className="a-b-text">

            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <Link to="/about"><a href="#" className="agent-btn">Learn More</a></Link>
            <br/>
        </div>
        
    </div>
  )
}

export default Agentbox;