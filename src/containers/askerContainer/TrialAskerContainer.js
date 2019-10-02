import React, {Component} from 'react';
import { connect } from 'react-redux';
import './styles.less';

class TrialAskerContainer extends Component {

    render() {
        return (
            <div className='trial'>
                Ви обрали тему: {this.props.topic}
            </div>
        );
    }
}
function mapStateToProps(state) {
    if(state.selectTopicReducer===null){
        return {
            topic: null
        }
    }
    if(state.selectTopicReducer!==null) {
        return {
            topic: state.selectTopicReducer.topic
        }
    }
};

export default connect(mapStateToProps)(TrialAskerContainer)

