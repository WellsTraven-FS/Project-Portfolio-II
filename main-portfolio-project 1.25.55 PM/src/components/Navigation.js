import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav style={style.navEdit}>
            <Link to="dashboard" style={style.navButtonEdit}>
                Dashboard
            </Link>
            <Link to="user" style={style.navButtonEdit}>
                User/Settings
            </Link>
            <Link to="search" style={style.navButtonEdit}>
                Search
            </Link>
            <Link to="detail" style={style.navButtonEdit}>
                Details
            </Link>
        </nav>
    );
};

export default Navigation;

const style = {
    navEdit: {
        marginTop: "35px",
        marginLeft: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    navButtonEdit: {
        textAlign: "center",
        width: "100%",
        padding: "10px",
        border: "solid",
        borderColor: "",
        borderRadius: "1rem",
        background: "white",
        color: "purple",
    },
};
