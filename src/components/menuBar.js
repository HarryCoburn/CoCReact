import React from "react";
import { connect } from "react-redux";
import ButtonGrid from "./buttonGrid";

class TopMenuClass extends React.Component {
  render() {
    return (
      <div
        className={`menuBar ${this.props.visibility ? "visible" : "invisible"}`}
      >
        <ButtonGrid toolTipPos="bottom" IDs={this.props.IDs}></ButtonGrid>
      </div>
    );
  }
}

const mapStateToButtonProps = function(state) {
  return {
    IDs: state.Buttons.upperIDs,
    visibility: state.UI.showMenuBar
  };
};

const TopMenu = connect(mapStateToButtonProps)(TopMenuClass);

export default TopMenu;
