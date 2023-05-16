import React from "react";
import SectionCard from "./SectionCard";

const Genres = ({
	DataList,
	filter: [applyFilter, filterCategory, filterValue],
}) => {
	let genreContentList = [];

	// Filter data according to genre.
	if (applyFilter) {
		if (filterValue) {
			// Do this of explicit filter value is given e.g. genre Comedy

			// Filter data according to filter value
			genreContentList.push({
				sectionTitle: filterValue,
				renderList: [],
			});
			DataList.map((currData) => {
				if (currData.genres === filterValue) {
					genreContentList[0].renderList.push(currData);
				}
			});
		} else {
			// Do this of explicit filter value is not given.

            filterCategory.map((currGenre, index) => {
                genreContentList.push({
                    sectionTitle: currGenre,
                    renderList: [],
                });
                DataList.map((currData) => {
                    if (currData.genres === currGenre) {
                        genreContentList[index].renderList.push(currData);
                    }
                });
        
		    });
        }
    }

	return (
		<div id="ottContentsContainer">
			{/* Render sections according to genre */}
			{genreContentList.map((currData, index) => {
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

export default Genres;
