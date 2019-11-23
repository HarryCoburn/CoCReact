import React from "react";
import store from "../store/store";
import { preparePerk, createPerkList, Perks } from "../actions/Engine";

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false,
      chosenPerk: "Choose A Perk",
      propList: null
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true, propList: createPerkList() }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu(event) {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  handleChange(item) {
    this.setState({ chosenPerk: Perks.properties[item].name });
    preparePerk(item)
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
