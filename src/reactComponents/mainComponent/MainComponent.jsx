import React, { Component } from 'react';
import './styles.less';
import HeaderContainer from '../headerComponent/HeaderComponent.jsx';
import AskerContainer from '../../containers/askerContainer/AskerContainer.jsx';
import StartContainer from '../../containers/startContainer/startContainer.jsx';
import TrialAskerContainer from '../../containers/askerContainer/TrialAskerContainer.js';
import {connect} from "react-redux";

 class MainComponent extends Component{

getComponent(){
    const page = this.props.page;
    console.log(page);
    if (page===null||page==='start'){
        return <StartContainer/>
    };
    if (page==='asker') {
        return <AskerContainer/>
    }
}
        render() {
        return (
            <div className='main-tests'>
                <div className='main-tests__header'>
                   <HeaderContainer/>
                </div>
                <div className='main-tests__body'>
                    {this.getComponent()}
                </div>
                <div className='main-tests__footer'>
                    <TrialAskerContainer/>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        page: state.pageReducer
    }
};

export default connect(mapStateToProps)(MainComponent);
