import initialState from '../store/initialState'
import * as UI from '../actions/UI'

// And an initial reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case UI.UPDATE:
      return Object.assign({}, state, {
        output: action.newText
      })
    case UI.BUTTON_CHANGE:
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

export default rootReducer