import React from "react";
import pro_ott_logo from "../assets/pro-ott-logo.svg";

const PopUp = ({ togglePopUp, submitType, setPopUpProps }) => {
	const showPopUp = {
		display: "flex",
	};

	const hidePopUp = {
		display: "none",
	};

	// Function invoked when clicked popup background.
	const handleBgClick = () => {
		setPopUpProps({
			submitType: null,
			togglePopUp: false,
		});
	};

	return (
		<div id="popUp" style={togglePopUp ? showPopUp : hidePopUp}>
			<div className="popUpBg" onClick={handleBgClick}></div>
			<div className="popUpCard">
				<div className="logoBox">
					<img src={pro_ott_logo} alt="pro_ott_logo" />
				</div>
				<div className="inputBox">
					<input required="required" type="text" />
					<span>Username</span>
					<i></i>
				</div>

				<div className="inputBox">
					<input required="required" type="text" />
					<span>Password</span>
					<i></i>
				</div>

				<button id="loginBtn">{submitType}</button>
			</div>
		</div>
	);
};

export default PopUp;
