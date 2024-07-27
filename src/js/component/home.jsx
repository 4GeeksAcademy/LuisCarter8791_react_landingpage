import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./card";
import {Navbar} from "./navbar"
import {Footer} from "./footer"
import { Jumbotron } from "./jumbotron";


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<div className="d-flex justify-content-between">

				<Card/> 	
				<Card/>
				<Card/>
				<Card/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
