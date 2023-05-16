import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import SliderContent from "./SliderContent";
import { LeftBtn, RightBtn } from "./SliderButton";

const Slider = () => {
	const titleList = ["Suits", "Mirzapur", "Young Sheldon"];

	return (
		<div id="slider">
			<Carousel
				className="slide"
				responsive={true}
				slide={1}
				transition={1}
				leftArrow={<LeftBtn />}
				rightArrow={<RightBtn />}
			>
				{/* Render slider content cards */}
				{titleList.map((title, index) => {
					return <SliderContent key={index} title={title} />;
				})}
			</Carousel>
		</div>
	);
};

export default Slider;
