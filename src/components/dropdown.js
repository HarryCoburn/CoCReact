import React from "react";
import { connect } from "react-redux";
import Perks from "../symbols/perks";

class _dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false,
      chosenPerk: "Choose A Perk",
      propList: this.props.list
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  handleChange(item) {
    this.setState({ chosenPerk: Perks.properties[item].name });
    this.props.dispatch(this.props.action(item));
  }

  perks() {
    return this.state.propList.map(item => {
      return (
        <li key={item} onClick={() => this.handleChange(item)}>
          {Perks.properties[item].name}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="dropdown">
        <div className="dropbutton" onClick={this.showDropdownMenu}>
          {this.state.chosenPerk}
        </div>

        {this.state.displayMenu ? <ul>{this.perks()}</ul> : null}
      </div>
    );
  }
}

const Dropdown = connect()(_dropdown);

export default Dropdown;
