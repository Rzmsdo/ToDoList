import React from "react";
import { ToDoList } from "./toDoList";


//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="d-block justify-content-center mx-auto">
		<ToDoList/>
		
		</div>
	);
};

export default Home;
