import React from "react";
import SectionCard from "./SectionCard";

const Channels = ({
	DataList,
	filter: [applyFilter, filterCategory, filterValue],
}) => {
	let channelContentList = [];

	// Filter data according to channel
	if (applyFilter) {
		filterCategory.map((currChannel, index) => {
			channelContentList.push({
				sectionTitle: currChannel,
				renderList: [],
			});
			DataList.map((currData) => {
				if (currData.channel === currChannel) {
					channelContentList[index].renderList.push(currData);
				}
			});
		});
	}

	return (
		<div id="ottContentsContainer">
			{/* Render sections according to channels */}
			{channelContentList.map((currData, index) => {
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

export default Channels;
