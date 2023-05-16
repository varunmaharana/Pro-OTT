import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideNavigationBar from "./components/SideNavigationBar";
import Home from "./components/Home";
import Language from "./components/Languages";
import Genre from "./components/Genre";
import Channel from "./components/Channel";
import Movies from "./components/Movies";
import Shows from "./components/Shows";

import ProOTTData, {
	MoviesData,
	ShowsData,
	GenresList,
	ChannelsList,
	LanguageList,
	TagsList,
} from "./ProOTTDatabase";

const App = () => {
	const randomizedProOTTData = shuffle(ProOTTData);

	return (
		<BrowserRouter>
			<SideNavigationBar />
			<Header />

			<Routes>
				{/* Home Route */}
				<Route
					path="/Pro-OTT/"
					element={<Home DataList={randomizedProOTTData} />}
				/>

				{/* Languages Route */}
				<Route
					path="/Pro-OTT/languages"
					element={
						<Language
							DataList={randomizedProOTTData}
							filter={[true, LanguageList, null]}
						/>
					}
				/>

				{/* Genres Route */}
				<Route
					path="/Pro-OTT/genres"
					element={
						<Genre
							DataList={randomizedProOTTData}
							filter={[true, GenresList, null]}
						/>
					}
				/>

				{/* Channels Route */}
				<Route
					path="/Pro-OTT/channels"
					element={
						<Channel
							DataList={randomizedProOTTData}
							filter={[true, ChannelsList, null]}
						/>
					}
				/>

				{/* Movies Route */}
				<Route
					path="/Pro-OTT/movies"
					element={
						<Movies
							DataList={randomizedProOTTData}
							filter={[true, "type", "movie"]}
						/>
					}
				/>

				{/* Shows Route */}
				<Route
					path="/Pro-OTT/shows"
					element={
						<Shows
							DataList={randomizedProOTTData}
							filter={[true, "type", "show"]}
						/>
					}
				/>

				{/* Comedy Genre Route */}
				<Route
					path="/Pro-OTT/genres/Comedy"
					element={
						<Genre
							DataList={randomizedProOTTData}
							filter={[true, GenresList, "Comedy"]}
						/>
					}
				/>
				{/* News Route */}
				<Route
					path="/Pro-OTT/news"
					element={<Home DataList={randomizedProOTTData} />}
				/>
			</Routes>

		</BrowserRouter>
	);
};

// This function shuffles imported data.
const shuffle = (array) => {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
};

export default App;
