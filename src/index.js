import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import store from './store/store';
import AppRootComponent from './components/appRoot'

/*
User clicks a button...
Action to update output is dispatched with newOutput as payload
Reducer evaluates update output action and determines new state
new state information arrives at component via connect and triggers re-render
*/

// And now we need to made react components that hook into this.
// We need a div that shows the output
// We also need a button that takes a callback
// And we need an app that holds everything else

// The output div uses output to show the text. We map props to it and connect it up.

// This is the button. We map props and dispatch stuff to it and connect it up.

// Now we make the AppRootComponent...

// And then we render it

render(
  <Provider store={store}>
    <AppRootComponent id="game"/>
  </Provider>
, document.getElementById('root'));

// And it works right now! I see my defaults.