import TextInput from "../../components/TextInput";

import { useNavigate } from "react-router-dom";

export default function Signup_Page() {
  const navigate = useNavigate();
  return (
    <>
      <section
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
                    background: "hsl(0, 0%, 74%)",
                  }}
                >
                  <div className="card-body p-5 d-flex flex-column ion-justify-content-center ion-align-items-center">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <TextInput
                          type="text"
                          label="Full Name"
                          name="name"
                          placeholder="Your Name"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <TextInput
                          type="email"
                          label="Email"
                          name="naemailme"
                          placeholder="Your Email"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <TextInput
                          type="password"
                          label="Password"
                          name="password"
                          placeholder="Your Password"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <TextInput
                          type="password"
                          label="Confirm Password"
                          name="confirmPassword"
                          placeholder="Repeat Your Password"
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-block btn-lg gradient-custom-4 text-body"
                          style={{ background: "hsl(57, 97%, 45%)" }}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                    <div className="d-flex mx-auto mt-3 text-sm">
                      <span>
                        Already have Account?
                        <p
                          className="text-primary d-block"
                          style={{ cursor: "pointer", margin: "auto" }}
                          onClick={() => navigate("/signin")}
                        >
                          Sign In
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
