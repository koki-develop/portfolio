import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      className="inline-block rounded border border-black bg-gray-200 px-2 py-1 font-medium text-xs uppercase leading-normal"
      onClick={() => setCount((count) => count + 1)}
    >
      Counter {count}
    </button>
  );
}
