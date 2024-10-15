import Navbar from "./NavbarCollapse";
import CustomJumbotron from "./Jumbotron";
import Grid from "./Customcard";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import React from "react";


//create your first component
const Home = () => {
	return (
		<div className="Home">
			<Navbar />
			<div className="App-content">
				<CustomJumbotron />
			</div>
			<Container fluid className="App-grid">
				<Grid />
			</Container>
			<div className="App-footer">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
