import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

function ProductCard(props) {

    const {grid} = props
    const location = useLocation()

    return ( 
        <div className={location.pathname === '/store' ? `col-${grid}`:'col-2'}>
            <Link to='/product/:id' className={`product-card ${grid === 12 && 'd-flex'}`}>
                <div className="product-image position-relative">
                    <div className='product-changing'>
                        <img className='img-fluid' src="/images/tab1.jpg" alt="product-img" />
                        <img className='img-fluid' src="/images/tab.jpg" alt="product-img" />
                    </div>
                    <div className="action-bar position-absolute d-flex flex-column gap-10">
                        <div className="wishlist-icon">
                            <Link to='/'>
                                <img src="/images/wish.svg" alt="wishlist-icon" />
                            </Link>
                        </div>
                        <div className="d-flex flex-column gap-10">
                            <Link to='/'>
                                <img src="/images/prodcompare.svg" alt="prodcompare-icon" />
                            </Link>
                            <Link to='/'>
                                <img src="/images/view.svg" alt="view-icon" />
                            </Link>
                            <Link to='/'>
                                <img src="/images/add-cart.svg" alt="addcart-icon" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`product-detail ${grid === 12 && 'd-flex flex-column justify-content-center'}`}>
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars count={5} value={3} edit={false} size={24} activeColor="#ffd700"/>
                    <p className={`description pe-3 ${grid === 12 ? 'd-block':'d-none'}`}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quos maiores, porro recusandae voluptatibus veniam culpa totam optio nulla praesentium libero. Neque explicabo quos mollitia doloremque praesentium atque, repellat nostrum!
                    </p>
                    <p className="price">$100.00</p>
                </div>
                
            </Link>
        </div>
     );
}

export default ProductCard;