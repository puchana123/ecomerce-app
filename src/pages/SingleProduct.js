import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import ReactImageZoom from 'react-image-zoom';
import {FiHeart} from 'react-icons/fi'
import {IoIosGitCompare} from 'react-icons/io'

const SingleProduct = ()=>{

    const [isOrdered,setIsOrdered] = useState(true)
    const [writeReview,setWriteReview] = useState(false)

    const props = {width: 650, height: 500, zoomWidth: 500, img: "https://cdn.pixabay.com/photo/2021/11/16/15/35/technology-6801334_960_720.jpg"};

    const handleWriteReview = ()=>{
        setWriteReview(!writeReview)
    }

    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }

    return(
        <>
            <Meta title='Product Name' />
            <BreadCrumb title='Product Name' />
            <div className="main-product-wrapper home-wrapper-2 p-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image pb-0">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-image d-flex flex-wrap gap-10">
                                <div>
                                    <img src="https://cdn.pixabay.com/photo/2021/11/16/15/35/technology-6801334_960_720.jpg" alt="pic" className="img-fluid"/>
                                </div>
                                <div>
                                    <img src="https://cdn.pixabay.com/photo/2021/11/16/15/35/technology-6801334_960_720.jpg" alt="pic" className="img-fluid"/>
                                </div>
                                <div>
                                    <img src="https://cdn.pixabay.com/photo/2021/11/16/15/35/technology-6801334_960_720.jpg" alt="pic" className="img-fluid"/>
                                </div>
                                <div>
                                    <img src="https://cdn.pixabay.com/photo/2021/11/16/15/35/technology-6801334_960_720.jpg" alt="pic" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bot">
                                    <h3 className="title">Kids Headphones Bulk 10 Pack Multi Colored For Students</h3>
                                </div>
                                <div className="border-bot pb-2 review">
                                    <p className="price">$100.00</p>                                   
                                    <div className="d-flex align-items-center gap-10">
                                            <ReactStars count={5} value={3} edit={false} size={24} activeColor="#ffd700"/>
                                            <p className="mb-0">(2 reviews)</p>
                                    </div>
                                    <a href="#review">Write a review</a>                                   
                                </div>
                                <div className="border-bot">
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Type :</h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Brand :</h3>
                                        <p className="product-data">Havells</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Category :</h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Tags :</h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Avalibility :</h3>
                                        <p className="product-data">In Stock</p>
                                    </div>
                                    <div className="d-flex gap-10 flex-column my-2">
                                        <h3 className="product-heading">Size :</h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            <span className="badge bg-white border border-secondary text-dark">S</span>
                                            <span className="badge bg-white border border-secondary text-dark">M</span>
                                            <span className="badge bg-white border border-secondary text-dark">L</span>
                                            <span className="badge bg-white border border-secondary text-dark">XL</span>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mb-2 mt-3">
                                        <h3 className="product-heading">Color :</h3>
                                        <Color/>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mb-3">
                                        <h3 className="product-heading">Quantity :</h3>
                                        <div className="d-flex gap-30 align-items-center">
                                            <input className="form-control" placeholder="0" type="number" name="" id="" style={{width:'70px'}} min={1} max={10} />
                                        </div>
                                    </div>
                                    <div className="d-flex gap-15 align-items-center mb-3">
                                        <button className="button form-control" type="submit">Add to cart</button>
                                        <button className="button signup form-control" type="submit">Buy Now</button>
                                    </div>
                                    <div className="d-flex gap-15 align-items-center mb-3">
                                        <button className="link"><FiHeart className="me-2 fs-5"/>Add to wishlist</button>
                                        <button className="link"><IoIosGitCompare className="me-2 fs-5"/>Add to compare</button>
                                    </div>
                                    <div className="d-flex gap-10 flex-column my-2 pe-2">
                                        <h3 className="product-heading">Shipping & Return</h3>
                                        <p className="product-data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae reprehenderit impedit labore mollitia incidunt aut tempora commodi, et sit aspernatur ipsum inventore nobis laboriosam nihil! Quo soluta illum cum.</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2 pe-2">
                                        <h3 className="product-heading">Product link:</h3>
                                        <button onClick={()=>copyToClipboard('productlink')} className="link"><em>Click here to copy product link</em></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="description-wrapper home-wrapper-2 p-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="bg-white p-4">                                
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, incidunt id. Quos, porro molestias consequuntur reprehenderit quod facilis earum! Nesciunt, natus, ab recusandae officia est quaerat rem ducimus dicta numquam id maiores? Distinctio sequi, molestias officiis necessitatibus, veritatis libero accusamus ratione, maxime quisquam ipsa unde iste laudantium consequatur quos asperiores? ipsum dolor, sit amet consectetur adipisicing elit. Earum, consequatur sed quas consectetur fugiat a ex totam vel provident odio numquam? Error architecto blanditiis repellat provident minima commodi facere reprehenderit esse officiis tempora voluptatibus culpa quis corrupti eos dolorem, recusandae delectus harum ea, similique dolore! Eligendi, suscipit dolor. Voluptatem iure hic eligendi provident vitae esse, unde nisi vel voluptate laboriosam!
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section id="review" className="reviews-wrapper home-wrapper-2 px-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h4>Reviews</h4>
                            <div className="review-inner-wrapper">
                                <div className="review-head pb-2 mb-2 d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4>Customer Reviews</h4>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars count={5} value={3} edit={false} size={24} activeColor="#ffd700"/>
                                            <p className="mb-0">Based on 2 reviews</p>
                                        </div>
                                    </div>
                                    {isOrdered && 
                                        <div>
                                            <button className="write-review" onClick={handleWriteReview}>Write a review</button>
                                        </div>
                                    }
                                </div>
                                {writeReview && 
                                <div className="review-form my-3 pb-4">
                                    <h4>Write a review</h4>
                                    <form action="" className="d-flex flex-column gap-15">
                                        <div>
                                            <ReactStars count={5} value={0} edit={true} size={24} activeColor="#ffd700"/>
                                        </div>
                                        <div>
                                            <textarea rows={4} type="text" name="comment" id="comment" className="form-control" placeholder="Write a comment ..." />
                                        </div>
                                        <div className="d-flex justify-content-end">        
                                            <button className="button" type="submit">Submit</button>   
                                        </div>
                                    </form>
                                </div>}
                                <div className="reviews d-flex flex-column gap-10">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className="mb-0">Cutomer</h6>
                                            <ReactStars count={5} value={3} edit={false} size={24} activeColor="#ffd700"/>
                                        </div>                                       
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam provident aperiam placeat rerum deleniti optio vero. Rem enim laboriosam aut!</p>
                                    </div>
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className="mb-0">Cutomer</h6>
                                            <ReactStars count={5} value={3} edit={false} size={24} activeColor="#ffd700"/>
                                        </div>                                       
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam provident aperiam placeat rerum deleniti optio vero. Rem enim laboriosam aut!</p>
                                    </div>
                                </div>
                            </div>                           
                        </div>
                    </div>
                </div>
            </section>
            <section className='featured-wrapper p-5 home-wrapper-2'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>You Also Like</h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct