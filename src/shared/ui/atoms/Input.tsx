type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  ref?: React.RefObject<HTMLInputElement | null>;
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
