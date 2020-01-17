import React from 'react';

const Display = props => {
  return (
    <div className="display">
      <div>
        <div className="balls">
          <h2>Balls</h2>
          <h3>{props.balls}</h3>
        </div>
        <div className="strikes">
          <h2>Strikes</h2>
          <h3>{props.strikes}</h3>
        </div>
      </div>
    </div>
  )
}

export default Display;