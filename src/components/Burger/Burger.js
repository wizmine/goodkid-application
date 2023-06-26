import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./burger.scss";

const Burger = (props) => {
  const { categories } = useSelector(({ categories }) => categories);
  const sortedList = [...categories].sort((a, b) => a.id - b.id);

  return (
    <div className={`burger ${props.burger ? "open" : ""}`}>
      <div className={`burger-panel ${props.burger ? "open-panel" : ""}`}>
        <div className="burger-panel-exit">
          <button
            onClick={() => {
              props.setBurger(!props.burger);
              props.handleHideOverflow();
            }}
          >
            &#10006;
          </button>
        </div>
        <nav className="burger-nav">
          {sortedList.map(({ id, name }) => (
            <NavLink
              onClick={() => {
                props.setBurger(!props.burger);
                props.handleHideOverflow();
              }}
              className="burger-nav-category"
              key={id}
              to={`/categories/${id}`}
            >
              {name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Burger;
