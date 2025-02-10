interface MenuBarProps {
  name: string;
}

export function MenuBar({ name }: MenuBarProps) {
  return (
    <div className="text-base font-normal hover:border-b-2 border-[#3562A6] hover:text-[#3562A6] hover:font-bold uppercase box-border h-6">
      {name}
    </div>
  );
}

