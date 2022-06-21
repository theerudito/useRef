import { CopyApp } from "./Component/CopyApp";
import { FocusApp } from "./Component/FocusApp";
import { LoadingApp } from "./Component/LoadingApp";
import { RenderApp } from "./Component/RenderApp";
import { ReproductorVideo } from "./Component/ReproductorVideo";
import { ScrollAnimation } from "./Component/ScrollAnimation";
import "./styles.css";

export default function App() {
	return (
		<div className="App">
			<h1>UseRef</h1>
			{/* <FocusApp /> */}
			{/* <CopyApp /> */}
			{/* <ReproductorVideo /> */}
			{/* <ScrollAnimation /> */}
			{/* <RenderApp /> */}
			<LoadingApp />
		</div>
	);
}
