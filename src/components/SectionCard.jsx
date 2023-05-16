import React from "react";
import ContentCard from "./ContentCard";

const SectionCard = ({ sectionTitle, renderList }) => {
	return (
		<div className="sectionCard">
			<div className="sectionTitleBox">
				<h1>{sectionTitle}</h1>
				<div className="underline"></div>
			</div>
			<div className="cardsBox">
				<div className="cards">
					{/* Render content cards from incoming list data */}
					{renderList?.map((listItem, index) => {
						return (
							<ContentCard
								key={index}
								type={listItem.type}
								thumbnailPath={listItem.thumbnailPath}
								title={listItem.title}
								description={listItem.description}
								yearOfRelease={listItem.yearOfRelease}
								rating={listItem.rating}
								durationHours={
									listItem.duration && listItem.duration.h
								}
								durationMinutes={
									listItem.duration && listItem.duration.min
								}
								language={listItem.language}
								genres={listItem.genres}
								channel={listItem.channel}
								additionalTags={listItem.additionalTags}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SectionCard;
