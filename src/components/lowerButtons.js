import React from "react";
import { connect } from "react-redux";
import * as UI from "../actions/UI";
import Btn from "./button";

class ButtonGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: this.props.Buttons.lowerIDs.map(button => {
        if (this.props.Buttons.byID[button] === undefined) {
          return <button key={button} className="blankButton"></button>;
        }
        return (
          <Btn
            key={button}
            onClick={() => this.props.update(this.props.Buttons.byID[button])}
            label={this.props.Buttons.byID[button].label}
          ></Btn>
        );
      })
    };
  }

  render() {
    return (
      <div className="gridContainer">
        <div className="lowerGrid">{this.state.buttons}</div>
      </div>
    );
  }
}

const ButtonFunc = ({ Buttons, update }) => {
  const buttons = Buttons.lowerIDs.map(button => {
    if (Buttons.byID[button] === undefined) {
      return <button key={button} className="blankButton"></button>;
    }
    return (
      <Btn
        key={button}
        onClick={() => update(Buttons.byID[button])}
        label={Buttons.byID[button].label}
      ></Btn>
    );
  });
  return (
    <div className="gridContainer">
      <div className="lowerGrid">{buttons}</div>
    </div>
  );
};

const mapStateToButtonProps = function(state) {
  return {
    Buttons: state.Buttons
  };
};

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

const LowerButtons = connect(
  mapStateToButtonProps,
  mapDispatchToButtonProps
)(ButtonGrid);

export default LowerButtons;
