// Here are our actions
export const UPDATE = 'UPDATE'
export const BUTTON_CHANGE = 'BUTTON_CHANGE'

export function updateView(newText) {
  return {
    type: UPDATE,
    newText
  }
}

export function buttonChange(newLabel, newFunc) {
  return {
    type: BUTTON_CHANGE,
    payload: {
      newLabel: newLabel,
      newFunc: newFunc,
    }
  }
}
