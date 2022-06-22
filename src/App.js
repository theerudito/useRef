import { LoadingApp } from "./Component/Cards/LoadingApp";
import { CopyApp } from "./Component/CopyApp";
import { FocusApp } from "./Component/Focus";
import { RenderApp } from "./Component/RenderApp";
import { ReproductorApp } from "./Component/Reproductor";
import { ScrollAnimated } from "./Component/ScrollAnimated";
import "./styles.css";
export default function App() {
	return (
		<div className="App">
			<h1>UseRef</h1>
			<CopyApp />
			<hr />
			<FocusApp />
			<hr />
			<ReproductorApp />
			<hr />
			<ScrollAnimated />
			<hr />
			<RenderApp />
			<hr />
			<LoadingApp />
		</div>
	);
}
