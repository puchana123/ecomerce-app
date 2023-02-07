import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";

const Blog = ()=>{
    return(
        <>
            <Meta title='Blogs' />
            <BreadCrumb title='Blogs' />
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
                            <div className="row">
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog