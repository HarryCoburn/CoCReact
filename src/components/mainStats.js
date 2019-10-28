import React from "react";

class MainStats extends React.Component {
  render() {
    return this.props.stats.map(stat => (
      <div key={stat.name} className="statFrame">
        <div className="statGradient">
          <p className="statLabel">
            {stat.name}: {stat.value}
          </p>
        </div>
      </div>
    ));
  }
}

export default MainStats;
