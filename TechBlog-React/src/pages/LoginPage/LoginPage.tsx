import { Link } from "react-router-dom";
import "./LoignPage.css";

function LoginPage() {
  return (
    <section className="LoginPage">
      <div className="container">
        <div id="login" className="signin-card">
          <div className="logo-image">
            <img
              src="../../../src/assets/only logo.png"
              alt="Logo"
              width="138"
            />
          </div>
          <h1 className="display1">Login</h1>
          <form className="login-form">
            <div id="form-login-username" className="form-group">
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
          </form>
          <div id="form-login-remember">
            <div className="checkbox">
              <label>Remember me?</label>
              <input
                id="remember"
                type="checkbox"
                value="yes"
                alt="Remember me"
              />
            </div>
          </div>
          <div className="login-form-button-div">
            <button
              className="btn btn-block btn-info ripple-effect"
              type="submit"
            >
              Log in
            </button>
          </div>
          <div className="register-message">
            Don't have an account yet?
            <Link to="/register">
              <a className="create-account-link">Sign Up</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
