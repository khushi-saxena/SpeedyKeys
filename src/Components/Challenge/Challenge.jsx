import React from 'react';
import "./Challenge.css"
import TestContainer from '../TestContainer/TestContainer';

const Challenge = () => {
  return (
    <div className="challenge-container">
        <h1 data-aos="fade-down"  className='Challenge-header'>
            Take Speed Test Now!
        </h1>
        <TestContainer words={4} charachters={14}wpm={20}/>
    </div>
  )
}

export default Challenge