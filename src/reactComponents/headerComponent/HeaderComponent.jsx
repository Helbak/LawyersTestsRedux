import React, {Component} from 'react';
import './styles.less';

export default class HeaderComponent extends Component {
    render() {
        return (
            <div className='header'>
                <div className='header__high'>
                    <button className='btn-header'>ВИХІД</button>
                    <button className='btn-header'>Показати результат</button>
                    <button className='btn-header'>Показати відповіді</button>
                    <button className='btn-header'>Дадати питання</button>
                    <button className='btn-header'>Змінити тему</button>
                    {/*<button className='btn-header'>has requested</button>*/}
                    {/*<button className='btn-header'>has requested</button>*/}
                    {/*<button className='btn-header'>has requested</button>*/}
                </div>
            </div>
        );
    }
}
