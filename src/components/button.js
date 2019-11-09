import React from "react";

const Btn = props => (
  <button className="button tooltip" onClick={props.onClick}>
    {props.label}
    {props.toolTip && (
      <span className={`tooltiptext ${props.toolTipPos}`}>{props.toolTip}</span>
    )}
  </button>
);

export default Btn;
