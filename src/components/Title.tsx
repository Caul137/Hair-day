import type { PropsWithChildren } from "react";

import "../css/App.css";

export const Title = ({children}: PropsWithChildren) => (
  <h1 className="text-white text-2xl font-bold leading-tight">{children}</h1>
);