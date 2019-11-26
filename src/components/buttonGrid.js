import React from "react";
import { connect } from "react-redux";
import WrappedButton from "./buttonWrap.js";
import * as Engine from "../actions/Engine";

class ButtonGridClass extends React.Component {
  buttons = () => {
    let end = [];
    let buttonArr = this.props.buttonState.present;
    // Forced to use for loop due to sparse arrays
    for (let i = 0, n = this.props.buttonState.maxButtons; i < n; ++i) {
      if (!(i in buttonArr) || !Object.keys(buttonArr[i]).length) {
        end.push(<button key={i} id={i} className="blankButton"></button>);
      } else {
        end.push(
          <WrappedButton
            key={i}
            id={i}
            toolTip={buttonArr[i].toolTip}
            toolTipPos={this.props.toolTipPos}
            label={buttonArr[i].label}
            onClick={() => this.props.update(buttonArr[i])}
          />
        );
      }
    }
    return end;
  };

  render() {
    return <>{this.buttons()}</>;
  }
}

const mapDispatchToButtonProps = dispatch => {
  return {
    update: ({ nextScene = null, params = undefined }) => {
      if (nextScene === null) {
        console.log("Something tried to dispatch with no nextScene!");
        return;
      }
      Engine.fetchScene(nextScene, params);
    }
  };
};

const ButtonGrid = connect(mapDispatchToButtonProps)(ButtonGridClass);

export default ButtonGrid;
