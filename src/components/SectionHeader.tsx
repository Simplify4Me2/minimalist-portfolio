import { memo, PropsWithChildren } from "react";

export const SectionHeader = memo(({ children, className }: PropsWithChildren<{ className?: string }>) => {
    return (
      <h1 className={`font-ibarra font-bold text-4xl tracking-tight ${className}`}>
        {children}
      </h1>
    );
  });