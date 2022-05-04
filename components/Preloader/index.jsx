import React, { Component } from 'react'
// import "./style.scss";
export default class index extends Component {
    _renderDots(){
        const result = [];
        for(let i = 0; i < 6; i++){
          result.push(<div key={i} className='clock__dots'/>);
        }
        return result
      }
    render() {
        return (
            <div className='preloader'>
                <div className='preloader__container'>
                    <div className='preloader__img-container'>
                        <div className='preloader__item'></div>
                        <div className='preloader__item preloader__item--mid'></div>
                        <div className='preloader__item preloader__item--inner'></div>
                        <div className='preloader__clock clock'>
                            <i className='clock__center' />
                            {this._renderDots()}
                        </div>
                    </div>
                    <h3 className="preloader__mesage">Loading...</h3>
                </div>
            </div>
        )
    }
}
