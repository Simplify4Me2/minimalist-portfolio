import { PropsWithChildren } from "react";

interface IButtonProps {
  variant: "contained" | "outlined";
  className?: string;
}

export function Button({
  children,
  variant,
  className,
}: PropsWithChildren<IButtonProps>) {
  if (variant === "contained") return <>{children}</>;

  return (
    <button
      className={`font-publicSans text-xs tracking-[0.125rem] border-[0.5px] border-solid border-black h-12 px-8 ${className}`}
    >
      {children}
    </button>
  );
}
