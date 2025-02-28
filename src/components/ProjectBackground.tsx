import { PropsWithChildren } from "react";
import { TextBlock } from "./TextBlock";

export function ProjectBackground({ children }: PropsWithChildren) {
  return (
    <article>
      <h2 className="font-ibarra font-medium text-[2rem] tracking-tight pt-12 lg:pt-0">
        Project Background
      </h2>
      <TextBlock
        tracking="tight"
        fontSize="[0.95rem]"
        className="lg:pr-1 opacity-80"
      >
        {children}
      </TextBlock>
    </article>
  );
}
