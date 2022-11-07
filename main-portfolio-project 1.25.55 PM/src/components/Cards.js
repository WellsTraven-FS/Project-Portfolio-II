import React from "react";

const Ads = (props) => {
    return (
        <aside style={styles.asideContainer}>
            <img
                src={props.AdsImg}
                alt={props.AdsAlt}
                style={styles.imageEdit}
            />
            <h1>{props.AdsTitle}</h1>
            <p>{props.AdsDescription}</p>
        </aside>
    );
};

export default Ads;

const styles = {
    asideContainer: {
        width: "200px",
        padding: "5px",
        margin: "10px",
        marginTop: "35px",
        marginRight: "20px",
        dipslay: "flex",
        flexDirection: "column",
        background: "gray",
        borderRadius: ".50rem",
    },
    imageEdit: {
        width: "180px",
        height: "100px",
        paddingTop: "5px",
        paddingLeft: "10px",
        borderRadius: ".50rem",
    },
};
