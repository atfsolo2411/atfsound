import React, { Component } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Items from "./components/Items";
import Categories from './components/Categories';

class App extends Component {
    constructor(props) {
        super(props)

        const items = [
            { id: 1, title: 'Pioneer TS-A1670F', img: '/img/1.jpg', desc: 'Коаксиальная акустика 16.5 см, 320 Вт, чистый и мощный звук.', category: 'Динамики', price: 6490 },
            { id: 2, title: 'Alpine S-S65', img: '/img/2.jpg', desc: '2-полосные коаксиальные динамики 16.5 см, высокая чувствительность.', category: 'Динамики', price: 7990 },
            { id: 3, title: 'JBL Stage 1200B', img: '/img/3.jpg', desc: 'Сабвуфер 12" в корпусе, глубокий и мощный бас.', category: 'Сабвуфер', price: 12990 },
            { id: 4, title: 'Ural AS-D12A', img: '/img/4.png', desc: 'Активный сабвуфер 12", встроенный усилитель.', category: 'Сабвуфер', price: 14990 },
            { id: 5, title: 'Pioneer GM-A5702', img: '/img/5.jpg', desc: '2-канальный автомобильный усилитель, 1000 Вт.', category: 'Усилитель', price: 10990 },
            { id: 6, title: 'Alpine BBX-F1200', img: '/img/6.jpg', desc: '4-канальный усилитель, стабильная и мощная работа.', category: 'Усилитель', price: 15990 },
            { id: 7, title: 'Kenwood KMM-BT306', img: '/img/7.jpg', desc: 'Автомагнитола с Bluetooth, USB и поддержкой FLAC.', category: 'Головное устройство', price: 8990 },
            { id: 8, title: 'Sony DSX-A410BT', img: '/img/8.jpg', desc: 'Медиа-ресивер с Bluetooth и поддержкой Android.', category: 'Головное устройство', price: 9990 },
            { id: 9, title: 'Focal Auditor RSE-165', img: '/img/9.jpg', desc: 'Коаксиальные динамики 16.5 см, качественный звук для музыки любых жанров.', category: 'Динамики', price: 11990 },
            { id: 10, title: 'Hertz DCX 165.3', img: '/img/10.jpg', desc: '3-полосные коаксиальные динамики 16.5 см, мощная детализация.', category: 'Динамики', price: 13490 },
            { id: 11, title: 'JBL GTO1214', img: '/img/11.jpg', desc: 'Сабвуфер 12" в корпусе, усиленный бас для больших автомобилей.', category: 'Сабвуфер', price: 17990 },
            { id: 12, title: 'Rockford Fosgate P3D4-12', img: '/img/12.jpg', desc: 'Сабвуфер 12" с высокой чувствительностью, глубокий бас.', category: 'Сабвуфер', price: 18990 },
            { id: 13, title: 'JL Audio JX1000/1D', img: '/img/13.jpg', desc: 'Моноблок усилитель 1000 Вт, для сабвуферов высокой мощности.', category: 'Усилитель', price: 29990 },
            { id: 14, title: 'Alpine MRV-F300', img: '/img/14.jpg', desc: '4-канальный усилитель 300 Вт, компактный и надёжный.', category: 'Усилитель', price: 12490 },
            { id: 15, title: 'Sony XAV-AX100', img: '/img/15.jpg', desc: 'Мультимедиа ресивер с экраном 6.2", Apple CarPlay и Android Auto.', category: 'Головное устройство', price: 15990 },
            { id: 16, title: 'Pioneer DMH-A345BT', img: '/img/16.jpg', desc: 'Мультимедиа ресивер с сенсорным экраном, Bluetooth и USB.', category: 'Головное устройство', price: 13990 },
            { id: 17, title: 'Infinity Kappa 62IX', img: '/img/17.jpg', desc: 'Коаксиальные динамики 16 см, отличный звук с глубокими басами.', category: 'Динамики', price: 12490 },
            { id: 18, title: 'MB Quart QSD 210', img: '/img/18.jpg', desc: 'Сабвуфер 10" в корпусе, чистый звук для компактных автомобилей.', category: 'Сабвуфер', price: 9490 },
            { id: 19, title: 'Alpine CDE-172BT', img: '/img/19.jpg', desc: 'Автомагнитола с Bluetooth и USB, простое управление.', category: 'Головное устройство', price: 7990 },
            { id: 20, title: 'Focal Integration ISU 165', img: '/img/20.jpeg', desc: 'Коаксиальные динамики 16.5 см, сбалансированный звук без искажений.', category: 'Динамики', price: 10990 }
        ];

        this.state = {
            items: items,
            currentItems: items,
            cart: [],
            showCart: false,
            notification: null // ДОБАВЬ ЭТУ СТРОКУ
        }
    }

    addToCart = (item) => {
        this.setState({
            cart: [...this.state.cart, item],
            notification: { // ДОБАВЬ ЭТОТ БЛОК
                message: `${item.title} добавлен в корзину!`,
                id: Date.now()
            }
        })

        setTimeout(() => { // ДОБАВЬ ЭТОТ setTimeout
            this.setState({ notification: null })
        }, 2000)
    }

    removeFromCart = (id) => {
        this.setState({ cart: this.state.cart.filter(el => el.id !== id) })
    }

    toggleCart = () => {
        this.setState({ showCart: !this.state.showCart })
    }

    chooseCategory = (category) => {
        if(category === 'all'){
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    getTotalPrice = () => {
        return this.state.cart.reduce((sum, el) => sum + el.price, 0)
    }

    render() {
        return (
            <div className="wrapper">
                {/* ДОБАВЬ ЭТОТ БЛОК С УВЕДОМЛЕНИЕМ */}
                {this.state.notification && (
                    <div key={this.state.notification.id} className="notification">
                        ✓ {this.state.notification.message}
                    </div>
                )}

                <Header
                    cart={this.state.cart}
                    onShowCart={this.toggleCart}
                />

                <Categories chooseCategory={this.chooseCategory} />

                {this.state.showCart && (
                    <div className="modal-overlay" onClick={this.toggleCart}>
                        <div className="cart-modal" onClick={e => e.stopPropagation()}>
                            <h2>Корзина</h2>
                            <button className="modal-close" onClick={this.toggleCart}>×</button>

                            {this.state.cart.length === 0 && <p style={{textAlign: 'center', color: '#999', padding: '20px'}}>Корзина пустая</p>}

                            {this.state.cart.map(el => (
                                <div key={el.id} className="cart-item">
                                    <span>{el.title} — {el.price} ₽</span>
                                    <button
                                        className="remove-btn"
                                        onClick={() => this.removeFromCart(el.id)}
                                    >
                                        удалить
                                    </button>
                                </div>
                            ))}

                            {this.state.cart.length > 0 && (
                                <h3 className="total">
                                    Итого: {this.getTotalPrice()} ₽
                                </h3>
                            )}
                        </div>
                    </div>
                )}

                <Items
                    items={this.state.currentItems}
                    addToCart={this.addToCart}
                />

                <Footer/>
            </div>
        );
    }
}

export default App;