import React from "react";
import "/workspaces/LuisCarter8791_react_landingpage/src/styles/jumbotron.css"

export function Jumbotron() {
    return (
        <div className="jumbotron p-5 mb-2" style={{ backgroundColor: "lightgrey" }}>
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, voluptatem corporis? Animi iusto optio in vitae, et eum minima nemo fugiat. Quisquam velit molestias minus incidunt dolore voluptatibus perspiciatis minima.</p>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    )
}