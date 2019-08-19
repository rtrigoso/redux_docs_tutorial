import React, {Component} from 'react';
import {
    FlatList
} from 'react-native';
import {
    Todo
} from './Todo'

export default class TodoList extends Component {
    render() {
        return (
            <FlatList
                data={this.props.todos}
                renderItem={({item, index}) => <Todo key={index} text={item.text} />}
            />
        );
    }
}