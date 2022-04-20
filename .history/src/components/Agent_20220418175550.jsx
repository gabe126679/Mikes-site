import React from 'react'
import Agentbox from './Agentbox';
import agentimage1 from '../images/s1.png';

function Agent() {
  return (
    <div className="agent">
        <div className="a-heading">
            <h1>Agents</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel.</p>
        </div>
        <div className="b-container">
            <Agentbox image={agentimage1} name="all"/>
        </div>
    </div>
  )
}

export default Agent;