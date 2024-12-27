import { cn } from "~/shared/utils/cn";

interface SocialButtonProps {
  icon: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "default";
}

export function SocialButton({
  icon,
  children,
  variant = "default",
  className,
}: SocialButtonProps) {
  return (
    <button
      className={cn("flex py-5 justify-center border", className, {
        "text-black bg-white": variant === "default",
        "border-primary text-white bg-primary": variant === "primary",
      })}
    >
      <div className="flex gap-4">
        <img src={icon} alt="" className="size-6" />
        <p> {children}</p>
      </div>
    </button>
  );
}
