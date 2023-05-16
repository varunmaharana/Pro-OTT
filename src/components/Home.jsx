import React from "react";
import SectionCard from "./SectionCard";
import Slider from "./Slider";

const Home = ({ DataList }) => {

	const recommendedForYouList = [];
	const animatedAdventuresList = [];
	const popularShowsList = [];
	const newAndUpcomingList = [];

	DataList.map((currData) => {
		// Filter for Recommended For You
		if (currData.additionalTags.includes("Recommended")) {
			recommendedForYouList.push(currData);
		}

		// Filter for Animated Adventures
		if (currData.additionalTags.includes("Animated")) {
			animatedAdventuresList.push(currData);
		}

		// Filter for Popular Shows
		if (currData.additionalTags.includes("PopularShows")) {
			popularShowsList.push(currData);
		}

		// Filter for New & Upcoming
		if (currData.additionalTags.includes("NewUpcoming")) {
			newAndUpcomingList.push(currData);
		}
	});

	return (
		<div id="ottContentsContainer">
			<Slider />
			<SectionCard
				sectionTitle="Recommended For You"
				renderList={recommendedForYouList}
			/>
			<SectionCard
				sectionTitle="Animated Adventures"
				renderList={animatedAdventuresList}
			/>
			<SectionCard
				sectionTitle="Popular Shows"
				renderList={popularShowsList}
			/>
			<SectionCard
				sectionTitle="New & Upcoming"
				renderList={newAndUpcomingList}
			/>
		</div>
	);
};

export default Home;
