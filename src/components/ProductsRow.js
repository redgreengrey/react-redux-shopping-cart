import React from 'react';
import {PRODUCTS, SHOPPING_CART} from "../redux/actions/changePage";
import {connect} from 'react-redux';
import {changeOrderItemsCount} from "../redux/actions/changeOrderItemsCount";
import {removeItemFromCart} from "../redux/actions/removeFromShoppingCart";

export class ProductsRow extends React.Component {
    handleIncreaseOnClick = () => {
        this.props.changeOrderItemsCount(1, this.props.item)
    };
    handleDecreaseOnClick = () => {
        this.props.changeOrderItemsCount(-1, this.props.item.item)
    };
    handleRemoveItemFromCartOnClick = () => {
        this.props.removeItemFromCart(this.props.item.item.id)
    };

    render() {
        const {order, item, currentPage} = this.props;
        let found = order.filter(orderItem => orderItem.item.id === item.id);
        if (currentPage === PRODUCTS) {
            return (
                <div className="row">
                    <span className="col">{item.name}</span>
                    <span className="col">{'$' + item.price}</span>
                    <span className="col"> {found[0] !== undefined ? found[0].count : 0} </span>
                    <span className="col-3">
                    <button
                        className="btn btn-secondary ml-1"
                        onClick={this.handleIncreaseOnClick} // refactor
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
                            onClick={this.handleDecreaseOnClick}  // refactor
                        >
                            -
                        </button>
                        <button
                            className='btn btn-danger ml-1'
                            onClick={this.handleRemoveItemFromCartOnClick}  // refactor
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
    changeOrderItemsCount: (increase, product) => (changeOrderItemsCount(increase, product)),
    removeItemFromCart: (id) => (removeItemFromCart(id))
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsRow)
