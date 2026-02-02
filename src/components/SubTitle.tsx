import type { PropsWithChildren } from "react";

import "../css/App.css";

export const SubTitle = ({children}: PropsWithChildren) => (
  <h3 className="text-gray-400 text-[14px] mb-4">{children}</h3>
);
