import useAuthForm from "../../hooks/useAuthForm";
import TextField from "../shared/TextField";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SignUpForm = () => {
  const { formData, handleChange, handleSubmit, errors } =
    useAuthForm(defaultValues);

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <TextField
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name!}
        onChange={handleChange}
      />
      {errors.name && <p className="error-message">*{errors.name}</p>}

      <TextField
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error-message">*{errors.email}</p>}

      <TextField
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <p className="error-message">*{errors.password}</p>}

      <TextField
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword!}
        onChange={handleChange}
      />
      {errors.confirmPassword && (
        <p className="error-message">*{errors.confirmPassword}</p>
      )}

      <button
        type="submit"
        className="submit-button"
        disabled={Object.values(errors).some((err) => err)}
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
