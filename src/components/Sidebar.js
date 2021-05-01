import React from "react";
import { ContextProvider } from "../Global/Context";
const Sidebar = () => {
  const { loader, user } = React.useContext(ContextProvider);
  const username = !loader && user && user.displayName ? user.displayName : "";
  return (
    <div className="sidebar">
      {!loader && user ? (
        <div className="sidebar__user">
          <div className="sidebar__user-avator">{username[0]}</div>
          <div className="sidebar__user-name">{username}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidebar;
