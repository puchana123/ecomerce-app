import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forgot Password" />
      <BreadCrumb title="Forgot Password" />
      <Container className="login-wrapper home-wrapper-2 p-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center">
                We will send you an email to reset your password
              </p>
              <form action="" className="d-flex flex-column gap-10">
                <CustomInput type="email" name="email" placeholder="Email" />
                <div>
                  <div className="d-flex flex-column justify-content-center gap-15 align-items-center mt-3">
                    <button className="button">Submit</button>
                    <Link to="/login">Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgotPassword;
