import { useEffect } from "react";

export function usePageMount(title: string): void {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    document.title = `${title} | vidShare`;
  });
}
