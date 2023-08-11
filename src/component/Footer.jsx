import React from "react";

const Footer = () => {
    return (
        <div className="navbar d-flex justify-content-around text-white mt-3"
        style={{ background: "#ab6c2f" }}>
            © {new Date().getFullYear()} Copyright Text
            <a className="repo" href="#!" style={{ color: "white" }}>
                Repo
            </a>
        </div>
    );
};

export default Footer;
