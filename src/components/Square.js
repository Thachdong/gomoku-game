import React from 'react';
import '../App.css';

export default function Square(props) {
  return (
    <td 
      className="square"
      onClick={props.handleClick}  
    >
      {props.square}
    </td>
  )
}
