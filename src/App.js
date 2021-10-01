import "./App.css";
import Lottery from "./Lottery";

function App() {
	return (
		<div className="App">
			<h1> Lottery Game! </h1>
			<section>
				<h4>Lottery with defaul props</h4>
				<Lottery />
			</section>
			<section>
				<h4>Lottery with custom props</h4>
				<Lottery header="Bingo!" maxRange={100} balls={3} />
			</section>
		</div>
	);
}

export default App;
