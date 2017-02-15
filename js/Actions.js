import $ from 'jquery';
// Actions provide functions that correctly format data
// for Reducers to perform state transformations on.

var Actions = {
    getTodos: () => {
        // This is a special kind of action; it's called a "Thunk"
        // Thunks are used for asynchronous action creation functions
        // You can learn more here:
        // http://redux.js.org/docs/advanced/AsyncActions.html
        return (dispatch) => {
            // Unlike reducers or normal actions,
            // thunks are allowed to dispatch actions.
            dispatch(Actions.fetchingTodos(true));
            $.get("/todos").then((data) => {
                // And then we'll update the todos (and in the reducer, clean up the fetching state)
                dispatch(Actions.updatedTodos(data));
            }).catch(() => {
                // If we hit any errors, we bail out and set the fetching state to false
                dispatch(Actions.fetchingTodos(false));
            });
        };
    },
    updatedTodos: (todos) => {
        return {
            type: 'TODO_UPDATE',
            todos: todos
        };
    },
    fetchingTodos: (fetching) => {
        return {
            type: "TODO_FETCH",
            fetching // this is the ES2015 "property" syntax; it uses the variable name as the key, and the value as the value.
        }
    },
    addTodo: (task) => {
        return (dispatch) => {
            // Update the server
            $.post("/todos", {task}).then((resp) => {
                // Update the client
                dispatch(Actions.getTodos());
            });
        };
    },
    editTodoTask: (index, task) => {
        return (dispatch) => {
            // Update the server
            $.post("/todos/" + index, {task}).then((resp) => {
                // Update the client
                dispatch(Actions.getTodos());
            });
        };
    },
    editTodoState: (index, done) => {
        return (dispatch) => {
            // Update the server
            $.post("/todos/" + index, {done}).then((resp) => {
                // Update the client
                dispatch(Actions.getTodos());
            });
        }
    }
}

export default Actions;