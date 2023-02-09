import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Container from "../components/Container";

const CheckOut = () => {
  return (
    <>
      <Container className="checkout-wrapper home-wrapper-2 px-5 pt-4 pb-5">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">DevCorner</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": "'>'" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark">
                      Cart
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item active text-dark"
                    aria-current="page"
                  >
                    Information
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Shipping
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="total pt-1">Contact Information</h4>
              <p className="subtotal pb-1">Customer#1 (customer.1@email.com)</p>
              <h4>Shipping Information</h4>
              <form
                className="d-flex flex-wrap gap-15 jsutify-content-between"
                action=""
              >
                <div className="form-floating w-100">
                  <select
                    className="form-control form-select"
                    id="save-adress"
                    defaultValue="default"
                  >
                    <option value="default" disabled>
                      Saved Address
                    </option>
                  </select>
                  <label htmlFor="save-adress" className="text-secondary">
                    Saved addresses
                  </label>
                </div>
                <div className="form-floating w-100">
                  <select
                    className="form-control form-select"
                    id="country"
                    defaultValue="default"
                  >
                    <option value="default" disabled>
                      Select Country
                    </option>
                  </select>
                  <label htmlFor="country" className="text-secondary">
                    Country/Region
                  </label>
                </div>
                <div className="form-floating flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="First Name"
                  />
                  <label htmlFor="firstname" className="text-secondary">
                    First Name
                  </label>
                </div>
                <div className="form-floating flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="Last Name"
                  />
                  <label htmlFor="lastname" className="text-secondary">
                    Last Name
                  </label>
                </div>
                <div className="form-floating w-100">
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Address"
                  />
                  <label htmlFor="address" className="text-secondary">
                    Address
                  </label>
                </div>
                <div className="form-floating w-100">
                  <input
                    type="text"
                    className="form-control"
                    id="apartment"
                    placeholder="Apartment"
                  />
                  <label htmlFor="apartment" className="text-secondary">
                    Apartment, suite, etc. (optional)
                  </label>
                </div>
                <div className="form-floating flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="City"
                  />
                  <label htmlFor="city" className="text-secondary">
                    City
                  </label>
                </div>
                <div className="form-floating flex-grow-1">
                  <select
                    className="form-control form-select"
                    id="state"
                    defaultValue="default"
                  >
                    <option value="default" disabled>
                      Select State
                    </option>
                  </select>
                  <label htmlFor="state" className="text-secondary">
                    State
                  </label>
                </div>
                <div className="form-floating flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    id="zipcode"
                    placeholder="ZIP code"
                  />
                  <label htmlFor="zipcode" className="text-secondary">
                    ZIP code
                  </label>
                </div>
              </form>
              <div className="w-100 d-flex justify-content-between align-items-center mt-3">
                <Link to="/cart" className="text-secondary mb-0">
                  <IoIosArrowBack className="fs-5" /> Return to Cart
                </Link>
                <Link to="/shipping" className="button">
                  Countinue to Shipping
                </Link>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bot py-3 d-flex justify-content-between align-items-center">
              <div className="d-flex gap-15">
                <div className="w-25 position-relative">
                  <span
                    style={{ top: "-10%", right: "-10%" }}
                    className="badge bg-secondary rounded-circle position-absolute"
                  >
                    1
                  </span>
                  <img
                    src="/images/watch.jpg"
                    alt="priduct"
                    className="img-fluid"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h5 className="title">Watch</h5>
                  <p className="subtotal">description</p>
                </div>
              </div>
              <div className="text-end">
                <p className="subtotal-price">$100.00</p>
              </div>
            </div>
            <div className="border-bot py-3 d-flex justify-content-between align-items-center">
              <div className="d-flex gap-15">
                <div className="w-25 position-relative">
                  <span
                    style={{ top: "-10%", right: "-10%" }}
                    className="badge bg-secondary rounded-circle position-absolute"
                  >
                    1
                  </span>
                  <img
                    src="/images/watch.jpg"
                    alt="priduct"
                    className="img-fluid"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h5 className="title">Watch</h5>
                  <p className="subtotal">description</p>
                </div>
              </div>
              <div className="text-end">
                <p className="subtotal-price">$100.00</p>
              </div>
            </div>
            <div className="border-bot pb-3">
              <div className="d-flex justify-content-between align-items-center py-2">
                <p className="mb-0 subtotal">Subtotal</p>
                <p className="mb-0 subtotal-price">$50.00</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 subtotal">Shipping</p>
                <p className="mb-0 subtotal-price">$50.00</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0 total">Total</h5>
              <div className="d-flex gap-10 align-items-center">
                <p className="mb-0 subtotal">USD</p>
                <h4 className="mb-0 total-price">$300.00</h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CheckOut;
