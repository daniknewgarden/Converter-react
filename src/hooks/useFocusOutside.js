import { useEffect } from "react";

export const useFocusOutside = (ref, callback) => {
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("blur", handleBlur);
    return () => {
      document.removeEventListener("blur", handleBlur);
    };
  }, []);
};
