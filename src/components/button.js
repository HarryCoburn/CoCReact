import React from "react";

const Btn = props => (
  <button className="button tooltip" onClick={props.onClick}>
    {props.label}
    {props.toolTip && (
      <span className={`tooltiptext ${props.toolTipPos}`}>{props.toolTip}</span>
    )}
  </button>
);

/*
class Btn extends React.Component {
  render() {
    return (
      <>
        <button className="button tooltip" onClick={this.props.onClick}>
          {this.props.label}
          {this.props.toolTip && (
            <span className={`tooltiptext ${this.props.toolTipPos}`}>
              {this.props.toolTip}
            </span>
          )}
        </button>
      </>
    );
  }
}
*/

export default Btn;
