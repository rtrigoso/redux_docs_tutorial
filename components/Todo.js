import React, {Component} from 'react';
import {
    TouchableHighlight,
    View,
    Text
} from 'react-native';

export default class Todo extends Component {
    _onPress() {

    }

    render()
    {
        return (
            <View>
                <TouchableHighlight onPress={this._onPress}>
                    <Text>{this.props.text}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
