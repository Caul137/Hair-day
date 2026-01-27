import type { PropsWithChildren } from "react";

import "../css/App.css";

export default function TextBold({children}: PropsWithChildren) {
    return(
     <p className="Text-bold">{children}</p>
    );
};
