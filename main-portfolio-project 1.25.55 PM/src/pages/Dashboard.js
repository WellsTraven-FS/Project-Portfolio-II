import React from "react";

function Dashboard() {
    return (
        <main>
            <h1 style={style.h1}>Dashboard</h1>
            <section style={style.section}>
                <div style={style.photoEdit}>
                    <p>SOME PHOTO</p>
                </div>
                <div>
                    <div style={style.songEdit}>
                        <p>SONG</p>
                    </div>
                    <div style={style.songEdit}>
                        <p>SONG</p>
                    </div>
                    <div style={style.songEdit}>
                        <p>SONG</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Dashboard;

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
    photoEdit: {
        // dimensions
        width: "400px",
        height: "300px",
        borderRadius: "1rem",
        background: "gray",
    },
    songEdit: {
        // dimensions
        width: "200px",
        height: "40px",
        borderRadius: "1rem",
        background: "gray",
        marginBottom: "50px",
        // typography
        paddingLeft: "10px",
    },
};
