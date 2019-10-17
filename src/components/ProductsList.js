import React from "react";
import {SHOPPING_CART} from "../actions/changePage";
import {changePage} from "../actions/changePage";
import {connect} from 'react-redux';
import ProductsRow from "./ProductsRow";
import {changeOrderItemsCount} from "../actions/changeOrderItemsCount";

class ProductsList extends React.Component {
    render() {
        const {changePage, products, order, changeOrderItemsCount} = this.props;
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
                    products.map((product, idx) => {
                        let orderItem = order.find(function (item) {
                            return item.product.id === product.id;
                        });
                        return <ProductsRow
                            changeOrderItemsCount={changeOrderItemsCount}
                            key={idx}
                            item={product}
                            count={!!orderItem ? orderItem.count : 0}
                        />
                    })
                }
                <div className='d-flex justify-content-between'>
                    <button
                        onClick={() => changePage(SHOPPING_CART)}
                        className='btn btn-dark'
                    >
                        В корзину
                    </button>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)