import React, {Component} from 'react';
import {
    TouchableHighlight,
    View,
    Text
} from 'react-native';

export default class ViewToggle extends Component {
    _onPress() {

    }

    render()
    {
        return (
            <View>
                <TouchableHighlight onPress={this._onPress}>
                    <Text>Toggle List View</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
