import {connect} from 'react-redux';
import {toggleTodo} from '../redux/actions';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
    switch(filter)
    {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter).map(item => {
            return {
                key: item.text
            }
        })
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _onTodoClick: id => {
            dispatch(toggleTodo(id));
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;