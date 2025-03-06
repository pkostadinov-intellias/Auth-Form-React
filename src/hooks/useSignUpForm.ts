import { useState } from "react";
import { AuthFormFields } from "../types/AuthFormTypes";
import { validateSignUpFields } from "../utility/AuthValidation";

const useSignUpForm = (defaultValues: AuthFormFields) => {
  const [formData, setFormData] = useState<AuthFormFields>(defaultValues);
  const [errors, setErrors] = useState<Partial<AuthFormFields>>({});

  const validateField = (name: keyof AuthFormFields, value: string) => {
    const password = name === "confirmPassword" ? formData.password : undefined;
    const error = validateSignUpFields(name, value, password);

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (error) newErrors[name] = error;
      else delete newErrors[name];
      return newErrors;
    });

    return error;
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<AuthFormFields> = {};

    Object.entries(formData).forEach(([key, value]) => {
      const password =
        key === "confirmPassword" ? formData.password : undefined;
      const error = validateSignUpFields(
        key as keyof AuthFormFields,
        value,
        password
      );
      if (error) newErrors[key as keyof AuthFormFields] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name as keyof AuthFormFields, value);
  };

  const resetForm = () => {
    setFormData(defaultValues);
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Sign-up successful:", formData);
    resetForm();
  };

  return { formData, handleChange, handleSubmit, resetForm, errors };
};

export default useSignUpForm;
