interface ButtonProps {
  onClick: () => void;
}

export function Button({ onClick }: ButtonProps) {
  return (
    <button className="p-4 bg-red-100" onClick={onClick}>
      Click me
    </button>
  );
}
