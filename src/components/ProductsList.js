import React from "react";
import {SHOPPING_CART} from "../redux/actions/changePage";
import {changePage} from "../redux/actions/changePage";
import {connect} from 'react-redux';
import ProductsRow from "./ProductsRow";
import {searchAction} from "../redux/actions/filterSearch";

class ProductsList extends React.Component {
    handleSearchOnChange = (event) => {
        this.props.searchAction(event.currentTarget.value);
    };
    handleChangePage = () => {
        this.props.changePage()
    };

    render() {
        const {products, order, changeOrderItemsCount, search} = this.props;
        return (
            <div>
                <div className="md-form mb-3 mt-0">
                    <input
                        className="form-control"
                        placeholder="Search"
                        value={search}
                        onChange={this.handleSearchOnChange}
                    />
                </div>
                <div className='row'>
                    <span className='col'>Название</span>
                    <span className='col p-0'>Цена</span>
                    <span className='col'>Количество</span>
                    <span className='col'> </span>
                </div>
                <hr/>
                {
                    products
                        .filter(item => {
                            return item.name.toLowerCase().includes(search.toLowerCase())
                        })
                        .map((product, idx) => {
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
                        onClick={this.handleChangePage}
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
        order: [],
        search: state.search
    }
};

const mapDispatchToProps = {
    changePage: () => (changePage(SHOPPING_CART)),
    searchAction: value => (searchAction(value))
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)