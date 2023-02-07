import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {BiArrowBack} from 'react-icons/bi'

const SingleBlog = ()=>{
    return(
        <>
            <Meta title='Dynamic Blog Name' />
            <BreadCrumb title='Dynamic Blog Name' />
            <div className="blog-wrapper home-wrapper-2 py-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3 ps-5">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Find By Categories</h3>
                                <div className="">
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-9 pe-5">
                            <div className="single-blog-card">
                                <Link to='/blogs' className="d-flex align-items-center gap-10 mb-3">
                                <BiArrowBack className="fs-5" />Go back to blogs</Link>
                                <h3 className="title mb-3">A Beautifull Sunday Morning Renaissance</h3>
                                <img src='/images/blog-1.jpg' alt='blog' className='img-fluid w-100 mb-3'/>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quos hic culpa. Repellendus, tenetur ullam aut possimus amet sint? Sint maiores accusamus enim quas doloribus quia iste, sequi, debitis magnam nulla obcaecati omnis ut amet explicabo sit corporis itaque! Maiores incidunt, commodi voluptates iste quo id exercitationem odit quisquam impedit! Cum fugiat ullam officia ut molestiae! Voluptate voluptatem animi reiciendis suscipit rem ratione ut obcaecati consequatur modi illo repudiandae, officiis non? Error, facilis enim possimus sequi molestias dignissimos. Quae, quam laborum. In fuga saepe, facilis sunt eveniet illum aut earum ut aperiam enim? Sunt fuga et aut ipsam, cumque delectus? ipsum dolor sit, amet consectetur adipisicing elit. Maiores cupiditate perspiciatis facere repellendus quod odit deleniti vel beatae quas vero eligendi cumque iusto, recusandae quam ipsam magni hic harum dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog