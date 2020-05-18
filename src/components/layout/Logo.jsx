import React, { Component } from 'react'
import logo from './images/logo/logo.png'
import './headerstyle.css'

export default class Logo extends Component {
    render() {
        return (
            <div className='column has-text-centered has-background-light is-mobile'>
                <img src={logo} />
            </div>
        )
    }
}
