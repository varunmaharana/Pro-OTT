import React from "react";

const SliderContent = ({ title }) => {
	return (
		<div className="sliderContent">
			<img
				className="sliderImg"
				src={`/Slider_Images/${title} Banner.jpg`}
				alt={title}
			/>

			{/* Only showing slider content cards on banner image hover */}
			<div className="sliderContentCards">
				<div className="sliderContentCard">
					<img
						src={`/Slider_Images/${title}_E1.jpg`}
						alt={`${title} E1`}
					/>
					<span>Watch Episode 1</span>
				</div>
				<div className="sliderContentCard">
					<img
						src={`/Slider_Images/${title}_E2.jpg`}
						alt={`${title} E2`}
					/>
					<span>Watch Episode 2</span>
				</div>
				<div className="sliderContentCard">
					<img
						src={`/Slider_Images/${title}_E3.jpg`}
						alt={`${title} E3`}
					/>
					<span>Watch Episode 3</span>
				</div>
			</div>
		</div>
	);
};

export default SliderContent;
