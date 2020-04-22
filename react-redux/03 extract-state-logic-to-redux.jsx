// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const messageReducer = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
}

const store = Redux.createStore(messageReducer);