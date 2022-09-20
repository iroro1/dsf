import React from "react";
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <h1 style={{ marginBottom: "2px" }}>DSF</h1>
          <small>Consultants Portal</small>
        </div>
        <div
          style={{
            minHeight: "300px",
            minWidth: "300px",
            background: "#fff",
            boxShadow: "3px 3px 4px 4px #ddd",
            borderRadius: "8px",
            padding: "10px",
            position:"relative"

          }}
        >
          <h3
            style={{
              textAlign: "center",
              fontWeight: "900",
              marginBottom: "20px",
              borderBottom: "1px solid #eee",
              paddingBottom: "10px",
            }}
          >
            Login
          </h3>

          <form className="mx-10">
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
              className="btn btnOutlin btnSuccess textWhite mt15"
              type="submit"
            >
              Login
            </button>
          </form>
          <Link style={{
            position:"absolute",
            bottom:"10px",
            right:"10px"
          }} to={"/register"} >Become a consultant.</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
