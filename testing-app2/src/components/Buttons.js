import React from 'react';

const Buttons = props => {

  const ballHandler = () => {
    if (props.balls < 3) {
      props.setBalls(props.balls + 1)
    } else {
      props.setBalls(0)
      props.setStrikes(0)
    }
  }

  const strikeHandler = () => {
    if (props.strikes < 2) {
      props.setStrikes(props.strikes + 1)
    } else {
      props.setStrikes(0)
      props.setBalls(0)
    }
  }

  const foulHandler = () => {
    if (props.strikes < 2) {
      props.setStrikes(props.strikes + 1)
    }
  }

  const outHandler = () => {
    props.setStrikes(0)
    props.setBalls(0)
  }

  return (
    <div className="buttons">
      <div className="button-group">
        <button onClick={ballHandler}>Ball</button>
        <button onClick={strikeHandler}>Strike</button>
        <button onClick={foulHandler}>Foul</button>
      </div>
      <div className="button-group">
        <button onClick={outHandler}>Out</button>
        <button onClick={outHandler}>Hit</button>
      </div>
    </div>
  )
}

export default Buttons;