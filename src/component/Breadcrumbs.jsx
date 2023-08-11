import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TeamContext } from "../hooks/useTeam";

const Breadcrumbs = () => {
    const { loc } = useContext(TeamContext);
    return (
        <nav aria-label="breadcrumb" className="ps-3 pt-3">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <NavLink
                        to="/"
                        style={{
                            color: loc === "/" ? "red" : "blue"
                        }}
                    >
                        Главная страница
                    </NavLink>
                </li>
                <li className="breadcrumb-item">
                    <NavLink
                        to="/about"
                        style={{
                            color: loc === "/about" ? "red" : "blue"
                        }}
                    >
                        About Us
                    </NavLink>
                </li>
                <li className="breadcrumb-item">
                    <NavLink
                        to="/contact"
                        style={{
                            color: loc === "/contact" ? "red" : "blue"
                        }}
                    >
                        Contacts
                    </NavLink>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                    <NavLink
                        to="/selected"
                        className="disable-link"
                        style={{
                            color: loc === "/selected" ? "red" : "blue"
                        }}
                    >
                        Избранные члены команды
                    </NavLink>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
