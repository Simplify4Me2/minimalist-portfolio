import { PropsWithChildren } from "react";

export function SectionHeader({ children, className }: PropsWithChildren<{ className?: string }>) {
    return (
      <h1 className={`font-ibarra font-bold text-4xl tracking-tight ${className}`}>
        {children}
      </h1>
    );
  }