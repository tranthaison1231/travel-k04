type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ onChange, value, onKeyUp, placeholder }: InputProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
      placeholder={placeholder}
      className="px-6 py-5 w-full border border-gray-200 rounded-md"
    />
  );
}
