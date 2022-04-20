import React from 'react'
import { Link } from 'react-router-dom'

function Agentbox(props) {
  return (
    <div className="a-box">
        <div className="a-b-img">
            <img src={props.image} alt=""/>
        </div>
        <div className="a-b-text">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <Link to="/about"><a href="#" className="agent-btn">Learn More</a></Link>
            <br/>
        </div>
        
    </div>
  )
}

export default Agentbox;