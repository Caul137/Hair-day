import type { PropsWithChildren } from "react";

import "../css/App.css";

export const ButtonHour = ({children}: PropsWithChildren) => {
    return(
       <label className="label-hour">
        <span className="hour">{children}</span>
        <input type="radio" name="time" value={children as string} />
       </label>
    );
};
