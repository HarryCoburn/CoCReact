import React from "react";
import StatDisplay from "./statDisplay";
import TimeDisplay from "./timeDisplay";
import { SpriteDisplay } from "./spriteDisplay";
import { connect } from "react-redux";

class StatBarContainer extends React.Component {
  render() {
    return (
      <div
        className={`statBar ${this.props.visibility ? "visible" : "invisible"}`}
      >
        <h2>Name</h2>
        <h2>Core Stats</h2>
        <StatDisplay
          stats={this.props.newStats}
          ids={this.props.newStats.coreIDs}
        />
        <h2>Combat Stats</h2>
        <StatDisplay
          stats={this.props.newStats}
          ids={this.props.newStats.combatIDs}
        />
        <h2>Advancement</h2>
        <StatDisplay
          stats={this.props.newStats}
          ids={this.props.newStats.advIDs}
        />
        <TimeDisplay />
        <SpriteDisplay />
      </div>
    );
  }
}

const mapStateToButtonProps = function(state) {
  return {
    newStats: state.statsUI,
    visibility: state.UI.showStats
  };
};

const StatBar = connect(mapStateToButtonProps)(StatBarContainer);

export default StatBar;
