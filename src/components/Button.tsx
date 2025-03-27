import { PropsWithChildren } from "react";
import DownArrowsIcon from "./../assets/icons/down-arrows.svg";
import WhiteDownArrowsIcon from "./../assets/icons/white-down-arrows.svg";

interface IButtonProps {
  variant: "contained" | "contained-with-down-arrow" | "outlined";
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant,
  className,
  onClick,
}: PropsWithChildren<IButtonProps>) {
  if (variant === "contained-with-down-arrow")
    return (
      <button className="flex items-center h-12 w-[12.5rem] bg-dark-blue hover:bg-slightly-desaturated-cyan group">
        <img src={DownArrowsIcon} className="h-full p-4 group-hover:filter group-hover:hidden" />
        <img src={WhiteDownArrowsIcon} className="h-full p-4 hidden group-hover:filter group-hover:inline-block" />
        <p className="font-publicSans w-full text-white text-xs font-extralight tracking-[0.15rem]">
          {children}
        </p>
      </button>
    );

  if (variant === "contained")
    return (
      <button className="flex items-center h-12 w-[12.5rem] bg-dark-blue">
        <p className="font-publicSans w-full text-white text-xs font-extralight tracking-[0.15rem]">
          {children}
        </p>
      </button>
    );

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
