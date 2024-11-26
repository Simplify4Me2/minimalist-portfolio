import { useScrollToTop } from "../../hooks";

export function Contact() {
  useScrollToTop();

  return (
    <>
      <main className="max-w-screen-md lg:max-w-screen-xl px-8 md:px-10 lg:px-[5.25rem] lg:pt-0">
        <span>Contact Me</span>
      </main>
    </>
  );
}
