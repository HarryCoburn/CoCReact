import React from "react";
import { connect } from "react-redux";
import WrappedButton from "./buttonWrap.js";
import * as UI from "../actions/UI";
import * as Player from "../actions/Player";
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
      if (nextScene !== null) {
        let newScene = Core.fetchScene(nextScene); // Middleware to get the changes?
        console.log(newScene);
        if (newScene === undefined) {
          throw Error("newScene returned undefined");
        }
        let {
          newButtons = {},
          newStats = {},
          newMenus = {},
          actions = null,
          newText = ""
        } = newScene;
        let processedOutput = newText;
        if (actions !== null) {
          actions.forEach(action => {
            dispatch(UI.actionSelect(action));
          });
        }
        dispatch(UI.buttonChange(newButtons)); // Undefined means clear lower menu completely
        dispatch(UI.menuChange(newMenus)); // Undefined will just return state
        dispatch(Player.statChange(newStats));
        dispatch(UI.updateView(processedOutput));
      }
    }
  };
};

const ButtonGrid = connect(
  mapStateToButtonProps,
  mapDispatchToButtonProps
)(ButtonGridClass);

export default ButtonGrid;
