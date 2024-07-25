import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./card";

//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-between">
			<Card/> 	
			<Card/>
			<Card/>
			<Card/>
		</div>
	);
};

export default Home;
