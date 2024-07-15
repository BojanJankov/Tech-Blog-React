import { Link } from "react-router-dom";
import "./RegisterPage.css";

function RegisterPage() {
  return (
    <section className="RegisterPage">
      <div className="container">
        <div id="login" className="signin-card">
          <div className="logo-image">
            <img
              src="../../../src/assets/only logo.png"
              alt="Logo"
              title="Logo"
              width="138"
            />
          </div>
          <h1 className="display1">Register</h1>
          <form className="login-form">
            <div id="form-login-firstName" className="form-group">
              <input
                id="firstName"
                placeholder="First name"
                name="firstName"
                type="text"
                required
              />
              <span className="form-highlight"></span>
              <span className="form-bar"></span>
            </div>
            <div id="form-login-lastName" className="form-group">
              <input
                id="lastName"
                placeholder="Last name"
                name="lastName"
                type="text"
                required
              />
              <span className="form-highlight"></span>
              <span className="form-bar"></span>
            </div>
            <div id="form-login-email" className="form-group">
              <input
                id="username"
                placeholder="Email"
                name="username"
                type="text"
                required
              />
              <span className="form-highlight"></span>
              <span className="form-bar"></span>
            </div>
            <div id="form-login-password" className="form-group">
              <input
                id="password"
                placeholder="Password"
                name="password"
                type="password"
                required
              />
              <span className="form-highlight"></span>
              <span className="form-bar"></span>
            </div>
            <div id="form-login-rePassword" className="form-group">
              <input
                id="rePassword"
                placeholder="Confirm password"
                name="rePassword"
                type="password"
                required
              />
              <span className="form-highlight"></span>
              <span className="form-bar"></span>
            </div>
          </form>
          <div className="login-form-button-div">
            <button
              className="btn btn-block btn-info ripple-effect"
              type="submit"
            >
              Register
            </button>
          </div>
          <div className="login-message">
            Already have an account?
            <Link to="/login">
              <a>Log In</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
