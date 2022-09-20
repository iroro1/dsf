import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bgAuth">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
        className="loginBg"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              minHeight: "300px",
              minWidth: "300px",
              background: "#fff",
              boxShadow: "3px 3px 4px 4px #ddd",
              borderRadius: "8px",
              padding: "10px",
              position: "relative",
            }}
          >
            <div style={{ marginBottom: "15px" }}>
              <h1 style={{ marginBottom: "2px" }}>DSF</h1>
              <small>Consultants Portal</small>
            </div>
            <h3
              style={{
                textAlign: "center",
                fontWeight: "900",
                marginBottom: "20px",
                borderBottom: "1px solid #eee",
                paddingBottom: "10px",
              }}
            >
              Register
            </h3>

            <form className="mx-10">
              <div className="form-group-col  mb15">
                <label className="form-label" htmlFor="email">
                  Firstname
                </label>
                <input
                  className="form-input"
                  type="text"
                  name="firstName"
                  placeholder="John"
                />
              </div>
              <div className="form-group-col  mb15">
                <label className="form-label" htmlFor="email">
                  Lastname
                </label>
                <input
                  className="form-input"
                  type="text"
                  name="lastname"
                  placeholder="Doe"
                />
              </div>
              <div className="form-group-col  mb15">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-input"
                  type="text"
                  name="email"
                  placeholder="jd@gmail.com"
                />
              </div>
              <div className="form-group-col mt15">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input className="form-input" type="password" name="password" />
              </div>

              <button
                className="btn btnOutlin btnPrimary textWhite mt15"
                type="submit"
              >
                Register
              </button>
            </form>
            <Link
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                fontSize: "10px",
              }}
              to={"/"}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
