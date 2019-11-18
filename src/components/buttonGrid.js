import React from "react";
import { connect } from "react-redux";
import WrappedButton from "./buttonWrap.js";
import * as Engine from "../actions/Engine";

class ButtonGridClass extends React.Component {
  buttons = () =>
    this.props.buttonState.IDs.map(button => {
      if (this.props.buttonState.present[button] === undefined) {
        return (
          <button key={button} id={button} className="blankButton"></button>
        );
      }

      let newBtn = this.props.buttonState.present[button];

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

const mapDispatchToButtonProps = dispatch => {
  return {
    update: ({ nextScene = null, p1 = undefined }) => {
      console.log("The next scene is...");
      console.log(nextScene);
      if (nextScene === null) {
        console.log("Something tried to dispatch with no nextScene!");
        return;
      }
      Engine.fetchScene(nextScene, p1);
    }
  };
};

const ButtonGrid = connect(mapDispatchToButtonProps)(ButtonGridClass);

export default ButtonGrid;
