import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import Actions from './Actions';

// The store manages the current state of the application.
// The state is essentially a JSON blob that describes all of the data we have in our app.
// By default, that looks like this object:
const initialState = {
    fetching: false,
    todos: []
}

// A reducer is a function that takes in the previous state of the application and an action
// Actions are generated by function in the Actions.js file.
// Actions provide the necessary information to change some aspect of the application's state.
const reducer = function(state = initialState, action) {
    // We always need to make a copy of the state before returning
    // This way, we're not updating historical versions of objects.
    let new_state = Object.assign({}, state);
    switch (action.type) {
        case 'TODO_UPDATE':
            // This action describes a new set of to-dos being passed to the application.
            // It will set the "fetching" status to false, since we've completed our fetch.
            new_state.fetching = false;
            // It then updates the todos list to be whatever the to-dos we received are.
            new_state.todos = action.todos;
            console.log(new_state.todos);
            break;
        case "TODO_FETCH":
            // The "fetching" state allows us to provide user feedback
            // If we're fetching, a spinning wheel should show up.
            new_state.fetching = action.fetching;
            break;
    }

    // We then return the new_state with whatever actions applied.
    return new_state;
};

// The applyMiddleware function adds the "Thunk" code to Redux, allowing it to handle our special actions.
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

// This will fetch the current list of todos, so we have those available in the store.
store.dispatch(Actions.getTodos());

export default store;