import React from "react";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

import "./appNavBar.scss";

const AppNavBar = () => {
  const { categories } = useSelector(({ categories }) => categories);
  const sortedList = [...categories].sort((a, b) => a.id - b.id).slice(0, -1);

  return (
    <nav className="navigation">
      <div className="navigation-bar">
        <button className="navigation-bar-designs">
          <h2 className="navigation-bar-designs-text">DESIGNS</h2>
        </button>
        <ul className="navigation-bar-designs-hidden">
          {sortedList.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                className="navigation-bar-designs-hidden-category"
                key={id}
                to={`/categories/${id}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink
          to={`/categories/${9}`}
          className="navigation-bar-mockups"
        >
          <h2 className="navigation-bar-mockups-text">MOCKUPS</h2>
        </NavLink>
      </div>
    </nav>
  );
};

export default AppNavBar;
