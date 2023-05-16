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
                        redirectPath="/channels"
                        text="Channels"
                    />
                    <ListItem
                        iconClass="fa-solid fa-language"
                        redirectPath="/languages"
                        text="Languages"
                    />
                    <ListItem
                        iconClass="fa-solid fa-book"
                        redirectPath="/genres"
                        text="Genres"
                    />
				</ul>
			    <Footer />
			</nav>
		</div>
	);
};

export default SideNavigationBar;
