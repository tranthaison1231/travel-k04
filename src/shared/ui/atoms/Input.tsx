import { RefCallBack } from "react-hook-form";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  ref?: RefCallBack;
};

export function Input({
  onChange,
  value,
  onKeyUp,
  placeholder,
  ref,
  ...props
}: InputProps) {
  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
      placeholder={placeholder}
      className="px-6 py-5 w-full border border-gray-200 rounded-md"
      {...props}
    />
  );
}