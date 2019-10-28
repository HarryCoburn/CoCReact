import React from 'react'
import {connect} from 'react-redux'
import * as UI from '../actions/UI'

const ButtonFunc = ({ currButtons, update }) => {  
  return currButtons.map((button, index) => {
    return <button key={index} onClick={() => update(button)}>{button.label}</button>
  })  
}  

const mapStateToButtonProps = function(state) {
  return {
    currButtons: state.currButtons,    
  }
}

const mapDispatchToButtonProps = dispatch => {
  return {
    update: ({newOutput, runFunc}) => {
      let newButtons = runFunc();
      dispatch(UI.updateView(newOutput))
      dispatch(UI.buttonChange(newButtons))
    }
  }
}

const LowerButtons = connect(mapStateToButtonProps, mapDispatchToButtonProps)(ButtonFunc)

export default LowerButtons