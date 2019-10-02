import React, {Component} from 'react';
import './styles.less';
import {selectPage} from '../../actions/selectPageActions';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';



class HeaderComponent extends Component {
    render() {
        return (
            <div className='header'>
                <div className='header__high'>
                    <button className='btn-header' onClick={() => this.props.selectPage('start')}>ПОВЕРНУТИСЬ ДО ВИБОРУ ТЕМ</button>
                    <button className='btn-header' onClick={() => this.props.selectPage(this.props.topic)}>Перейти до тестів: {this.props.topic}</button>
                    {/*<button className='btn-header'>Показати відповіді</button>*/}
                    {/*<button className='btn-header'>Дадати питання</button>*/}
                    {/*<button className='btn-header'>Змінити тему</button>*/}
                </div>
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
function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectPage: selectPage}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
