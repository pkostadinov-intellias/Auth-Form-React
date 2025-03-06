import useSignInForm from "../../hooks/useSignInForm";
import PasswordField from "../common/PasswordField";
import TextField from "../common/TextField";

const defaultValues = {
  email: "",
  password: ""
};

const SignInForm = () => {
  const { formData, handleChange, handleSubmit, errors } =
    useSignInForm(defaultValues);

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <TextField
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error-message">*{errors.email}</p>}

      <PasswordField
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <p className="error-message">*{errors.password}</p>}

      <button
        type="submit"
        className="submit-button"
        disabled={Object.values(errors).some((err) => err)}
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
