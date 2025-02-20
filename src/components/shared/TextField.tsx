import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface TextFieldProps {
  type?: "text" | "password" | "email";
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`input-group`}>
      <input
        type={type === "password" && showPassword ? "text" : type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />

      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="password-toggle"
        >
          {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>
      )}
    </div>
  );
};

export default TextField;
