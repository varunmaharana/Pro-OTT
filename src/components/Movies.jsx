import React from "react";
import SectionCard from "./SectionCard";

const Movies = ({
	DataList,
	filter: [applyFilter, filterCategory, filterValue],
}) => {
	let MovieContentList = [];

	// Apply filter according to movies
	if (applyFilter) {
		MovieContentList.push({
			sectionTitle: "Movies",
			renderList: [],
		});
		DataList.map((currData) => {
			if (currData.type === filterValue) {
				MovieContentList[0].renderList.push(currData);
			}
		});
	}

	return (
		<div id="ottContentsContainer">
			{/* Render movies section */}
			{MovieContentList.map((currData, index) => {
				return (
					<SectionCard
						key={index}
						sectionTitle={currData.sectionTitle}
						renderList={currData.renderList}
					/>
				);
			})}
		</div>
	);
};

export default Movies;
