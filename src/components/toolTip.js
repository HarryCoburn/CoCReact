import React from "react";

class ToolTip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { state } = this;

    return (
      <div id="tooltip" className="on right">
        <div className="tooltip-arrow"></div>
        <div className="tooltip-inner">ToolTip Component</div>
      </div>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}
