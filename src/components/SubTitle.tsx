import type { PropsWithChildren } from "react";

import "../css/App.css";

export const SubTitle = ({children}: PropsWithChildren) => {
    return(
      <h3 className="SubTitle">{children}</h3>
    );
};
