import React from "react";
import { connect } from "react-redux";
import WrappedButton from "./buttonWrap.js";
import * as Core from "../actions/Core";

class ButtonGridClass extends React.Component {
  buttons = () =>
    this.props.IDs.map(button => {
      if (this.props.buttons.byID[button] === undefined) {
        return (
          <button key={button} id={button} className="blankButton"></button>
        );
      }

      let newBtn = this.props.buttons.byID[button];

      return (
        <WrappedButton
          key={button}
          id={button}
          toolTip={newBtn.toolTip}
          toolTipPos={this.props.toolTipPos}
          label={newBtn.label}
          onClick={() => this.props.update(newBtn)}
        />
      );
    });

  render() {
    return <>{this.buttons()}</>;
  }
}

const mapStateToButtonProps = function(state) {
  return {
    buttons: state.buttons
  };
};

const mapDispatchToButtonProps = dispatch => {
  return {
    update: ({ nextScene = null }) => {
      console.log("The next scene is...");
      console.log(nextScene);
      if (nextScene === null) {
        console.log("Something tried to dispatch with no nextScene!");
        return;
      }
      Core.fetchScene(nextScene);
    }
  };
};

const ButtonGrid = connect(
  mapStateToButtonProps,
  mapDispatchToButtonProps
)(ButtonGridClass);

export default ButtonGrid;
