import React from "react";

class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false
    };
  }

  render() {
    return (
      <button className="button" onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}

export default Btn;
