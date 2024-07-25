import React from "react";

export function Card() {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACUCAMAAAC+99ssAAAAKlBMVEWAgID////39/eioqJ7e3vh4eGbm5uWlpb09PTp6emzs7N4eHiTk5Otra305ieWAAAArElEQVR4nO3cuRGDQBQFwV1A4lT+6crHYKue8zF6IugIpvU316oBj9Hl0eXR5dHl0eXddftc2TE96z7nUtd5bQNdK2xZ6ejo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OhyXeHoa3z62r+V/QaXtD6V1ge6V0WXR5dHl0eX9wf0dTB024OoewAAAABJRU5ErkJggg=="} className="card-img-top" alt="..."/>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title mx-auto">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary btn-sm">Find Out More!</a>
                </div>
        </div>
)
}
