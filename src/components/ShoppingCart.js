import React from 'react'
import ProductsRow from "./ProductsRow";
import {PRODUCTS} from "../redux/actions/changePage";
import {changePage} from "../redux/actions/changePage";
import {changeOrderItemsCount} from "../redux/actions/changeOrderItemsCount";
import {clearShoppingCart} from "../redux/actions/clearShoppingCart";
import {connect} from 'react-redux';

export class ShoppingCart extends React.Component {
    getOrderTotal = function () {
        const {order} = this.props;
        return !!order && order.reduce((total, orderItem) => {
            if (!!orderItem) {
                total = parseInt(total) + parseInt(orderItem.count) * parseInt(orderItem.item.price);
            }
            return total;
        }, 0);
    };
    handleClearShoppingCartOnClick = () => {
        this.props.clearShoppingCart();
    };
    handleChangePageOnClick = () => {
        this.props.changePage(PRODUCTS)
    };


    render() {
        const {
            order,
            changeOrderItemsCount,
            clearShoppingCartRow,
        } = this.props;

        if (!!order && order.length === 0) {
            return (
                <div className='d-flex flex-sm-column'>
                    <div>
                        В корзине нет товаров.
                    </div>
                    <button
                        onClick={this.handleChangePageOnClick}
                        className='btn btn-dark col-6 mt-2'
                    >
                        К списку продуктов
                    </button>
                </div>
            )
        }

        return (
            <div>
                <div className='row'>
                    <span className='col'>Название</span>
                    <span className='col p-0'>Цена</span>
                    <span className='col'>Количество</span>
                    <span className='col'> </span>
                </div>
                <hr/>
                {
                    order.map((product, idx) => {
                        let orderItem = order.find(function (item) {
                            return item.product === product;
                        });
                        return <ProductsRow
                            changeOrderItemsCount={changeOrderItemsCount}
                            key={idx}
                            item={product}
                            count={!!orderItem ? orderItem.count : 0}
                            clearShoppingCartRow={clearShoppingCartRow}
                        />
                    })
                }
                <div className='d-flex justify-content-between'>
                    <button
                        onClick={this.handleChangePageOnClick}
                        className='btn btn-dark'
                    >
                        К списку продуктов
                    </button>
                    <button
                        className='btn btn-danger'
                        onClick={this.handleClearShoppingCartOnClick}
                    >
                        Очистить корзину
                    </button>
                </div>
                <div>
                    <div>
                        <span className='font-weight-bold'>Всего:</span>
                        <span className='ml-1 '>
                            {
                                '$' + this.getOrderTotal()
                            }
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        currentPage: state.currentPage,
        order: state.order
    }
};

const mapDispatchToProps = {
    changePage: page => (changePage(page)),
    changeOrderItemsCount,
    clearShoppingCart: () => (clearShoppingCart())
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)