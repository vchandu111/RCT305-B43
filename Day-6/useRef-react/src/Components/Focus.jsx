import { useEffect, useRef } from "react";

function Focus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <input ref={inputRef} type="text" placeholder="Focus on mount" />
    </>
  );
}

export default Focus;
