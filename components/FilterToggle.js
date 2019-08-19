import {connect} from 'react-redux';
import {setVisibilityFilter} from '../redux/actions';
import ViewToggle from './ViewToggle';

const mapStateToProps = (state, myProps) => {
    return {
        active: myProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _onPress: (filter) => {
            dispatch(setVisibilityFilter(filter));
        }
    }
}

const FilterToggle = connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewToggle);

export default FilterToggle;