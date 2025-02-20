import { AuthFormFields } from "../types/AuthFormTypes";

export const authFieldValidation = (
  name: string,
  value: string,
  formData: AuthFormFields
): string | null => {
  let error: string | null = null;

  const emptyField = !value.trim();

  switch (name) {
    case "email":
      if (emptyField) error = "Email is required";
      else if (!value.includes("@")) error = "Invalid email format";
      break;
    case "password":
      if (emptyField) error = "Password is required";
      else if (value.length < 6)
        error = "Password must be at least 6 characters";
      break;
    case "confirmPassword":
      if (emptyField) error = "Confirm Password is required";
      else if (value !== formData.password) error = "Passwords do not match";
      break;
    case "name":
      if (emptyField) error = "Full Name is required";
      break;
    default:
      break;
  }

  return error;
};
