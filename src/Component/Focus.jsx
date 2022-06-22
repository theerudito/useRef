import { useRef, useState } from "react";

export const FocusApp = () => {
	const [text, setText] = useState("");
	const focusRef = useRef();

	const handleFocus = () => {
		const input = focusRef.current;
		input.focus();
	};

	return (
		<>
			<h4>FocusApp</h4>
			<input
				ref={focusRef}
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={handleFocus}>Focus</button>
		</>
	);
};
