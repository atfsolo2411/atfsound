import React, { Component } from 'react'

export class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAnimating: false
        }
    }

    handleAddToCart = () => {
        this.setState({ isAnimating: true })
        this.props.addToCart(this.props.item)

        setTimeout(() => {
            this.setState({ isAnimating: false })
        }, 300)
    }

    render() {
        const { item } = this.props
        const { isAnimating } = this.state

        if (!item) return null

        return (
            <div className="item">
                <img
                    src={item.img || 'https://via.placeholder.com/200x150?text=No+Image'}
                    alt={item.title || 'No title'}
                />
                <h2>{item.title || 'No title'}</h2>
                <p>{item.desc || 'Нет описания'}</p>
                <b>{item.price ? `${item.price} ₽` : 'Цена не указана'}</b>
                <button
                    className={`add-to-cart ${isAnimating ? 'pulse' : ''}`}
                    onClick={this.handleAddToCart}
                >
                    {isAnimating ? '✓ Добавлено!' : 'Добавить в корзину'}
                </button>
            </div>
        )
    }
}

export default Item