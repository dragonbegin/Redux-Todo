const initialState = {
  todos: [
    {
      value: 'homework',
      id: 0,
      completed: false
    }
  ]
}


function todoReducer ( state = initialState, actions ) {
  switch (actions.type) {
    default: 
    return state 
  }
}

export default todoReducer;