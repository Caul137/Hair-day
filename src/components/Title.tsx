import type { PropsWithChildren } from "react";

import "../css/App.css";

export const Title = ({children}: PropsWithChildren) => {
    return(
       <h1 className="Title">{children}</h1>
    );
};
