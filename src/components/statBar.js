import React from "react";
import MainStats from "./mainStats";
import { connect } from "react-redux";

class StatBarContainer extends React.Component {
  render() {
    return (
      <div className="statBar">
        <h2>Name</h2>
        <h2>Core Stats</h2>
        <MainStats stats={this.props.currStats}></MainStats>
        <h2>Combat Stats</h2>
        <MainStats stats={this.props.currComStats}></MainStats>
        <h2>Advancement</h2>
        <MainStats stats={this.props.currAdvStats}></MainStats>
      </div>
    );
  }
}

const mapStateToButtonProps = function(state) {
  return {
    currStats: state.currStats,
    currComStats: state.currComStats,
    currAdvStats: state.currAdvStats
  };
};

const StatBar = connect(mapStateToButtonProps)(StatBarContainer);

export default StatBar;
