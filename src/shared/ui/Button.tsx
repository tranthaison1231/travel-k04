interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button className="p-4 bg-red-100" onClick={onClick}>
      {children}
    </button>
  );
}
