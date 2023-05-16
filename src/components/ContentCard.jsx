import React from "react";

const ContentCard = ({
	type,
	thumbnailPath,
	title,
	description,
	yearOfRelease,
	rating,
	durationHours,
	durationMinutes,
	language,
	genres,
	channel,
	additionalTags,
}) => {
	// Set thumbnail path according to type.
	let thumbnailSourcePath = "";
	if (type === "movie") {
		thumbnailSourcePath = "/Thumbnails/Movies/" + thumbnailPath;
	} else {
		thumbnailSourcePath = "/Thumbnails/Shows/" + thumbnailPath;
	}

	return (
		<div className="contentCard">
			<div className="card">
				<div className="thumbnailBox">
					<img src={thumbnailSourcePath} alt={thumbnailPath} />
				</div>
				<div className="contentBox">
					<div className="controlBox">
						<div className="play">
							<span className="btn">
								<i className="fa-solid fa-play"></i>
							</span>
							<span className="label">Play</span>
						</div>
						<div className="extraBtn">
							<div className="wishlistBtn">
								<span>
									<i className="fa-solid fa-plus"></i>
								</span>
							</div>
							<div className="optionsBtn">
								<span>
									<i className="fa-solid fa-ellipsis-vertical"></i>
								</span>
							</div>
						</div>
					</div>
					<div className="titleBox">
						<span>{title}</span>
					</div>
					<div className="infoBox">
						<div className="yor">{yearOfRelease}</div>
						<div className="durationBox">
							<span>
								{durationHours && durationHours + " h "}
								{durationMinutes && durationMinutes + " min"}
							</span>
						</div>
						<div className="rating">{rating}</div>
					</div>
					<div className="descBox">
						{/* Shorten description to display in card. */}
						{description.substring(0, 150) + "..."}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContentCard;
