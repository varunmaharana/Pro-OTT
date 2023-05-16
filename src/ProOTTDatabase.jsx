const GenresList = ["Action", "Adventure", "Comedy", "Horror", "Drama"];
const ChannelsList = ["Netflix", "Prime", "HBO Max", "Sony LIV", "Disney+ Hotstar"];
const TagsList = ["Recommended", "PopularShows", "Animated", "NewUpcoming"];
const LanguageList = ["English", "Hindi"];

const MoviesData = [
	{
		type: "movie",
		MovieId: 1,
		thumbnailPath: "The Marksman.jpg",
		title: "The Marksman",
		description: "Jim Hanson, a retired Marine living on the Mexican border, tries to save a mother and son as they are being hunted by a cartel. After the mother dies, Jim must take the child to Chicago.",
		yearOfRelease: "2021",
		rating: "U/A 16+",
		duration: {
			h: "1",
			min: "48"
		},
		language: "English",
		genres: "Action",
		channel: "Netflix",
		additionalTags: ["Recommended"]
	},
	{
		type: "movie",
		MovieId: 2,
		thumbnailPath: "The Lair.jpg",
		title: "The Lair",
		description: "Shot down over one of the most dangerous rebel strongholds in Afghanistan, a Royal Air Force pilot discovers an abandoned Soviet Research Facility concealed in the remote hills. She finds refuge in an underground bunker where deadly man-made biological weapons - half human, half alien and hungry for human flesh are awakened as she watches the creatures rip apart the men pursuing her.",
		yearOfRelease: "2022",
		rating: "A",
		duration: {
			h: "1",
			min: "32"
		},
		language: "English",
		genres: "Horror",
		channel: "Prime",
		additionalTags: ["Recommended", "NewUpcoming"]
	},
	{
		type: "movie",
		MovieId: 3,
		thumbnailPath: "The Blackout.jpg",
		title: "The Blackout",
		description: "The Blackout is a 2019 Russian science fiction action thriller film directed by Egor Baranov and starring Pyotr Fyodorov. The film is about an event that suddenly plunges the entire world into darkness, rapidly destroying life on Earth except for a small area in Eastern Europe.",
		yearOfRelease: "2019",
		rating: "A",
		duration: {
			h: "2",
			min: "7"
		},
		language: "English",
		genres: "Adventure",
		channel: "HBO Max",
		additionalTags: ["NewUpcoming"]
	},
	{
		type: "movie",
		MovieId: 4,
		thumbnailPath: "La La Land.jpg",
		title: "La La Land",
		description: "Sebastian and Mia are drawn together by their common desire to do what they love. But as success builds, the dreams they worked so hard to maintain threaten to rip them apart.",
		yearOfRelease: "2016",
		rating: "U/A 13+",
		duration: {
			h: "2",
			min: "8"
		},
		language: "English",
		genres: "Comedy",
		channel: "Sony LIV",
		additionalTags: ["Recommended"]
	},
	{
		type: "movie",
		MovieId: 5,
		thumbnailPath: "The Wolf of Wall Street.jpg",
		title: "The Wolf of Wall Street",
		description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
		yearOfRelease: "2013",
		rating: "A",
		duration: {
			h: "2",
			min: "49"
		},
		language: "English",
		genres: "Comedy",
		channel: "Disney+ Hotstar",
		additionalTags: ["Recommended", "NewUpcoming"]
	},
	{
		type: "movie",
		MovieId: 6,
		thumbnailPath: "Meri Pyaari Bindu.jpg",
		title: "Meri Pyaari Bindu",
		description: "A successful writer, Abhimanyu Roy (Ayushmann Khurrana) returns to his roots to write an old-fashioned love story, 3 years in the making. This writer's block is called Bindu (Parineeti Chopra). How do you contain this live wire in the pages of a book? When Abhi stumbles across an old audio cassette of their favourite playlist, it sends him down memory lane and his novel starts writing itself.",
		yearOfRelease: "2017",
		rating: "U/A 13+",
		duration: {
			h: "1",
			min: "56"
		},
		language: "Hindi",
		genres: "Comedy",
		channel: "Netflix",
		additionalTags: ["NewUpcoming"]
	},
	{
		type: "movie",
		MovieId: 7,
		thumbnailPath: "Jab We Met.jpg",
		title: "Jab We Met",
		description: "The adversities of Aditya's business and love life bring him on the verge of committing suicide. One day, wandering aimlessly, he boards a train and bumps into Geet, a lively and talkative Punjabi Sikh girl, and just like that, without any inkling, Aditya's life changes forever.",
		yearOfRelease: "2007",
		rating: "U",
		duration: {
			h: "2",
			min: "18"
		},
		language: "Hindi",
		genres: "Comedy",
		channel: "Prime",
		additionalTags: ["Recommended"]
	},
	{
		type: "movie",
		MovieId: 8,
		thumbnailPath: "LOC Kargil.jpg",
		title: "LOC Kargil",
		description: "LOC: Kargil Is A Bollywood Award Winning Epic War Hindi Action Movie, Directed By J. P. Dutta, Starring Sanjay Dutt, Ajay Devgn, Nagarjuna, Sunil Shetty, Saif Ali Khan, Abhishek Bachchan, Kareena Kapoor. The Soldiers Of The Indian Army Try To Locate Their Patrol Officers After They Learn That Pakistani Troops Are Crossing The Line Of Control. A Fierce Battle Then Ensues Between The Two Nations.",
		yearOfRelease: "2003",
		rating: "U",
		duration: {
			h: "3",
			min: "57"
		},
		language: "Hindi",
		genres: "Action",
		channel: "HBO Max",
		additionalTags: ["Recommended", "NewUpcoming"]
	},
	{
		type: "movie",
		MovieId: 9,
		thumbnailPath: "K.G.F Chapter 2.jpg",
		title: "K.G.F Chapter 2",
		description: "Vijendra Ingalgi, Son of Anand Ingalgi continues the story of KGF and Rocky in Chapter 2. Rocky survives the attack by Vanaram’s guards after killing Garuda. He is a hero and a saviour to the people of Narachi. While trying to fulfil his promise to his mother, he must face many obstacles in the form of Adheera, Inayat Khalil and Ramika sen.",
		yearOfRelease: "2022",
		rating: "U/A 13+",
		duration: {
			h: "2",
			min: "45"
		},
		language: "Hindi",
		genres: "Action",
		channel: "Sony LIV",
		additionalTags: ["NewUpcoming"]
	},
	{
		type: "movie",
		MovieId: 10,
		thumbnailPath: "Bhoot Part One - The Haunted Ship.jpg",
		title: "Bhoot Part One - The Haunted Ship",
		description: "In June 2012, A huge, dead, unmanned ship-“Sea Bird”, on its way to a shipyard, broke its ties and ran ashore Juhu beach. Prithvi, a shipping officer recovering from psychotic depression due to the loss of his family, is in charge of getting Sea Bird back afloat.",
		yearOfRelease: "2020",
		rating: "A",
		duration: {
			h: "1",
			min: "54"
		},
		language: "Hindi",
		genres: "Horror",
		channel: "Disney+ Hotstar",
		additionalTags: ["NewUpcoming"]
	},
];

const ShowsData = [
	{
		type: "show",
		ShowId: 1,
		thumbnailPath: "Mr. Robot.jpg",
		title: "Mr. Robot",
		description: "\"Mr. Robot,\" is a techno thriller that follows Elliot, a young programmer, who works as a cyber-security engineer by day and as a vigilante hacker by night. Elliot finds himself at a crossroad when the mysterious leader of an underground hacker group recruits him to destroy the firm he is paid to protect.",
		yearOfRelease: "2015",
		rating: "A",
		language: "English",
		genres: "Horror",
		channel: "Netflix",
		additionalTags: ["Recommended", "PopularShows"]
	},
	{
		type: "show",
		ShowId: 2,
		thumbnailPath: "Suits.jpg",
		title: "Suits",
		description: "\"Suits\" will launch its freshman season with stars Gabriel Macht (\"Love and Other Drugs\"), as one of Manhattan's top corporate lawyers sets out to recruit a new hotshot associate and hires the only guy that impresses him - Patrick J. Adams (\"Lost\") as Mike Ross, a brilliant but unmotivated college dropout. Though he isn't actually a lawyer, this legal prodigy has the book smarts of a Harvard la...",
		yearOfRelease: "2011",
		rating: "A",
		language: "English",
		genres: "Drama",
		channel: "Prime",
		additionalTags: ["Recommended", "NewUpcoming"]
	},
	{
		type: "show",
		ShowId: 3,
		thumbnailPath: "Citadel.jpg",
		title: "Citadel",
		description: "What if you lost your memory? What if a spy didn’t know they were a spy? Years ago, the top agents of Citadel, Mason Kane (Richard Madden) and Nadia Sinh (Priyanka Chopra Jonas), had their minds wiped. But, they’re called back to action as sinister forces emerge from the past. With the help of spymaster Bernard Orlick (Stanley Tucci), these former lovers must remember the past to save the future.",
		yearOfRelease: "2023",
		rating: "U/A 13+",
		language: "English",
		genres: "Adventure",
		channel: "HBO Max",
		additionalTags: ["NewUpcoming", "PopularShows"]
	},
	{
		type: "show",
		ShowId: 4,
		thumbnailPath: "Young Sheldon.jpg",
		title: "Young Sheldon",
		description: "For 9-year-old Sheldon Cooper it isn't easy growing up in East Texas. Being a once-in-a-generation mind capable of advanced mathematics and science isn't always helpful in a land where church and football are king. And while the vulnerable, gifted and somewhat naïve Sheldon deals with the world, his very normal family must find a way to deal with him.",
		yearOfRelease: "2018",
		rating: "U/A 13+",
		language: "English",
		genres: "Comedy",
		channel: "",
		additionalTags: ["Recommended", "PopularShows"]
	},
	{
		type: "show",
		ShowId: 5,
		thumbnailPath: "The Boys.jpg",
		title: "The Boys",
		description: "In a world where superheroes embrace the darker side of their massive celebrity and fame, THE BOYS centers on a group of vigilantes known informally as “The Boys,” who set out to take down corrupt superheroes with no more than their blue collar grit and a willingness to fight dirty.",
		yearOfRelease: "2019",
		rating: "A",
		language: "English",
		genres: "Action",
		channel: "Disney+ Hotstar",
		additionalTags: ["Recommended", "NewUpcoming"]
	},
	{
		type: "show",
		ShowId: 6,
		thumbnailPath: "Mirzapur.jpg",
		title: "Mirzapur",
		description: "The iron-fisted Akhandanand Tripathi is a millionaire carpet exporter and the mafia don of Mirzapur. His son, Munna, is an unworthy, power hungry heir who will stop at nothing to inherit his father’s legacy. An incident at a wedding procession forces him to cross paths with Ramakant Pandit, an upstanding lawyer, and his sons, Guddu and Bablu.",
		yearOfRelease: "2018",
		rating: "A",
		language: "Hindi",
		genres: "Action",
		channel: "Netflix",
		additionalTags: ["NewUpcoming", "PopularShows"]
	},
	{
		type: "show",
		ShowId: 7,
		thumbnailPath: "The Family Man.jpg",
		title: "The Family Man",
		description: "The Family Man is an edgy action-drama series, which tells the story of a middle-class man who works for a special cell of the National Investigation Agency. While he tries to protect the nation from terrorists, he also has to protect his family from the impact of his secretive, high-pressure, and low paying job.",
		yearOfRelease: "2019",
		rating: "A",
		language: "Hindi",
		genres: "Action",
		channel: "Prime",
		additionalTags: ["Recommended", "PopularShows"]
	},
	{
		type: "show",
		ShowId: 8,
		thumbnailPath: "Panchayat.jpg",
		title: "Panchayat",
		description: "Panchayat is a comedy-drama, which captures the journey of an engineering graduate Abhishek, who for lack of a better job option joins as secretary of a panchayat office in a remote village of Uttar Pradesh.",
		yearOfRelease: "2020",
		rating: "U/A 16+",
		language: "Hindi",
		genres: "Comedy",
		channel: "HBO Max",
		additionalTags: ["Recommended", "NewUpcoming"]
	},
	{
		type: "show",
		ShowId: 9,
		thumbnailPath: "Chacha Vidhayak Hain Humare.jpg",
		title: "Chacha Vidhayak Hain Humare",
		description: "Ronny Bhaiya leads a double life - To the world he is the nephew of the MLA/Vidhayak - and likes to think of himself as a Jann Neta, and at home he is the jobless 26 year old with no sense of responsibility to his family. The show explores Ronny’s adventures as he gets stuck in multiple situations because of this big lie that precedes him.",
		yearOfRelease: "2018",
		rating: "A",
		language: "Hindi",
		genres: "Comedy",
		channel: "Sony LIV",
		additionalTags: ["NewUpcoming", "PopularShows"]
	},
	{
		type: "show",
		ShowId: 10,
		thumbnailPath: "The Legend of Vox Machina.jpg",
		title: "The Legend of Vox Machina",
		description: "They're rowdy, they're ragtag, they're misfits turned mercenaries for hire. Vox Machina is more interested in easy money and cheap ale than actually protecting the realm. But when the kingdom is threatened by evil, this boisterous crew realizes that they are the only ones capable of restoring justice. What began as a simple payday is now the origin story behind Exandria’s newest heroes.",
		yearOfRelease: "2022",
		rating: "A",
		language: "English",
		genres: "Adventure",
		channel: "",
		additionalTags: ["Animated"]
	},
];

const ProOTTData = [
	...MoviesData,
	...ShowsData
];

export {
	MoviesData, 
	ShowsData,
	GenresList,
	ChannelsList,
	LanguageList,
	TagsList
};

export default ProOTTData;
