import {createStore} from 'redux'
import React from 'react'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

/*
User clicks a button...
Action to update output is dispatched with newOutput as payload
Reducer evaluates update output action and determines new state
new state information arrives at component via connect and triggers re-render
*/

const succ = () => console.log("We did it!")
const bigSucc = () => console.log("We really did it!")

// Here are our actions
const UPDATE = 'UPDATE'
const BUTTON_CHANGE = 'BUTTON_CHANGE'

function updateView(newText) {
  return {
    type: UPDATE,
    newText
  }
}

function buttonChange(newLabel, newFunc) {
  return {
    type: BUTTON_CHANGE,
    payload: {
      newLabel: newLabel,
      newFunc: newFunc,
    }
  }
}

// And we need an initial state
const initialState = {
  output: "This is the old stuff...", 
  currButtons: [{    
    label: "Click me",
    currFunc: succ,
  },{
    label: "New button",
    currFunc: bigSucc,
  }],  
  payload: {
    newOutput: "This is the new stuff",
    newLabel: "New shiny label!",
    newFunc: bigSucc,      
  },  
  }

// And an initial reducer
function buttonApp(state = initialState, action) {
  switch (action.type) {
    case UPDATE:
      return Object.assign({}, state, {
        output: action.newText
      })
    case BUTTON_CHANGE:
    return Object.assign({}, state, {
      currButtons: [{
        label: action.payload.newLabel,
        currFunc: action.payload.newFunc
      }]
    })
    default:
      return state
  }
}

// Now we make a store

const store = createStore(buttonApp, initialState)

// And now we need to made react components that hook into this.
// We need a div that shows the output
// We also need a button that takes a callback
// And we need an app that holds everything else

// The output div uses output to show the text. We map props to it and connect it up.

const ViewFunc = ({output}) => <div>{output}</div>

const mapStateToViewProps = function(state) {
  return {
    output: state.output    
  }
}

const View = connect(mapStateToViewProps)(ViewFunc)

// This is the button. We map props and dispatch stuff to it and connect it up.

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
      dispatch(updateView(newOutput))
      dispatch(buttonChange(newLabel, newFunc))
    }
  }
}

const Button = connect(mapStateToButtonProps, mapDispatchToButtonProps)(ButtonFunc)

// Now we make the AppRootComponent...

const AppRootComponent = () => (
  <div>
    <View />
    <Button />
  </div>
)

// And then we render it

render(
  <Provider store={store}>
    <AppRootComponent />
  </Provider>
, document.getElementById('root'));

// And it works right now! I see my defaults.