import React from "react";
import { connect } from "react-redux";
import ButtonGrid from "./buttonGrid";

class TopMenuClass extends React.Component {
  render() {
    return (
      <div
        className={`menuBar ${this.props.visibility ? "visible" : "invisible"}`}
      >
        <ButtonGrid
          toolTipPos="bottom"
          buttonState={this.props.buttonState}
        ></ButtonGrid>
      </div>
    );
  }
}

const mapStateToButtonProps = function(state) {
  return {
    buttonState: state.upper,
    visibility: state.UI.present.showMenuBar
  };
};

const TopMenu = connect(mapStateToButtonProps)(TopMenuClass);

export default TopMenu;
