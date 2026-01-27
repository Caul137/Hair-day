import type { PropsWithChildren } from "react";

import "../css/App.css";

export default function Text({children}: PropsWithChildren) {
    return(
     <p className="Text">{children}</p>
    );
};
