import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="logo">
                    <h1>ATFSOUND</h1>
                </div>
                <div className="cart-icon" onClick={this.props.onShowCart}>
                    Корзина ({this.props.cart?.length || 0})
                </div>
            </header>
        )
    }
}

export default Header