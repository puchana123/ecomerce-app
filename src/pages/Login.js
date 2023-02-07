import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Login = ()=>{
    return(
        <>
            <Meta title='Login' />
            <BreadCrumb title='Login' />
            <div className="login-wrapper home-wrapper-2 p-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-4">Login</h3>
                                <form action="" className="d-flex flex-column gap-15">
                                    <div>
                                        <input type="email" name="email" id="login-email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div>
                                        <input type="password" name="password" id="login-password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div>
                                        <Link to='/forgot-password'>Forgot Password?</Link>
                                        <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                            <button className="button" type="submit">Login</button>
                                            <Link to='/signup' className="button signup">SignUp</Link>
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

export default Login