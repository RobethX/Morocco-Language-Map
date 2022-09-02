import logo from "./logo.svg";
import "./App.css";
import Map from "./components/Map";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Map />
			</header>
		</div>
	);
}

export default App;
