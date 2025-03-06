import { useState, FC } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordFieldProps {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: FC<PasswordFieldProps> = ({
  name,
  placeholder,
  value,
  onChange
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={"input-group"}>
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="password-toggle"
      >
        {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
      </button>
    </div>
  );
};

export default PasswordField;
