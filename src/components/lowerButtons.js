import React from "react";
import ButtonGrid from "./buttonGrid";
import { connect } from "react-redux";

class LowerButtonsClass extends React.Component {
  render() {
    return (
      <div className="gridContainer">
        <div className="lowerGrid">
          <ButtonGrid
            toolTipPos="top"
            buttonState={this.props.buttonState}
          ></ButtonGrid>
        </div>
      </div>
    );
  }
}

const mapStateToButtonProps = function(state) {
  return {
    buttonState: state.lower
  };
};

const LowerButtons = connect(mapStateToButtonProps)(LowerButtonsClass);

export default LowerButtons;
