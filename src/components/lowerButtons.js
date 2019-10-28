import React from 'react'
import {connect} from 'react-redux'
import * as UI from '../actions/UI'

const ButtonFunc = ({ currButtons, payload, update }) => {
  return currButtons.map((button, index) => {
    return <button key={index} onClick={() => update(button.currFunc, payload)}>{button.label}</button>
  })  
}  

const mapStateToButtonProps = function(state) {
  return {
    currButtons: state.currButtons,
    payload: state.payload,
  }
}

const mapDispatchToButtonProps = dispatch => {
  return {
    update: (currFunc, {newOutput, newLabel, newFunc}) => {
      currFunc();
      dispatch(UI.updateView(newOutput))
      dispatch(UI.buttonChange(newLabel, newFunc))
    }
  }
}

const LowerButtons = connect(mapStateToButtonProps, mapDispatchToButtonProps)(ButtonFunc)

export default LowerButtons