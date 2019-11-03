import React from "react";

class Btn extends React.Component {
  render() {
    return (
      <>
        <button className="button tooltip" onClick={this.props.onClick}>
          {this.props.label}
          <span className="tooltiptext">{this.props.toolTip}</span>
        </button>
      </>
    );
  }
}

export default Btn;
