import { useState } from "react";
import { Card } from "./Card";

export const LoadingApp = () => {
	const [show, setShow] = useState(true);
	return (
		<>
			<h4>Loading Page</h4>
			<button onClick={() => setShow(!show)}>Show/Hide</button>
			{show && <Card />}
		</>
	);
};
