import { useEffect, useRef, useState } from "react";

export const ScrollAnimated = () => {
	const [background, setBackground] = useState("orange");
	const divRef = useRef();

	useEffect(() => {
		const handleScroll = () => {
			const div = divRef.current;

			const { y } = div.getBoundingClientRect();

			const backgroundColor = y <= 0 ? "orangered" : "orange";

			setBackground(backgroundColor);
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<h4>ScrollAnimated</h4>
			<div
				ref={divRef}
				style={{
					height: "300px",
					width: "200px",
					margin: "auto",
					background: background
				}}>
				<h5>Set Backgrund Color </h5>
			</div>
		</>
	);
};
