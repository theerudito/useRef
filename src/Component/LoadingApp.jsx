import { useState } from "react";
import { Card } from "./Card";

export const LoadingApp = () => {
	const [show, setShow] = useState(false);
	return (
		<>
			<h4>Loading App</h4>
			<button onClick={() => setShow(!show)}>Show/Hide</button>
			{show && <Card />}
		</>
	);
};
