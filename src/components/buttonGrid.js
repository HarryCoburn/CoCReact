import React from "react";
import { connect } from "react-redux";

import WrappedButton from "./buttonWrap.js";

class ButtonGridClass extends React.Component {
  render() {
    console.log(this.props);
    const buttons = this.props.IDs.map(button => {
      if (this.props.Buttons.byID[button] === undefined) {
        return (
          <button key={button} id={button} className="blankButton"></button>
        );
      }
      return (
        <WrappedButton
          key={button}
          id={button}
          toolTipPos={this.props.toolTipPos}
        />
      );
    });

    return <>{buttons}</>;
  }
}

const mapStateToButtonProps = function(state) {
  return {
    Buttons: state.Buttons
  };
};

const ButtonGrid = connect(mapStateToButtonProps)(ButtonGridClass);

export default ButtonGrid;
