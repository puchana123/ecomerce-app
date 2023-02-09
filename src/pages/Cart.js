import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <Container className="cart-wrapper home-wrapper-2 p-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex align-items-center justify-content-between">
              <h4 className="cart-col-1">Products</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data d-flex align-items-center justify-content-between my-3">
              <div className="cart-col-1 d-flex align-items-center gap-15 mb-3">
                <div className="w-25">
                  <img
                    src="/images/watch.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div className="w-75">
                  <p>Samsung galaxy watch 7.12</p>
                  <p>Color : silver</p>
                  <p>Size : L</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$100.00</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    style={{ width: "70px" }}
                    min={1}
                    max={10}
                    type="number"
                    placeholder="1"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger fs-5" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$100.00</h5>
              </div>
            </div>
            <div className="cart-data d-flex align-items-center justify-content-between my-3">
              <div className="cart-col-1 d-flex align-items-center gap-15 mb-3">
                <div className="w-25">
                  <img
                    src="/images/watch.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div className="w-75">
                  <p>Samsung galaxy watch 7.12</p>
                  <p>Color : silver</p>
                  <p>Size : L</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$100.00</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    style={{ width: "70px" }}
                    min={1}
                    max={10}
                    type="number"
                    placeholder="1"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger fs-5" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$100.00</h5>
              </div>
            </div>
          </div>
          <div className="col-12 pt-3">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/store" className="button">
                Continue to shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal : $200.00</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
