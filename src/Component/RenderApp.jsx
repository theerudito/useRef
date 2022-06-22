import { useEffect, useRef, useState } from "react";

export const RenderApp = () => {
	const [text, setText] = useState("");
	const renderRef = useRef(1);

	useEffect(() => {
		const render = renderRef.current++;
		console.log(render);
	});

	return (
		<>
			<h4>RenderApp</h4>
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<p>Renders: {renderRef.current} </p>
		</>
	);
};
