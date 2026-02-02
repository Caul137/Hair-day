import type { PropsWithChildren } from "react";

import "../css/App.css";

export const ButtonHour = ({children}: PropsWithChildren) => {
  return(
    <label className=" flex items-center justify-center p-2 text-text-gray text-sm bg-[#302f2f] border border-white/10 rounded-xl cursor-pointer  ">
      <span>{children}</span>
      <input type="radio" name="time" className="hidden" value={children as string} />
    </label>
  );
};