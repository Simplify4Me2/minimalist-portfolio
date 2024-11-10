import { PropsWithChildren } from "react";

interface IButtonProps {
  variant: "contained" | "outlined";
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant,
  className,
  onClick
}: PropsWithChildren<IButtonProps>) {
  if (variant === "contained") return <>{children}</>;

  return (
    <button
      role="link"
      onClick={onClick}
      className={`font-publicSans text-xs tracking-[0.125rem] border-[0.5px] border-solid border-black h-12 px-8 ${className}`}
    >
      {children}
    </button>
  );
}
