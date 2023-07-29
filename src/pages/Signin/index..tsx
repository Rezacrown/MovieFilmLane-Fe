import TextInput from "../../components/TextInput";
import { useNavigate } from 'react-router-dom';

export default function Signin_Page() {
  const navigate = useNavigate()
  return (
    <>
      <section
        className=""
        style={{ background: "hsla(0, 0%, 100%, 0.05)", height: "100vh" }}
      >
        <div className="mask d-flex align-items-center h-100 ">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div
                  className="card"
                  style={{
                    borderRadius: "15px",
                    background: "hsl(250, 22%, 70%)",
                  }}
                >
                  <div className="card-body p-5 d-flex ion-justify-content-center ion-align-items-center flex-column">
                    <h2 className="text-uppercase text-center mb-5">
                      Sign In Form
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <TextInput
                          type="email"
                          label="Email"
                          name="email"
                          placeholder="Your Email"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <TextInput
                          type="password"
                          label="password"
                          name="password"
                          placeholder="Your Password"
                        />
                      </div>

                      <div className="d-flex justify-content-center mt-5">
                        <button
                          type="button"
                          className="btn btn-light btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Sign In
                        </button>
                      </div>
                    </form>

                    <div className="d-flex mx-auto mt-5 text-sm">
                      <span className="text-sm">
                        Not have Account?
                        <p
                          className="text-primary d-block"
                          style={{ cursor: "pointer", margin: "auto" }}
                          onClick={() => navigate("/signup")}
                        >
                          Sign Up now
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
