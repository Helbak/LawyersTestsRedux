import React, { Component } from 'react';
import {actions} from '../../actions/selectTopicActions';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import './styles.less';

class StartContainer extends Component{
    render() {
        return (
            <div className='topic'>
                <div className='topic__high'>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[0])}>{this.props.topics[0].topic}
                    </textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[1])}>{this.props.topics[1].topic}</textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[2])}>{this.props.topics[2].topic}
                    </textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[3])}>{this.props.topics[3].topic}</textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[4])}>{this.props.topics[4].topic}</textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[5])}>{this.props.topics[5].topic}</textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[6])}>{this.props.topics[6].topic}</textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[7])}>{this.props.topics[7].topic}</textarea>
                </div>
                <div className='topic__middle'>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[8])}>{this.props.topics[8].topic}</textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[9])}>{this.props.topics[9].topic}</textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[10])}>{this.props.topics[10].topic}</textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[11])}>{this.props.topics[11].topic}</textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[12])}>{this.props.topics[12].topic}</textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[13])}>{this.props.topics[13].topic}</textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[14])}>{this.props.topics[14].topic}</textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[15])}>{this.props.topics[15].topic}</textarea>
                </div>
                <div className='topic__low'>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[16])}>{this.props.topics[16].topic}</textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[17])}>{this.props.topics[17].topic}</textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[18])}>{this.props.topics[18].topic}</textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[19])}>{this.props.topics[19].topic}</textarea>
                    <textarea className='btn-topic' onClick={() => this.props.actions(this.props.topics[20])}>{this.props.topics[20].topic}</textarea>
                    {/*<button className='btn-topic'>has requested</button>*/}
                    {/*<button className='btn-topic'>has requested</button>*/}
                    {/*<button className='btn-topic'>has requested</button>*/}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        topics: state.topics
    }
};
function mapDispatchToProps(dispatch) {
    return bindActionCreators({actions: actions}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(StartContainer);
