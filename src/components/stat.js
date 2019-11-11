import React from "react";

class Stat extends React.Component {
  state = { arrowState: null };

  componentWillUnmount() {
    if (this.updateTimer) {
      clearTimeout(this.updateTimer);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value < this.props.value) {
      this.updateAndNotify("up");
    } else if (prevProps.value > this.props.value) {
      this.updateAndNotify("down");
    }
  }

  updateAndNotify = arrow => {
    if (this.updateTimer) return;
    this.setState({ arrowState: arrow });
    this.updateTimer = setTimeout(() => {
      this.setState({ arrowState: null });
      this.updateTimer = null;
    }, 1000);
  };

  render() {
    return (
      <div key={this.props.name} className="statFrame">
        <div className="statGradient">
          <p className="statLabel">
            {this.props.name}: {this.props.value}{" "}
            {this.props.displayMax && `/ ${this.props.max}`}
          </p>
        </div>
        {this.state.arrowState === null && <div className="statUpDown"></div>}
        {this.state.arrowState === "up" && (
          <div className="statUpDown up"></div>
        )}
        {this.state.arrowState === "down" && (
          <div className="statUpDown down"></div>
        )}
      </div>
    );
  }
}

export default Stat;
