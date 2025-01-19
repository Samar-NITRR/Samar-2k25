import React, { useState, useEffect, useRef } from "react";

const games = [
  {
    id: 1,
    title: "BasketBall",
    description: "Dota 2 is a multiplayer online battle arena by Valve.",
    image: "assets/sports/basketball/basketball_1.jpg",
  },
  {
    id: 2,
    title: "Cricket",
    description: "The Witcher 3 is an action RPG game.",
    image: "assets/sports/cricket/cricket_1.jpg",
  },
  {
    id: 3,
    title: "Football",
    description: "RDR 2 is an action-adventure game by Rockstar Games.",
    image: "assets/sports/football/football_1.jpg",
  },
  {
    id: 4,
    title: "VolleyBall",
    description: "PUBG is a battle royale game.",
    image: "assets/sports/volleyball/volleyball_1.jpg",
  },
  {
    id: 5,
    title: "HandBall",
    description: "Fortnite is a battle royale and building game.",
    image: "assets/sports/handball/handball_1.jpg",
  },
  {
    id: 6,
    title: "ShortPut",
    description: "Far Cry 5 is a first-person shooter by Ubisoft.",
    image: "assets/sports/shortput/shortput_1.jpg",
  },
  {
    id: 7,
    title: "BasketBall",
    description: "Dota 2 is a multiplayer online battle arena by Valve.",
    image: "assets/sports/basketball/basketball_1.jpg",
  },
  {
    id: 8,
    title: "Cricket",
    description: "The Witcher 3 is an action RPG game.",
    image: "assets/sports/cricket/cricket_1.jpg",
  },
  {
    id: 9,
    title: "Football",
    description: "RDR 2 is an action-adventure game by Rockstar Games.",
    image: "assets/sports/football/football_1.jpg",
  },
  {
    id: 10,
    title: "VolleyBall",
    description: "PUBG is a battle royale game.",
    image: "assets/sports/volleyball/volleyball_1.jpg",
  },
  {
    id: 11,
    title: "HandBall",
    description: "Fortnite is a battle royale and building game.",
    image: "assets/sports/handball/handball_1.jpg",
  },
  {
    id: 12,
    title: "ShortPut",
    description: "Far Cry 5 is a first-person shooter by Ubisoft.",
    image: "assets/sports/shortput/shortput_1.jpg",
  },
  {
    id: 13,
    title: "BasketBall",
    description: "Dota 2 is a multiplayer online battle arena by Valve.",
    image: "assets/sports/basketball/basketball_1.jpg",
  },
  {
    id: 14,
    title: "Cricket",
    description: "The Witcher 3 is an action RPG game.",
    image: "assets/sports/cricket/cricket_1.jpg",
  },
  {
    id: 15,
    title: "Football",
    description: "RDR 2 is an action-adventure game by Rockstar Games.",
    image: "assets/sports/football/football_1.jpg",
  },
  {
    id: 16,
    title: "VolleyBall",
    description: "PUBG is a battle royale game.",
    image: "assets/sports/volleyball/volleyball_1.jpg",
  },
  {
    id: 17,
    title: "HandBall",
    description: "Fortnite is a battle royale and building game.",
    image: "assets/sports/handball/handball_1.jpg",
  },
  {
    id: 18,
    title: "ShortPut",
    description: "Far Cry 5 is a first-person shooter by Ubisoft.",
    image: "assets/sports/shortput/shortput_1.jpg",
  },
];

function ImageSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const totalItems = games.length;
	const isClicked = useRef(false);
	const timeoutRef = useRef(null);
	const intervalRef = useRef(null);

	useEffect(() => {
		if (!isClicked.current) {
		intervalRef.current = setInterval(() => {
			handleNext();
		}, 3000);
		}

		return () => {
		clearInterval(intervalRef.current);
		};
	}, []);

	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
	};

	const handlePrev = () => {
		setActiveIndex((prevIndex) =>
		(prevIndex - 1 + totalItems) % totalItems
		);
	};

	const handleCardClick = (index) => {
		if (index !== activeIndex) {
		clearInterval(intervalRef.current);
		isClicked.current = true;

		setActiveIndex(index);

		timeoutRef.current = setTimeout(() => {
			handleNext();
			isClicked.current = false;
			intervalRef.current = setInterval(() => {
			handleNext();
			}, 3000);
		}, 10000);
		}
	};

	return (
		<section className="md:p-12 lg:p-16 flex flex-col justify-center items-center">
			<main className="w-screen backdrop-blur-lg p-16 border-t-2 border-b-2 border-rose-600">
				<div className="overflow-hidden relative">
					<h2 className="mb-7 pb-4 text-2xl font-bold text-white capitalize flex justify-center items-center">
						<div className="relative">
							<span className="text-amber-500 font-crossFly uppercase text-3xl md:text-4xl tracking-widerwider drop-shadow-[3px_3px_0px_#000]">
								Image Gallery
							</span>
							<span className="absolute bottom-[-16px] left-0 w-full h-1 bg-gray-100 rounded-xl"></span>
							<span className="absolute bottom-[-16px] left-0 w-8 h-1 bg-amber-500 rounded-xl"></span>
						</div>
					</h2>

					<div className="p-5">
						<div className="hidden md:flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${activeIndex * 340}px)` }} >
							{games.map((game, index) => (
								<div key={game.id} onClick={() => handleCardClick(index)} className={`relative flex-shrink-0 ml-5 cursor-pointer border-2 border-rose-500 rounded-xl overflow-hidden transition-all duration-500 ease-in-out group ${ index === activeIndex ? "w-[550px]" : "w-[320px]" } h-[400px]`}  style={{ backgroundImage: `url(${game.image})`, backgroundSize: "cover", backgroundPosition: "center", }} >
									<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>

									<div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all ease-in-out"></div>
									<div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-500 ease-in-out ${ index === activeIndex ? "translate-y-0" : "translate-y-[calc(100%-80px)]" }`} >
										<h3 className="text-xl font-bold mb-2 uppercase font-crossFly italic">
											{game.title}
										</h3>

										<p className={`text-gray-300 transition-opacity duration-500 font-brave81 lowercase tracking-wider ${ index === activeIndex ? "opacity-100" : "opacity-0" }`} >
											{game.description}
										</p>
									</div>
								</div>
							))}
						</div>
						<div className="flex md:hidden transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${activeIndex * 120}px)` }} >
							{games.map((game, index) => (
								<div key={game.id} onClick={() => handleCardClick(index)} className={`relative flex-shrink-0 ml-5 cursor-pointer border-2 border-rose-500 rounded-xl overflow-hidden transition-all duration-500 ease-in-out group ${ index === activeIndex ? "w-[200px]" : "w-[100px]" } h-[200px]`}  style={{ backgroundImage: `url(${game.image})`, backgroundSize: "cover", backgroundPosition: "center", }} >
									<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>

									<div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all ease-in-out"></div>
									<div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-500 ease-in-out ${ index === activeIndex ? "translate-y-0" : "translate-y-[calc(100%-80px)]" }`} >
										<h3 className="text-l font-bold mb-2 uppercase font-crossFly italic">
											{game.title}
										</h3>

										<p className={`text-gray-300 text-sm transition-opacity duration-500 font-brave81 lowercase tracking-wider ${ index === activeIndex ? "opacity-100" : "opacity-0" }`} >
											{game.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</main>
		</section>
	);
}

export default ImageSection;