const initialState = { numberOfPresents: 0 };

let action = { 
  type: "presents/increase",
}

export function managePresents(state = initialState, action) {
  if(action.type == "presents/increase"){
    return {state: state.numberOfPresents + 1}
  }
  
}
