import React from "react";
import Btn from "./button";
import * as UI from "../actions/UI";
import { connect } from "react-redux";

class WrappedButtonClass extends React.Component {
  render() {
    return (
      <Btn
        label={this.props.button.label}
        onClick={() => this.props.update(this.props.button)}
        toolTip={this.props.button.toolTip}
        toolTipPos={this.props.toolTipPos}
      ></Btn>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const button = state.Buttons.byID[id];
  return { button };
}

const mapDispatchToButtonProps = dispatch => {
  return {
    update: ({ newOutput, nextScene }) => {
      if (nextScene) {
        // Undefined means just update the output
        let { newButtons, newStats } = nextScene();
        if (newStats !== undefined) {
          dispatch(UI.statChange(newStats));
        }
        dispatch(UI.buttonChange(newButtons)); // Undefined means clear lower menu completely
      }
      if (newOutput) {
        dispatch(UI.updateView(newOutput));
      }
    }
  };
};

const WrappedButton = connect(
  mapStateToProps,
  mapDispatchToButtonProps
)(WrappedButtonClass);
export default WrappedButton;
