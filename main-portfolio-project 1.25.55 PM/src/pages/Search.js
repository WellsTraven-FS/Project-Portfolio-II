import React from "react";

function Search() {
    return (
        <div>
            <main>
                <h1 style={style.h1}>Search</h1>
                <section style={style.section}>
                    <div>
                        <div style={style.infoEdit}>
                            <p>INFO</p>
                        </div>
                        <div style={style.infoEdit}>
                            <p>INFO</p>
                        </div>
                        <div style={style.infoEdit}>
                            <p>INFO</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Search;

const style = {
    h1: {
        color: "green",
        textAlign: "center",
    },
    section: {
        width: "700px",
        marginTop: "50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    infoEdit: {
        // dimensions
        width: "700px",
        height: "80px",
        borderRadius: "1rem",
        background: "gray",
        marginBottom: "50px",
        // typography
        paddingLeft: "10px",
        paddingTop: "10px",
    },
};
