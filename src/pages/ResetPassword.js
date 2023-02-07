import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const ResetPassword = ()=>{
    return(
        <>
            <Meta title='Reset Password' />
            <BreadCrumb title='Reset Password' />
            <div className="login-wrapper home-wrapper-2 p-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Reset Password</h3>
                                <form action="" className="d-flex flex-column gap-10">
                                    <div>
                                        <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div>
                                        <input type="password" name="confirm-password" id="confirm-password" className="form-control" placeholder="Confirm Password" />
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                            <button className="button" type="submit">Submit</button>
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

export default ResetPassword