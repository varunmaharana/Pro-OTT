import React from "react";
import SectionCard from "./SectionCard";

const Languages = ({
	DataList,
	filter: [applyFilter, filterCategory, filterValue],
}) => {
	let languageContentList = [];

	// Filter data according to language.
	if (applyFilter) {
		filterCategory.map((currLanguage, index) => {
			languageContentList.push({
				sectionTitle: currLanguage,
				renderList: [],
			});
			DataList.map((currData) => {
				if (currData.language === currLanguage) {
					languageContentList[index].renderList.push(currData);
				}
			});
		});
	}

	return (
		<div id="ottContentsContainer">
			{/* Render sections according to Languages */}
			{languageContentList.map((currData, index) => {
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

export default Languages;
