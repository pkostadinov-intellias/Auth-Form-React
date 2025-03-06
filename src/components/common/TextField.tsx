import { FC } from "react";

interface TextFieldProps {
  type?: "text" | "email";
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<TextFieldProps> = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange
}) => {
  return (
    <div className={"input-group"}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={"input-field"}
      />
    </div>
  );
};

export default TextField;
