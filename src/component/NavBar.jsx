import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TeamContext } from "../hooks/useTeam";

const NavBar = () => {
    const { loc } = useContext(TeamContext);
    return (
        <>
            <div
                className="navbar d-flex justify-content-end "
                style={{ background: "#ab6c2f" }}
            >
                <div className="navline">
                    <ul className="nav nav-pills mt-2 d-flex justify-content-end me-5">
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className="nav-link text-decoration-underline"
                                activeClassName="selected"
                                style={{ color: "white" }}
                            >
                                About us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                className="nav-link text-decoration-underline"
                                activeClassName="selected"
                                style={{ color: "white" }}
                            >
                                Contacts
                            </NavLink>
                        </li>
                         {loc && loc !== "/selected" && <li className="nav-item">
                            <NavLink
                                to="/selected"
                                className="nav-link text-decoration-underline"
                                activeClassName="selected"
                                style={{ color: "white" }}
                            >
                                Избранные
                            </NavLink>
                        </li>}
                        {loc && loc !== "/" && (
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className="nav-link text-decoration-underline"
                                    activeClassName="selected"
                                    style={{ color: "white" }}
                                >
                                    На главную страницу
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;
