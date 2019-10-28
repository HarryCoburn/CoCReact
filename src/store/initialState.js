// For experimentation
const succ = () => console.log("We did it!")
const bigSucc = () => console.log("We really did it!")

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
    newOutput: `This is the new stuff`,
    newLabel: "New shiny label!",
    newFunc: bigSucc,      
  },  
  }


export default initialState