import React from "react";
import Btn from "./button";

class WrappedButton extends React.Component {
  render() {
    return (
      <Btn
        label={this.props.label}
        onClick={this.props.onClick}
        toolTip={this.props.toolTip}
        toolTipPos={this.props.toolTipPos}
      ></Btn>
    );
  }
}

export default WrappedButton;
