import React from 'react';
import {PRODUCTS, SHOPPING_CART} from "../actions/changePage";
import {connect} from 'react-redux';
import {changeOrderItemsCount} from "../actions/changeOrderItemsCount";
import {removeItemFromCart} from "../actions/removeFromShoppingCart";
import {store} from "../index";

export class ProductsRow extends React.Component {
    changeOrderItemsCount(increase, product) {
        return function () {
            store.dispatch(changeOrderItemsCount(increase, product));
        }
    }

    removeItemFromCart(id) {
        return function () {
            store.dispatch(removeItemFromCart(id));
        }
    }

    render() {
        const {order, item, currentPage} = this.props;
        let found = order.items.filter(orderItem => orderItem.item.id === item.id);
        if (currentPage === PRODUCTS) {
            return (
                <div className="row">
                    <span className="col">{item.name}</span>
                    <span className="col">{'$' + item.price}</span>
                    <span className="col"> {found[0] !== undefined ? found[0].count : 0} </span>
                    <span className="col-3">
                    <button
                        className="btn btn-secondary ml-1"
                        onClick={this.changeOrderItemsCount(1, item)}
                    >
                        +
                    </button>
                </span>
                </div>
            )
        } else if (currentPage === SHOPPING_CART) {
            return (
                <div className='row' key={item.item.id}>
                    <span className='col'>{item.item.name}</span>
                    <span className='col'>{item.item.price}</span>
                    <span className='col'>{item.count}</span>
                    <span className='col-3'>
                        <button
                            className='btn btn-secondary'
                            onClick={this.changeOrderItemsCount(-1, item.item)}
                        >
                            -
                        </button>
                        <button
                            className='btn btn-danger ml-1'
                            onClick={this.removeItemFromCart(item.item.id)}
                        >
                            &times;
                        </button>
                        </span>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        order: state.order,
        products: state.products
    }
};

const mapDispatchToProps = {
    changeOrderItemsCount,
    removeItemFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsRow)
