import type { PropsWithChildren } from "react";

import "../css/App.css";

export default function Text({children}: PropsWithChildren) {
  return <p className="text-gray-400 text-sm mb-1">{children}</p>;
}