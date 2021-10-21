import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Cart from "./../Components/Cart";
import * as Message from "./../constants/Message";
import { deleteProduct, updateProductInCart } from "./../actions/index";
import CartItem from "../Components/CartItem";
import CartResult from "../Components/CartResult";

class CartContainer extends Component {
    render() {
        var { cart } = this.props
        return (
            <Cart>
                {this.showProductInCart(cart)}
                {this.showTotalPrice(cart)}
            </Cart>
        )
    }


    showProductInCart = (cart) => {
        const { deleteProduct, updateProductInCart } = this.props
        var result = <tr><td>{Message.MSG_NO_PRODUCT_IN_CART}</td></tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        deleteProduct={deleteProduct}
                        updateProductInCart={updateProductInCart}
                    />
                )
            })
        }

        return result;
    }

    showTotalPrice = (cart) => {
        return (<CartResult cart={cart} />)
    }

}


CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            ratings: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,

    deleteProduct: PropTypes.func.isRequired,
    updateProductInCart: PropTypes.func.isRequired

}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteProduct: (product) => {
            dispatch(deleteProduct(product))
        },
        updateProductInCart: (product, quantity) => {
            dispatch(updateProductInCart(product, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
