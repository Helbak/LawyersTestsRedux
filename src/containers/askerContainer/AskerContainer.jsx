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
                    <button className='question'>{this.props.quest1[0].optionsAnswers[0].text}</button>
                    <button className='question'>{this.props.quest1[0].optionsAnswers[1].text}</button>
                    <button className='question'>{this.props.quest1[0].optionsAnswers[2].text}</button>
                    <button className='question'>{this.props.quest1[0].optionsAnswers[3].text}</button>
                </div>
                {/*<div className='asker__sign'>*/}
                {/*    <div className='vx' id='notwrong'>V</div>*/}
                {/*    <div className='vx'>X</div>*/}
                {/*    <div className='vx'>X</div>*/}
                {/*    <div className='vx'>X</div>*/}
                {/*</div>*/}
                <div className='asker__right'>
                    RESULT
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        quest1: state.quest1
    }
};

 export default connect(mapStateToProps)(AskerContainer)
