import React from "react";
import StatDisplay from "./statDisplay";
import { connect } from "react-redux";

class StatBarContainer extends React.Component {
  render() {
    return (
      <div className="statBar">
        <h2>Name</h2>
        <h2>Core Stats</h2>
        <StatDisplay stats={this.props.currStats} />
      </div>
    );
  }
}

/*
<h2>Combat Stats</h2>
        <StatDisplay stats={this.props.currComStats} />
        <h2>Advancement</h2>
        <StatDisplay stats={this.props.currAdvStats} />
        */

const mapStateToButtonProps = function(state) {
  return {
    currStats: state.statsUI,
    currComStats: state.currComStats,
    currAdvStats: state.currAdvStats
  };
};

const StatBar = connect(mapStateToButtonProps)(StatBarContainer);

export default StatBar;
