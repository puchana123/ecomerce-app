import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";

function Home() {
  return (
    <>
      <Container className="home-wrapper-1 p-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main-banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button" to="/">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="small-banner position-relative mb-1">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>best seller</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative mb-1">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>new arrival</h4>
                  <h5>Buy iPad Air</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative mt-2">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>new arrival</h4>
                  <h5>Buy iPad Air</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative mt-2">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>new arrival</h4>
                  <h5>Buy iPad Air</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="home-wrapper-2 p-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services.map((data, index) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={index}>
                    <img src={data.image} alt="service" />
                    <div>
                      <h6>{data.title}</h6>
                      <p className="mb-0">{data.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container className="home-wrapper-2 p-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera-pic" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera-pic" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Headphone</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera-pic" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Laptop</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/laptop.jpg" alt="camera-pic" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Speaker</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/speaker.jpg" alt="camera-pic" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Home accessery</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/homeapp.jpg" alt="camera-pic" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Phone accessery</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/acc.jpg" alt="camera-pic" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Watch</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/watch.jpg" alt="camera-pic" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="featured-wrapper p-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container className="famous-wrapper p-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="images/smartwatch-01.jpg"
                alt="watch"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>
                  From $399 <br /> or 16.62/mo. <br /> for 24 mo.*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="images/smartwatch-01.jpg"
                alt="watch"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>
                  From $399 <br /> or 16.62/mo. <br /> for 24 mo.*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="images/smartwatch-01.jpg"
                alt="watch"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>
                  From $399 <br /> or 16.62/mo. <br /> for 24 mo.*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="images/smartwatch-01.jpg"
                alt="watch"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>
                  From $399 <br /> or 16.62/mo. <br /> for 24 mo.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="special-wrapper p-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Speacial Products</h3>
          </div>
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container className="popular-wrapper p-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container className="marquee-wrapper p-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container className="blog-wrapper p-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Container>
    </>
  );
}

export default Home;
