import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../redux/actions';
import {
    View,
    TextInput
} from 'react-native';

const mapStateToProps = state => {
    return {
        value: state.value
    }
}

const mapDispatchToProps = (dispatch, myProps) => {
    return {
        _onSubmitEditing: text => {
            dispatch(addTodo(text));
        }
    }
}

class AddTodoInput extends Component {
    constructor(props){
        super(props);
        this.state = {text: ''}
    }

    _onSubmitEditing(){
        this.props._onSubmitEditing(this.state.text);
        this.setState({text: ''});
    }

    render() {
        return (
            <View>
                <TextInput 
                    placeholder="Input text here" 
                    onSubmitEditing={this._onSubmitEditing.bind(this)} 
                    onChangeText={text => this.setState({text})}
                    value={this.state.text} />
            </View>
        )
    }
}

const AddTodo = connect(
    mapStateToProps, 
    mapDispatchToProps
)(AddTodoInput);

export default AddTodo;