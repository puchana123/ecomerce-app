import React from 'react';
import { Link } from 'react-router-dom';
import {BsLinkedin,BsYoutube,BsGithub,BsInstagram} from 'react-icons/bs'

function Footer() {
    return ( 
        <>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-5'>
                            <div className='footer-top-data d-flex gap-30 align-items-center'>
                                <img src='/images/newsletter.png' alt='newsletter-icon'/>
                                <h2 className='text-white mb-0'>Sign Up for Newsletter</h2>
                            </div>
                        </div>
                        <div className='col-7'>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    className="form-control py-1" 
                                    placeholder="Your Email Adress" 
                                    aria-label="Your Email Adress" 
                                    aria-describedby="basic-addon2" />
                                <span className="input-group-text p-2" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-4'>
                            <h4 className='text-white mb-4'>Contact Us</h4>
                            <div>
                                <address className='text-white fs-6'>
                                    Demo Store <br/> No.12345 Freedom, NewYark, 1111 <br/> United States
                                </address>
                                <a href='tel:+99 123456878' className='mt-2 d-block mb-0 text-white'>(+99)1-234-56878</a>
                                <a href='mailto:aaa1112234@email.com' className='mt-2 d-block mb-0 text-white'>aaa1112234@email.com</a>
                                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                                    <a className='text-white' href='/'>
                                        <BsGithub className='fs-4'/>
                                    </a>
                                    <a className='text-white' href='/'>
                                        <BsInstagram className='fs-4' />
                                    </a>
                                    <a className='text-white' href='/'>
                                        <BsLinkedin className='fs-4' />
                                    </a>
                                    <a className='text-white' href='/'>
                                        <BsYoutube className='fs-4' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='text-white mb-4'>Information</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1' to='/privacypolicy'>Privacy Policy</Link>
                                <Link className='text-white py-2 mb-1' to='/refundpolicy'>Refund Policy</Link>
                                <Link className='text-white py-2 mb-1' to='/shippingpolicy'>Shipping Policy</Link>
                                <Link className='text-white py-2 mb-1' to='/termandconditions'>Terms & Conditions</Link>
                                <Link className='text-white py-2 mb-1' to='/blogs'>Blogs</Link>
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='text-white mb-4'>Account</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1' to=''>About Us</Link>
                                <Link className='text-white py-2 mb-1' to=''>Faq</Link>
                                <Link className='text-white py-2 mb-1' to=''>Contact</Link>
                            </div>
                        </div>
                        <div className='col-2'>
                            <h4 className='text-white mb-4'>Quick Links</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1' to=''>Laptops</Link>
                                <Link className='text-white py-2 mb-1' to=''>Headphones</Link>
                                <Link className='text-white py-2 mb-1' to=''>Tablets</Link>
                                <Link className='text-white py-2 mb-1' to=''>Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='text-center mb-0 text-white'>
                                &copy;{new Date().getFullYear()}; Powered by Developer's Coner
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
     );
}

export default Footer;