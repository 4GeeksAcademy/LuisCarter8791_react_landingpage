import React from "react";
import "/workspaces/LuisCarter8791_react_landingpage/src/styles/card.css"

export function Card() {
    return (
        <div className="card" style={{width: "20rem", marginTop: "17px", marginLeft: "17px", marginRight: "17px", marginBottom: "0px"}}>
            <img src="https://picsum.photos/100/100" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    )
};
