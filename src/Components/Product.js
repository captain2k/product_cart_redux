import { Component } from "react";

class Product extends Component {
  render() {
    var { product } = this.props
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.img}
              className="img-fluid" alt={product.name} />
            <a>
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>
                {this.showRatings(product.ratings)}
              </li>
            </ul>
            <p className="card-text">
              {product.description}
            </p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <a
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip" data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                  onClick={() => this.addProductToCart(product)}
                >
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  showRatings = (ratings) => {
    var result = [];
    for (var i = 1; i <= ratings; i++) {
      result.push(<i className="fa fa-star" key={i}></i>)
    }
    for (var j = 1; j <= (5 - ratings); j++) {
      result.push(<i className="fa fa-star-o" key={6 - j}></i>)
    }
    return result
  }

  addProductToCart = (product) => {
    this.props.onAddToCart(product)
  }


}

export default Product;
