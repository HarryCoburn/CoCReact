import React from "react";

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

export default Btn;
