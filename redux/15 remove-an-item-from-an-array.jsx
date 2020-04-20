const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // don't mutate state here or the tests will fail
      let newArray = [];

      for (let i = 0; i < state.length; i++) {
        if (i === action.index) continue;
        newArray.push(state[i]);
      }
      
      return newArray;
      return
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
//store.dispatch(removeItem(1));
