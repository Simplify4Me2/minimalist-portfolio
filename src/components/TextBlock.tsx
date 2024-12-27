import { PropsWithChildren } from "react";

type TextBlockProps = {
    className?: string;
  }
  
  export function TextBlock({ children, className }: PropsWithChildren<TextBlockProps>) {
    return (
      <p className={`font-publicSans tracking-tight text-[0.95rem] leading-[1.875rem] text-left pt-6 pb-6 min-h-[11.75rem] ${className}`}>
        {children}
      </p>
    );
  }