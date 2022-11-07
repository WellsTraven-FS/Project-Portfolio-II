import React from "react";

function Detail() {
    return (
        <div>
            <main style={style.section}>
                <h1 style={style.h1}>Detail Page</h1>
                <p style={style.p}>SOME PHOTO</p>
            </main>
        </div>
    );
}

export default Detail;

const style = {
    h1: {
        color: "green",
        textAlign: "center",
    },
    section: {
        width: "700px",
        marginTop: "50px",
    },
    p: {
        // dimensions
        width: "700px",
        height: "300px",
        borderRadius: "1rem",
        background: "gray",
        // typography
        paddingTop: "20px",
        paddingLeft: "10px",
    },
};
