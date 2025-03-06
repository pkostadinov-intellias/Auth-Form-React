export const validateSignInFields = (
  name: string,
  value: string
): string | null => {
  if (!value.trim()) return requiredFieldError(name);

  const validators: Record<string, (val: string) => string | null> = {
    email: validateEmail,
    password: validatePassword
  };

  return validators[name]?.(value) ?? null;
};

export const validateSignUpFields = (
  name: string,
  value: string,
  password?: string
): string | null => {
  if (!value.trim()) return requiredFieldError(name);

  const validators: Record<
    string,
    (val: string, password?: string) => string | null
  > = {
    email: validateEmail,
    password: validatePassword,
    confirmPassword: (val) => validateConfirmPassword(val, password),
    name: validateName
  };

  return validators[name]?.(value, password) ?? null;
};

// Utility functions for validation
const requiredFieldError = (field: string): string => {
  const requiredFields: Record<string, string> = {
    email: "Email is required",
    password: "Password is required",
    confirmPassword: "Confirm Password is required",
    name: "Full Name is required"
  };

  return requiredFields[field] ?? "This field is required";
};

const validateEmail = (email: string): string | null =>
  !email.includes("@") ? "Invalid email format" : null;

const validatePassword = (password: string): string | null =>
  password.length < 6 ? "Password must be at least 6 characters" : null;

const validateConfirmPassword = (
  confirmPassword: string,
  password?: string
): string | null =>
  confirmPassword !== password ? "Passwords do not match" : null;

const validateName = (name: string): string | null => null; // Can be extended later
