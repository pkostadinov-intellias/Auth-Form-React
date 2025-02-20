import { useState } from "react";
import SignInForm from "./SignIn/SignInForm";
import SignUpForm from "./SignUp/SignUpForm";
import SwitchPrompt from "./SwitchPrompt";
import ToggleSwitchButton from "../shared/ToggleSwitchButton";

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

        <SwitchPrompt isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>
    </div>
  );
};

export default AuthForm;
