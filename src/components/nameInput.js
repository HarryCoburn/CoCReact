import React from "react";
import store from "../store/store";
import { setPlayerName } from "../actions/Player";

export default class NameInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value)
    store.dispatch(setPlayerName(e.target.value || "Timothy"));
  }
  render() {
    return <input onChange={this.handleChange}></input>;
  }
}
