import React from 'react';

const Button = (props) => {
return <button id={props.htmlId} className={props.htmlClass} onClick={props.jsFunction}>{props.disValue}</button>
}

export default Button;