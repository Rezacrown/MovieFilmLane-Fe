/* eslint-disable @typescript-eslint/no-explicit-any */
interface TextInputProp {
  type: "text" | "number" | "email" | 'password';
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  handleChange?: (e?: any) => void;
  disabled?: boolean;
}

export default function TextInput(props: TextInputProp) {
  const { type, name, label, placeholder, value, handleChange, disabled } =
    props;
  return (
    <>
        <label
          className="form-label text-lg fw-medium mb-2"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          className="form-control text-lg"
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={handleChange}
        />
    </>
  );
}
