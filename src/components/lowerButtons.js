import React from "react";
import { connect } from "react-redux";

import WrappedButton from "./buttonWrap.js";

class ButtonGrid extends React.Component {
  render() {
    const buttons = this.props.Buttons.lowerIDs.map(button => {
      if (this.props.Buttons.byID[button] === undefined) {
        return (
          <button key={button} id={button} className="blankButton"></button>
        );
      }
      return <WrappedButton key={button} id={button} />;
    });

    return (
      <div className="gridContainer">
        <div className="lowerGrid">{buttons}</div>
      </div>
    );
  }
}

const mapStateToButtonProps = function(state) {
  return {
    Buttons: state.Buttons
  };
};

const LowerButtons = connect(mapStateToButtonProps)(ButtonGrid);

export default LowerButtons;
