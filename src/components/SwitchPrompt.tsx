import React from "react";

interface SwitchPromptProps {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}

const SwitchPrompt: React.FC<SwitchPromptProps> = ({ isLogin, setIsLogin }) => {
  return (
    <p className="switch-prompt">
      {isLogin ? (
        <>
          Don't have an account?{" "}
          <button onClick={() => setIsLogin(false)} className="switch-button">
            Sign Up
          </button>
        </>
      ) : (
        <>
          Already have an account?{" "}
          <button onClick={() => setIsLogin(true)} className="switch-button">
            Sign In
          </button>
        </>
      )}
    </p>
  );
};

export default SwitchPrompt;
