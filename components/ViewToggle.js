import React, {Component} from 'react';
import {
    TouchableNativeFeedback,
    View,
    Text
} from 'react-native';
import {VisibilityFilters} from '../redux/actions'

export default class ViewToggle extends Component {
    constructor(props)
    {
        super(props);
        this.state = {visibilityFilter: VisibilityFilters.SHOW_ACTIVE}
    }

    _onPress() {
        switch(this.state.visibilityFilter)
        {
            case 'SHOW_COMPLETED':
                this.setState({visibilityFilter: VisibilityFilters.SHOW_ACTIVE});
                break;
            case 'SHOW_ACTIVE':
                this.setState({visibilityFilter: VisibilityFilters.SHOW_ALL});
                break;
            case 'SHOW_ALL':
                this.setState({visibilityFilter: VisibilityFilters.SHOW_COMPLETED});
        }

        this.props._onPress(this.state.visibilityFilter);
    }

    render()
    {
        return (
            <View style={{backgroundColor: 'steelblue', color: 'white', height: 30, margin: 15, }}>
                <TouchableNativeFeedback style={{flex:1}} onPress={this._onPress.bind(this)}>
                    <Text style={{textAlign: 'center', flex:1}}>Toggle to {this.state.visibilityFilter}</Text>
                </TouchableNativeFeedback>
            </View>
        );
    }
}
