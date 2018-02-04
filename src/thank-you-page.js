import React from 'react'
import './thank-you-page.scss'

const staticText = {
    header: "Thank You For Your Order!",
    subheader: "We appreciate all of your feedback on your shopping experience today!"
}

export default class ThankYouPage extends React.Component {

    render() {
        return (
            <div className='thank-you-page'>
                <img className='logo-style' src={'../../src/images/howesgrocerybanner.png'}/>
                <div className='thank-you-header'>{staticText.header}</div>
                <div className='thank-you-subheader'>{staticText.subheader}</div>
                <button className='back-to-shopping-button bold'>Back to Shopping</button>
            </div>
        )
    }
}