import { Component } from "react";
import { connect } from "react-redux";
import Products from "../Components/Products";
import Product from "../Components/Product";
import PropTypes from 'prop-types';
import { actAddToCart } from "./../actions/index"

class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }

    showProducts(products) {
        var { onAddToCart } = this.props
        var result = products.map((product) => {
            return (
                <Product
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                >
                </Product>
            )

        })
        return result
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            ratings: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,

    onAddToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispacth, props) => {
    return {
        onAddToCart: (product) => {
            dispacth(actAddToCart(product, 1))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
