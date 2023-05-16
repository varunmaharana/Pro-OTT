import React from "react";
import ListItem from "./ListItem";
import Footer from "./Footer";

const SideNavigationBar = () => {
	return (
		<div id="sideNavBar">
			<nav>
                <h1>Browse Categories</h1>
				<ul>
					<ListItem
                        iconClass="fa fa-television"
                        redirectPath="/Pro-OTT/channels"
                        text="Channels"
                    />
                    <ListItem
                        iconClass="fa-solid fa-language"
                        redirectPath="/Pro-OTT/languages"
                        text="Languages"
                    />
                    <ListItem
                        iconClass="fa-solid fa-book"
                        redirectPath="/Pro-OTT/genres"
                        text="Genres"
                    />
				</ul>
			    <Footer />
			</nav>
		</div>
	);
};

export default SideNavigationBar;
