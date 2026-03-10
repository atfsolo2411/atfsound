import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
    render() {
        const { items, addToCart } = this.props;

        console.log('Items render:', items); // Для отладки

        if (!items || !Array.isArray(items)) {
            return <div className="items">Нет товаров</div>;
        }

        if (items.length === 0) {
            return <div className="items">Товары не найдены</div>;
        }

        return (
            <main className="items">
                {items.map(item => (
                    <Item
                        key={item.id}
                        item={item}
                        addToCart={addToCart}
                    />
                ))}
            </main>
        );
    }
}

export default Items