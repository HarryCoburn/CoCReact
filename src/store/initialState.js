// For experimentation
const succ = () => {
  console.log("We did it!")
  const newButtons = [{
    newOutput: `This is the extra new stuff`,
    label: "New shiny label!",
    runFunc: bigSucc,
    newButtons: []      
  }]
  return newButtons 
}
const bigSucc = () => {
  console.log("We really did it!")
  const newButtons = [{
    newOutput: "Hey, the other button works!",
    label: "New shiny shiny label!",
    runFunc: bigSucc,
    newButtons: []
  }]
  return newButtons
}



// And we need an initial state
const initialState = {  
  output: "This is the old stuff...", 
  currButtons: [{    
    label: "Click me",
    newOutput: "This is the new stuff",
    runFunc: succ,    
    },      
    {
      label: "New button",
      newOutput: `This is the extra stuff stuff`,
      runFunc: succ,      
    }],    
}


export default initialState