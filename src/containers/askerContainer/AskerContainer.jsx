import React, {Component} from 'react';
import './styles.less';
import {selectQuestion} from "../../actions/selectQuestionAction";
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

 class AskerContainer extends Component {

    render() {
        return (
            <div className='asker'>
                <div className='asker__left'>
                    {this.props.allQuestion[this.props.numTopic][0].question}
                </div>
                <div className='asker__center'>
                    <button className='question'>{this.props.allQuestion[this.props.numTopic][0].optionsAnswers[0].text}</button>
                    <button className='question'>{this.props.allQuestion[this.props.numTopic][0].optionsAnswers[1].text}</button>
                    <button className='question'>{this.props.allQuestion[this.props.numTopic][0].optionsAnswers[2].text}</button>
                    <button className='question'>{this.props.allQuestion[this.props.numTopic][0].optionsAnswers[3].text}</button>
                </div>
                <div className='asker__right'>
                    <button className='window-right'> Правильних відповідей : 0</button>
                    <button className='window-right'>Помилок : 0</button>
                    <button className='window-right'>Питання № {this.props.numQuestion}</button>
                    <button className='btn-right' onClick={() => this.props.selectQuestion(this.props.numQuestion)}>Наступне питання</button>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        numQuestion: state.selectQuestion,
        numTopic: state.selectTopicReducer.numTopic,
        allQuestion: state.allQuestion
    }
};
function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectQuestion: selectQuestion}, dispatch)
}
 export default connect(mapStateToProps, mapDispatchToProps)(AskerContainer)
