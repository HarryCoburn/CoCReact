import React from "react";

class StatDisplay extends React.Component {
  render() {
    return this.props.stats.allIDs.map(stat => (
      <div key={this.props.stats.byID[stat].name} className="statFrame">
        <div className="statGradient">
          <p className="statLabel">
            {this.props.stats.byID[stat].name}:{" "}
            {this.props.stats.byID[stat].value}
          </p>
        </div>
      </div>
    ));
  }
}

export default StatDisplay;
