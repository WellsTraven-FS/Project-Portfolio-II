import React from "react";

function UserSettings() {
    return (
        <div>
            <main>
                <h1 style={style.h1}>UserSettings</h1>
                <section style={style.section}>
                    <div style={style.photoEdit}>
                        <p>User Photo</p>
                    </div>
                    <div>
                        <div style={style.flex}>
                            <p style={style.p}>></p>
                            <h2 style={style.h2}>Playlist</h2>
                        </div>
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
        </div>
    );
}

export default UserSettings;

const style = {
    h1: {
        color: "green",
        textAlign: "center",
    },
    h2: {
        color: "red",
    },
    p: {
        // dimensions
        width: "35px",
        background: "gray",
        borderRadius: "5rem",
        // typography
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: "1px",
    },
    flex: {
        display: "flex",
        flexDirection: "row",
        gap: "10px",
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
        marginBottom: "20px",
        // typography
        paddingLeft: "10px",
    },
};
