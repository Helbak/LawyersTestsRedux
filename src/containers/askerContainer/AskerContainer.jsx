import React, {Component} from 'react';
import { connect } from 'react-redux';
import './styles.less';

 class AskerContainer extends Component {

    render() {
        return (
            <div className='asker'>
                <div className='asker__left'>
                    {this.props.quest1[0].question}
                </div>
                <div className='asker__center'>
                    <button className='question'>{this.props.allQuestion[0][0].optionsAnswers[0].text}</button>
                    <button className='question'>{this.props.allQuestion[0][0].optionsAnswers[1].text}</button>
                    <button className='question'>{this.props.allQuestion[0][0].optionsAnswers[2].text}</button>
                    <button className='question'>{this.props.allQuestion[0][0].optionsAnswers[3].text}</button>
                </div>
                <div className='asker__right'>
                    RESULT
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        quest1: state.quest1,
        numTopic: state.selectTopicReducer.numTopic,
        allQuestion: state.allQuestion
    }
};

 export default connect(mapStateToProps)(AskerContainer)
