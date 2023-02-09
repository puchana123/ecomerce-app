import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const TermAndConditions = () => {
  return (
    <>
      <Meta title="TermAnd Conditions" />
      <BreadCrumb title="TermAnd Conditions" />
      <Container className="policy-wrapper home-wrapper-2 p-5">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndConditions;
