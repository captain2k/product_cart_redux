import { Component } from "react";

class CartItem extends Component {
  updateProductInCart = (product, quantity) => {
    const { updateProductInCart } = this.props
    if (quantity > 0) {
      updateProductInCart(product, quantity)
    }
  }

  render() {
    const { item } = this.props
    const { quantity } = item
    return (
      <tr>
        <th scope="row">
          <img src={item.product.img}
            alt={item.product.name} className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => this.updateProductInCart(item.product, quantity - 1)}
            >
              <a>—</a>
            </label>
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => this.updateProductInCart(item.product, quantity + 1)}
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.showPrice(item.product.price, item.quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.deleteProductInCart(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }

  showPrice = (price, quantity) => {
    return price * quantity
  }

  deleteProductInCart = (product) => {
    this.props.deleteProduct(product)
  }
}

export default CartItem;
