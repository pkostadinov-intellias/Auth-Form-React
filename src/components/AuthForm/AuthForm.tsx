import { useState } from "react";
import ToggleSwitchButton from "../common/ToggleSwitchButton";
import SignUpForm from "../SignUp/SignUpForm";
import SignInForm from "../SignIn/SignInForm";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <ToggleSwitchButton
          isToggled={isLogin}
          setIsToggled={setIsLogin}
          firstOption={"Sign In"}
          secondOption={"Sign Up"}
        />

        <h2 className="auth-title">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        {isLogin ? <SignInForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default AuthForm;
