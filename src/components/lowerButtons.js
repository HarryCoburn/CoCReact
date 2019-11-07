import React from "react";
import ButtonGrid from "./buttonGrid";
import { connect } from "react-redux";

class LowerButtonsClass extends React.Component {
  render() {
    return (
      <div className="gridContainer">
        <div className="lowerGrid">
          <ButtonGrid toolTipPos="top" IDs={this.props.IDs}></ButtonGrid>
        </div>
      </div>
    );
  }
}

const mapStateToButtonProps = function(state) {
  return {
    IDs: state.buttons.lowerIDs
  };
};

const LowerButtons = connect(mapStateToButtonProps)(LowerButtonsClass);

export default LowerButtons;
