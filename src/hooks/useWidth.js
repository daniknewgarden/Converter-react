import { useRef, useState, useLayoutEffect } from "react";

export function useWidth({ on = true } = {}) {
  const ref = useRef();
  const [width, set] = useState(0);
  const widthRef = useRef(width);
  const [ro] = useState(
    () =>
      new ResizeObserver((packet) => {
        console.log(ref.current.offsetWidth);
        if (ref.current && widthRef.current !== ref.current.offsetWidth) {
          widthRef.current = ref.current.offsetWidth;
          set(ref.current.offsetWidth);
        }
      })
  );

  useLayoutEffect(() => {
    if (on && ref.current) {
      set(ref.current.offsetWidth);
      ro.observe(ref.current, {});
    }
    return () => ro.disconnect();
  }, [on, ref, ro]);

  return [ref, width];
}
