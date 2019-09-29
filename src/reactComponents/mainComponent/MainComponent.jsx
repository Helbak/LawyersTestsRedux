import React, { Component } from 'react';
import './styles.less';
import HeaderContainer from '../headerComponent/HeaderComponent.jsx';
import AskerContainer from '../../containers/askerContainer/AskerContainer.jsx';
import StartContainer from '../../containers/startContainer/startContainer.jsx';

export default class MainComponent extends Component{

getComponent(){
    const page = this.props
    // return <AskerContainer/>
    return <StartContainer/>
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
                    Footer
                </div>
            </div>
        );
    }
}
