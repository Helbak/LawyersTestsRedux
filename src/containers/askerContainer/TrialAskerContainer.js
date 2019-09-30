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
    return {
        topic: state.functionReducer
    }
};

export default connect(mapStateToProps)(TrialAskerContainer)

