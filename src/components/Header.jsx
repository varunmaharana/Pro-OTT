import React, { useState } from "react";
import pro_ott_logo from "../assets/pro-ott-logo.svg";
import ListItem from "./ListItem";
import { Link, NavLink } from "react-router-dom";
import PopUp from "./PopUp";

const Header = () => {
	// Managing state to change search bar style.
	const [searchBarFilledBorderStyle, setSearchBarFilledBorderStyle] =
		useState(null);

	// Managing state to show/hide popup box.
	const [popUpProps, setPopUpProps] = useState({
		submitType: null,
		togglePopUp: false,
	});

	// Function invoked on mouse over search bar.
	const addBorderBottomToSearchBar = (event) => {
		if (event.target.value !== "") {
			setSearchBarFilledBorderStyle({
				svg: {
					stroke: "var(--red)",
					strokeWidth: "1px",
				},
				input: {
					borderBottomColor: "var(--red)",
					width: "100%",
				},
			});
		} else {
			setSearchBarFilledBorderStyle(null);
		}
	};

	// Function invoked on clicking Login Button
	const handleLoginClick = () => {
		console.log("login click");
		setPopUpProps({
			submitType: "Login",
			togglePopUp: true,
		});
	};
	// Function invoked on clicking Subscribe Button
	const handleSubscribeClick = () => {
		console.log("subscribe click");
		setPopUpProps({
			submitType: "Subscribe",
			togglePopUp: true,
		});
	};

	return (
		<header>
			<div className="logoBox">
				<Link to="/">
					<img src={pro_ott_logo} alt="pro_ott_logo" />
				</Link>
			</div>
			<nav id="topNavbar">
				<ul>
					<ListItem redirectPath="/Pro-OTT" text="Home" />
					<ListItem redirectPath="/shows" text="Shows" />
					<ListItem redirectPath="/movies" text="Movies" />
					<ListItem redirectPath="/genres/Comedy" text="Comedy" />
					<ListItem redirectPath="/news" text="News" />
				</ul>
			</nav>
			<div className="inputs">
				<div className="searchBarContainer">
					<div className="searchBox">
						<div className="group">
							<svg
								style={
									searchBarFilledBorderStyle &&
									searchBarFilledBorderStyle.svg
								}
								className="icon"
								aria-hidden="true"
								viewBox="0 0 24 24"
							>
								<g>
									<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
								</g>
							</svg>
							<input
								style={
									searchBarFilledBorderStyle &&
									searchBarFilledBorderStyle.input
								}
								onChange={addBorderBottomToSearchBar}
								placeholder="Search"
								type="text"
								className="input"
								spellCheck="false"
							/>
						</div>
					</div>
				</div>
				<div className="buttons">
					<button id="subscribeBtn" onClick={handleSubscribeClick}>
						Subscribe
					</button>
					<button id="loginBtn" onClick={handleLoginClick}>
						Login
					</button>
					<PopUp
						submitType={popUpProps.submitType}
						togglePopUp={popUpProps.togglePopUp}
						setPopUpProps={setPopUpProps}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
