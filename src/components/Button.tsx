import { PropsWithChildren } from "react";

export function Button({ children, className, onClick } : PropsWithChildren<{ className?: string, onClick: () => void }>) {
  return <button onClick={onClick} className={`flex items-center h-12 w-[12.5rem] bg-dark-blue hover:bg-slightly-desaturated-cyan ${className}`}>
    {children}
  </button>
};
