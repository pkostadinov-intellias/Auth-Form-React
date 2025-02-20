import { useState } from "react";
import { AuthFormFields } from "../types/AuthFormTypes";
import { authFieldValidation } from "../utility/AuthFormValidation";

const useAuthForm = (defaultValues: AuthFormFields) => {
  const [formData, setFormData] = useState<AuthFormFields>(defaultValues);
  const [errors, setErrors] = useState<Partial<AuthFormFields>>({});

  const validateField = (name: string, value: string) => {
    const error = authFieldValidation(name, value, formData);

    setErrors((prevErrors) => {
      if (error) {
        return { ...prevErrors, [name]: error };
      } else {
        const newErrors = { ...prevErrors };
        delete newErrors[name as keyof AuthFormFields];
        return newErrors;
      }
    });

    return error;
  };

  const validateForm = () => {
    let hasErrors = false;
    const newErrors: Partial<AuthFormFields> = {};

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        hasErrors = true;
        newErrors[key as keyof AuthFormFields] = error;
      }
    });

    if (hasErrors) setErrors(newErrors);
    return !hasErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Form submitted successfully:", formData);

    setFormData(defaultValues);
  };

  return { formData, handleChange, handleSubmit, errors };
};

export default useAuthForm;
