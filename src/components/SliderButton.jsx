import React, { useRef, useEffect } from "react";

const LeftBtn = () => {
	return (
		<button className="prevBtn">
			<i className="fa-solid fa-chevron-left"></i>
		</button>
	);
};

const RightBtn = () => {
	// Setting auto click to right button for automatic right sliding
	const buttonRef = useRef(null);
	const clickHandler = () => {};
	useEffect(() => {
		buttonRef.current.addEventListener("click", clickHandler);

		const interval = setInterval(() => {
			buttonRef.current.click();
		}, 8000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<button className="nextBtn" ref={buttonRef}>
			<i className="fa-solid fa-chevron-right"></i>
		</button>
	);
};

export { LeftBtn, RightBtn };
