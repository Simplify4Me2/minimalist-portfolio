import { PropsWithChildren } from "react";
import ArticleHeader from "./ArticleHeader";

export function Article({
  title,
  children,
  className,
}: PropsWithChildren<{ title: string; className?: string }>) {
  return (
    <article
      className={`flex flex-col md:flex-row lg:justify-between ${className}`}
    >
      <div className="flex flex-col border-y-[0.25px] border-solid border-grayish-dark-blue/15 pt-8 md:pt-12 pb-7 md:my-0 md:ml-[4.25rem] lg:pb-0 lg:mx-20 lg:pt-12 lg:w-[22.5rem]">
        <ArticleHeader className="pb-1">{title}</ArticleHeader>
        {children}
      </div>
    </article>
  );
}
