import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

const SingleProduct = ()=>{

    const [isOrdered,setIsOrdered] = useState(true)

    return(
        <>
            <Meta title='Product Name' />
            <BreadCrumb title='Product Name' />
            <div className="main-product-wrapper home-wrapper-2 p-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <section className="description-wrapper home-wrapper-2 p-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-white p-4">
                                <h4>Description</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, incidunt id. Quos, porro molestias consequuntur reprehenderit quod facilis earum! Nesciunt, natus, ab recusandae officia est quaerat rem ducimus dicta numquam id maiores? Distinctio sequi, molestias officiis necessitatibus, veritatis libero accusamus ratione, maxime quisquam ipsa unde iste laudantium consequatur quos asperiores? ipsum dolor, sit amet consectetur adipisicing elit. Earum, consequatur sed quas consectetur fugiat a ex totam vel provident odio numquam? Error architecto blanditiis repellat provident minima commodi facere reprehenderit esse officiis tempora voluptatibus culpa quis corrupti eos dolorem, recusandae delectus harum ea, similique dolore! Eligendi, suscipit dolor. Voluptatem iure hic eligendi provident vitae esse, unde nisi vel voluptate laboriosam!
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section className="reviews-wrapper home-wrapper-2 p-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4>Customer Reviews</h4>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars count={5} value={3} edit={false} size={24} activeColor="#ffd700"/>
                                        <p className="mb-0">Based on 2 reviews</p>
                                    </div>
                                </div>
                                {isOrdered && 
                                    <div>
                                        <button className="write-review">Write a review</button>
                                    </div>
                                }
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