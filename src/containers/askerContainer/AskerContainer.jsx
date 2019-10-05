import React, {Component} from 'react';
import './styles.less';
import {nextQuestion} from "../../actions/nextQuestionAction";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class AskerContainer extends Component {

    nextQuestion() {
        this.props.nextQuestion({
            numQuestion: this.props.numQuestion,
            turn: 'next'
        })
        this.drawAllPositionGrey();
    };

    previousQuestion() {
        this.props.nextQuestion({
            numQuestion: this.props.numQuestion,
            turn: 'back'
        })
        this.drawAllPositionGrey();
    };

    drawAllPositionGrey() {
        this.props.nextQuestion({
            color: "grey",
            position: "firstOption"
        });
        this.props.nextQuestion({
            color: "grey",
            position: "secondOption"
        });
        this.props.nextQuestion({
            color: "grey",
            position: "thirdOption"
        });
        this.props.nextQuestion({
            color: "grey",
            position: "fourthOption"
        })
    };

    render() {
        return (
            <div className='asker'>
                <div className='asker__left'>
                    {this.props.allQuestion[this.props.numTopic][0].question}
                </div>
                <div className='asker__center'>
                    <button className='question' style={this.props.colorFirstOption}
                            onClick={() => this.props.nextQuestion({
                                color: this.props.allQuestion[this.props.numTopic][0].optionsAnswers[0].isTrue,
                                position: "firstOption"
                            })}>{this.props.allQuestion[this.props.numTopic][0].optionsAnswers[0].text}</button>
                    <button
                        className='question' style={this.props.colorSecondOption}
                        onClick={() => this.props.nextQuestion({
                            color: this.props.allQuestion[this.props.numTopic][0].optionsAnswers[1].isTrue,
                            position: "secondOption"
                        })}
                    >{this.props.allQuestion[this.props.numTopic][0].optionsAnswers[1].text}</button>
                    <button
                        className='question' style={this.props.colorThirdOption}
                        onClick={() => this.props.nextQuestion({
                            color: this.props.allQuestion[this.props.numTopic][0].optionsAnswers[2].isTrue,
                            position: "thirdOption"
                        })}
                    >{this.props.allQuestion[this.props.numTopic][0].optionsAnswers[2].text}</button>
                    <button
                        className='question' style={this.props.colorFourthOption}
                        onClick={() => this.props.nextQuestion({
                            color: this.props.allQuestion[this.props.numTopic][0].optionsAnswers[3].isTrue,
                            position: "fourthOption"
                        })}
                    >{this.props.allQuestion[this.props.numTopic][0].optionsAnswers[3].text}</button>
                </div>
                <div className='asker__right'>
                    <button className='window-right'> Правильних відповідей : 0 Помилок : 0</button>
                    <button className='window-right'>Питання № {this.props.numQuestion}</button>
                    <button className='btn-right' onClick={() => this.previousQuestion()}>Попереднє питання
                    </button>
                    <button className='btn-right' onClick={() => this.nextQuestion()}>Наступне питання
                    </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        numQuestion: state.selectQuestion,
        numTopic: state.selectTopicReducer.numTopic,
        allQuestion: state.allQuestion,
        colorFirstOption: state.colorFirstOption,
        colorFourthOption: state.colorFourthOption,
        colorSecondOption: state.colorSecondOption,
        colorThirdOption: state.colorThirdOption
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({nextQuestion: nextQuestion},
        dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AskerContainer)
