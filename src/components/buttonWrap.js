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
    update: ({ newOutput, runFunc }) => {
      let { newButtons, newStats } = runFunc();
      if (newStats !== undefined) {
        dispatch(UI.statChange(newStats));
      }
      if (newButtons !== undefined) {
        dispatch(UI.buttonChange(newButtons));
      }
      dispatch(UI.updateView(newOutput));
    }
  };
};

const WrappedButton = connect(
  mapStateToProps,
  mapDispatchToButtonProps
)(WrappedButtonClass);
export default WrappedButton;
