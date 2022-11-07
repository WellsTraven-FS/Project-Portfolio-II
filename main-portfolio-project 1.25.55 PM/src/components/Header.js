import React from "react";

const Header = () => {
    return (
        <section>
            <header style={style.header}>
                <h1>Ch-Ears</h1>
            </header>
            <section style={style.section}>
                <button style={style.buttonLogonEdit}>Logon</button>
                <div>
                    <input placeholder="  Search" style={style.input} />,
                </div>
                <button style={style.buttonSearchEdit}>Search</button>
            </section>
        </section>
    );
};

export default Header;

const style = {
    header: {
        // dimensions
        margin: "auto",
        height: "100px",
        paddingTop: "30px",
        // typography
        fontSize: "25px",
        textAlign: "center",
        color: "white",
        background: "linear-gradient(purple, black)",
    },
    input: {
        width: "800px",
        height: "50px",
        borderRadius: "1rem",
    },
    section: {
        marginTop: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonLogonEdit: {
        width: "80px",
        marginLeft: "20px",
        marginTop: "5px",
        marginBottom: "5px",
        borderRadius: "1rem",
    },
    buttonSearchEdit: {
        width: "80px",
        marginRight: "20px",
        marginTop: "5px",
        marginBottom: "5px",
        borderRadius: "1rem",
    },
    dashBoard: {
        background: "white",
    },
};
