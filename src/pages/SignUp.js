import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const SignUp = ()=>{
    return(
        <>
            <Meta title='SignUp' />
            <BreadCrumb title='SignUp' />
            <div className="login-wrapper home-wrapper-2 p-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Create Account</h3>
                                <form action="" className="d-flex flex-column gap-10">
                                    <div>
                                        <input type="text" name="firstname" id="firstname" className="form-control" placeholder="First Name" />
                                    </div>
                                    <div>
                                        <input type="text" name="lastname" id="lastname" className="form-control" placeholder="Last Name" />
                                    </div>
                                    <div>
                                        <input type="email" name="email" id="login-email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div>
                                        <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                            <button className="button" type="submit">Create</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp