import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function SpecialProduct() {
    return ( 
        <div className="col-6 mb-3">
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img className="img-fluid" src="images/watch.jpg" alt="watch" />
                    </div>
                    <div className="special-product-content">
                        <h5 className="brand">Havels</h5>
                        <h6 className="title">Samsung Galaxy Watch; Sim...</h6>
                        <ReactStars count={5} value={3} edit={false} size={24} activeColor="#ffd700"/>
                        <p className="price">
                            <span className="red-p">$100</span> &nbsp; <strike>$999</strike>
                        </p>
                        <div className="discount-till d-flex align-items-center gap-10">
                            <p className="mb-0">
                                <b>5 Days</b>
                            </p>
                            <div className="d-flex gap-10 align-items-center">
                                <span className="badge rounded-circle p-3 bg-danger">10</span>:
                                <span className="badge rounded-circle p-3 bg-danger">10</span>:
                                <span className="badge rounded-circle p-3 bg-danger">10</span>
                            </div>
                        </div>
                        <div className="prod-count my-3">
                                <p>Products : 5</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar"    aria-label="Basic example" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                        </div>
                        <Link to='/' className="button">Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default SpecialProduct;