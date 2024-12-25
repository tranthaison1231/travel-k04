interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button className="py-5 w-full bg-[#3562A6] text-white" onClick={onClick}>
      {children}
    </button>
  );
}
