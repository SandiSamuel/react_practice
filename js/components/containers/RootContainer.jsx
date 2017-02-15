import React from 'react';
import {connect} from 'react-redux';
import Actions from '../../Actions';

// Containers are objects that interact with the state. Their job is to map actions and state
// into the widgets. Widgets are pure UI elements; they handle display and user input.
// By breaking the code up this way, your widgets can be reused in multiple places,
// and your containers don't need to worry about the intricacies of dealing with
// display and DOM events.

// If your state winds up getting more and more complex, it'll make sense to split the Redux integration into a few containers.
// You can have a series of nested containers that handle each subtree in your state; this will allow each individual part to
// be a little less complicated, and make it so you can focus on the part you're working on.

// Since this is a pretty simple app, we only interact with Redux directly here.

var RootContainer = React.createClass({
    propTypes: {
        todos: React.PropTypes.array,
        fetching: React.PropTypes.bool,
        addTodo: React.PropTypes.func,
        setTodoTask: React.PropTypes.func,
        completeTodo: React.PropTypes.func,
        undoTodo: React.PropTypes.func
    },
    render() {
        return (
            <div>
                <div>
                    <h4>Fetching:</h4>
                    <p>{"" + this.props.fetching}</p>
                </div>
                <div>
                    <h4>Todos:</h4>
                    <ul>
                        {this.props.todos.map((todo, index) => {
                            return <li key={index}>{todo.task}</li>;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
});

// This function allows us to extract parts of the state from the store
const mapStateToProps = (state) => {
    return {
        fetching: state.fetching,
        todos: state.todos
    };
};

// This function lets us build functions for dispatching actions, and tie those
// into the props for the container.
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (task) => dispatch(Actions.addTodo(task)),
        setTodoTask: (index, task) => dispatch(Actions.editTodoTask(index, task)),
        // While we have one action that will handle setting the state to any value,
        // it's a lot easier to not have to worry about that; instead, we'll
        // have two functions that set it to either of the desired states.
        // Nesting function calls and reducing the number of arguments
        // needed at each nesting level is called "currying" the functions.
        completeTodo: (index) => dispatch(Actions.editTodoState(index, true)),
        undoTodo: (index) => dispatch(Actions.editTodoState(index, false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
