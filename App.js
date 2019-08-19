import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {
  View,
} from 'react-native';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import FilterToggle from './components/FilterToggle';
import todoApp from './redux/reducers';
import {addTodo} from './redux/actions';

const store = createStore(todoApp)
 
const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <FilterToggle />
        <AddTodo />
        <VisibleTodoList/>
      </View>
    </Provider>

  );
};

export default App;
