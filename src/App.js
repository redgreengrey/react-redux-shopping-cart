import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {initState} from "./redux/actions/init";
import ProductsList from './components/ProductsList';
import {PRODUCTS, SHOPPING_CART, changePage} from "./redux/actions/changePage";
import ShoppingCart from "./components/ShoppingCart";
import {changeOrderItemsCount} from "./redux/actions/changeOrderItemsCount";

import {rootLogicStore} from "./redux/appStore";

class App extends React.Component {
    render() {
        const {order, products, currentPage, changeOrderItemsCount} = this.props;
        return (
            <div className="main-block">
                {currentPage === PRODUCTS ? <h1>Список товаров</h1> : <h1>Корзина</h1>}
                {
                    currentPage === PRODUCTS && (
                        <ProductsList
                            changeOrderItemsCount={changeOrderItemsCount}
                            products={products}
                            orderItems={order.items}
                            changePage={changePage}
                        />
                    )
                }
                {
                    currentPage === SHOPPING_CART && (
                        <ShoppingCart
                            changeOrderItemsCount={changeOrderItemsCount}
                            products={products}
                            orderItems={order.items}
                            changePage={changePage}

                        />
                    )
                }
            </div>
        )
    }

    componentDidMount() {
        rootLogicStore.dispatch(initState());
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        currentPage: state.currentPage,
        order: []
    }
};

const mapDispatchToProps = {
    changePage,
    changeOrderItemsCount
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
