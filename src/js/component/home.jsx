import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar";
import { Card } from "./card";
import { Footer } from "./footer";
import { Jumbotron } from "./jumbotron";


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="d-flex justify-content-center align-items-center flex-column ">
				<Jumbotron />
				<div className="d-flex flex-row">
					<div className="">
						<Card />
					</div>
					<div className="">
						<Card />
					</div>
					<div className="">
						<Card />
					</div>
					<div className="">
						<Card />
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
