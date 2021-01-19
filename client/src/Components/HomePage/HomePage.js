import logo from "../../logo.svg";
import "./HomePage.css";

function HomePage() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Welcome To 10xAcademy React BoilerPlate (created on top of FB
					create-react-app)
				</p>
			</header>
		</div>
	);
}

export default HomePage;
