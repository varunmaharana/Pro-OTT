import React from "react";
import SectionCard from "./SectionCard";

const Shows = ({
	DataList,
	filter: [applyFilter, filterCategory, filterValue],
}) => {
	let ShowContentList = [];

	// Apply filter according to shows.
	if (applyFilter) {
		ShowContentList.push({
			sectionTitle: "Shows",
			renderList: [],
		});
		DataList.map((currData) => {
			if (currData.type === filterValue) {
				ShowContentList[0].renderList.push(currData);
			}
		});
	}

	return (
		<div id="ottContentsContainer">
			{/* Render section according to Shows */}
			{ShowContentList.map((currData, index) => {
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

export default Shows;
