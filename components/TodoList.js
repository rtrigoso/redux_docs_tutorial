import React, {Component} from 'react';
import {
    FlatList,
    TouchableHighlight,
    View,
    Text
} from 'react-native';


class Todo extends Component {
    _onPress() {
        this.props.onClick(this.props.id);
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={this._onPress.bind(this)}>
                    <Text style={{color:'white'}}>{this.props.text}</Text>
                </TouchableHighlight>
            </View>
        );

    }
}

export default class TodoList extends Component {
    render() {
        let that = this;
        return (
            <FlatList
                style={{backgroundColor: 'grey'}}
                data={this.props.todos}
                renderItem={({item, index}) => 
                    <Todo 
                        text={item.key}
                        id={index}
                        onClick={that.props._onTodoClick}
                        /> 
                }
        />
        );
    }
}