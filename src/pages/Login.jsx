import { useState } from "react";
import LoginComp from "../components/LoginComp";
import SignInComp from "../components/SignInComp";

function Login() {
  let [isLogin, setIsLogin] = useState(false);
  return (
    <div className="login-page">
      <div className="login-signup">
        <div className="login-container">
          <div className="login-header">
            <div className="sign-up-text">
              {!isLogin ? "Sign Up" : "Log In"}
            </div>
            <div className="underline"></div>
          </div>
          {!isLogin ? <SignInComp /> : <LoginComp />}
        </div>
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
        <div className="submit-container">
          <button
            className="submit"
            onClick={() => {
              setIsLogin(false);
            }}
          >
            Sign Up
          </button>
          <button
            className="submit"
            onClick={() => {
              setIsLogin(true);
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
