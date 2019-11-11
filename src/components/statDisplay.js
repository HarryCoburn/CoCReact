import React from "react";
import Stat from "./stat";

class StatDisplay extends React.Component {
  stats = () =>
    this.props.ids.map(stat => {
      let newStat = this.props.stats.byID[stat];

      return (
        <Stat
          key={stat}
          id={stat}
          name={newStat.name}
          value={newStat.value}
          max={newStat.max}
          displayMax={newStat.displayMax}
          arrow={newStat.arrow}
        />
      );
    });

  render() {
    return <>{this.stats()}</>;
  }
}

export default StatDisplay;
