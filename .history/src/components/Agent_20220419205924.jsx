import React from 'react'
import Agentbox from './Agentbox';
import agentimage1 from '../images/s1.png';

function Agent() {
  return (
    <div className="agent">
        <div className="a-heading">
            <h1>Agents</h1>
            <p>Here is a short list of our current team members</p>
        </div>
        <div className="b-container">
            <Agentbox image={agentimage1} name="Mike Melius"/>
            <p>CEO</p>
        </div>
    </div>
  )
}

export default Agent;