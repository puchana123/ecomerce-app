import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {AiOutlineHome,AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall,BiInfoCircle} from 'react-icons/bi'

function Contact() {
    return ( 
        <>
            <Meta title='Contact' />
            <BreadCrumb title='Contact' />
            <div className="contact-wrapper home-wrapper-2 py-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 px-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120866.81482508042!2d98.8864367371298!3d18.79423284322654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a7e90bb6f5d%3A0x98d46270a59b4367!2sChiang%20Mai%2C%20Mueang%20Chiang%20Mai%20District%2C%20Chiang%20Mai!5e0!3m2!1sen!2sth!4v1675742648244!5m2!1sen!2sth" 
                            width="600" height="450"
                            title="map" 
                            className="border-0 w-100"
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-12 mt-5 px-5">
                            <div className="contact-inner-wrapper d-flex justify-content-between">
                                <div className="col-6">
                                    <h3 className="contact-title mb-3">Contact</h3>
                                    <form action="" className="d-flex flex-column gap-15 pe-5">
                                        <div>
                                            <input type="text" className="form-control" placeholder="Name"/>
                                        </div>
                                        <div>
                                            <input type="email" className="form-control" placeholder="Email"/>
                                        </div>
                                        <div>
                                            <input type="tel" className="form-control" placeholder="Mobile Number"/>
                                        </div>
                                        <div>
                                            <textarea type="text" className="form-control" placeholder="Comments" rows={4}/>
                                        </div>
                                        <div>
                                            <button className="button">Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-6">
                                    <h3 className="contact-title mb-3">Get in touch with us</h3>
                                    <div>
                                        <ul className="ps-0">
                                            <li className="mb-3 d-flex gap-10 align-items-center">
                                                <AiOutlineHome className="fs-5" />
                                                <address className="mb-0">No.12345 Freedom, NewYark, 1111 United States</address>
                                            </li>
                                            <li className="mb-3 d-flex gap-10 align-items-center">
                                                <BiPhoneCall className="fs-5" />
                                                <a href="tel:+99 123456878">(+99)1-234-56878</a>
                                            </li>
                                            <li className="mb-3 d-flex gap-10 align-items-center">
                                                <AiOutlineMail className="fs-5" />
                                                <a href="mailto:aaa1112234@email.com">aaa1112234@email.com</a>
                                            </li>
                                            <li className="mb-3 d-flex gap-10 align-items-center">
                                                <BiInfoCircle className="fs-5" />
                                                <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );
}

export default Contact;