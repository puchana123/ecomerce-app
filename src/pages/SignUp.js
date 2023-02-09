import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const SignUp = () => {
  return (
    <>
      <Meta title="SignUp" />
      <BreadCrumb title="SignUp" />
      <Container className="login-wrapper home-wrapper-2 p-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Create Account</h3>
              <form action="" className="d-flex flex-column gap-10">
                <CustomInput
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                />
                <CustomInput
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                />
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                    <button className="button" type="submit">
                      Create
                    </button>
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

export default SignUp;
