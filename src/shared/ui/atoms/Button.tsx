interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children: React.ReactNode;
}

export function Button({ onClick, children, ...props }: ButtonProps) {
  return (
    <button
      className="py-5 w-full bg-[#3562A6] text-white"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
