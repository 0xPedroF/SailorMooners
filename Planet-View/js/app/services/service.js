define(function() {
    var internals = {};
    var externals = {};

    internals.sailors = [
        {
            id: "1",
            scoutName: "Sailor Mercury",
            japaneseName: "Ami Mizuno (水野 亜美)",
            englishName: "Amy Anderson",
            birthday: "September 10",
            transformation_phrase: "Mercury Power, Make Up!",
            powers: "Bubble Spray, Shine Aqua Illusion",
            description: "The Guardian of Water and Wisdom.",
            likes: "Reading, studying, chess, swimming, sandwiches",
            dislikes: "Heat, dishonesty, love letters",
            affiliation: "Sailor Guardians"
    
        },
        {
            id: "2",
            scoutName: "Sailor Venus",
            japaneseName: "Minako Aino (愛野 美奈子)",
            englishName: "Mina Andrews",
            birthday: "October 22",
            transformation_phrase: "Venus Power, Make Up!",
            powers: "Crescent Beam, Love-Me Chain",
            description: "The Guardian of Love and Beauty.",
            likes: "Singing, casing after idols, playing volleyball, romance",
            dislikes: "Her mother, police officers, being alone, math class, injustice",
            affiliation: "Sailor Guardians"
        },
        {
            id: "#details",
            scoutName: "Sailor Moon",
            japaneseName: "Usagi Tsukino (月野 うさぎ)",
            englishName: "Serena Tsukino",
            birthday: "June 30",
            transformation_phrase: "Moon Prism Power, Make Up!",
            powers: "Moon Tiara Action, Moon Healing Escalation",
            description: "The main protagonist of the series.",
            likes: "Eating cake, comics/manga, sleeping, video games, home economics class",
            dislikes: "Math class, dentists, ghosts, carrots",
            affiliation: "Sailor Guardians"
        },
        {
            id: "4",
            scoutName: "Sailor Mars",
            japaneseName: "Rei Hino (火野 レイ)",
            englishName: "Raye Hino",
            birthday: "April 17",
            transformation_phrase: "Mars Power, Make Up!",
            powers: "Fire Soul, Burning Mandala",
            description: "The Guardian of Fire and Passion.",
            likes: "Meditation, white Casablancas, singing, spiritualism, fugu",
            dislikes: "Canned asparagus, lack of discipline, television, negativity",
            affiliation: "Sailor Guardians"
        },
        {
            id: "5",
            scoutName: "Sailor Jupiter",
            japaneseName: "Makoto Kino (木野 まこと)",
            englishName: "Lita Kino",
            birthday: "December 5",
            transformation_phrase: "Jupiter Power, Make Up!",
            powers: "Supreme Thunder, Jupiter Oak Evolution",
            description: "The Guardian of Thunder and Courage.",
            likes: "Cooking, color pink, gardening, martial arts, home economics class",
            dislikes: "Airplanes, romantic rejection, insects",
            affiliation: "Sailor Guardians"
        },
        {
            id: "6",
            scoutName: "Sailor Saturn",
            japaneseName: "Hotaru Tomoe (土萠 ほたる)",
            englishName: "Hotaru Tomlinson",
            birthday: "January 6",
            transformation_phrase: "Saturn Crystal Power, Make Up!",
            powers: "Silence Glaive, Death Reborn Revolution",
            description: "The Guardian of Silence and Destruction.",
            likes: "Reading, japanese soba, collecting lamps, poetry, solitude, painting",
            dislikes: "Milk, violence, marathons, injustice, gym class",
            affiliation: "Sailor Guardians"
        },
        {
            id: "7",
            scoutName: "Sailor Uranus",
            japaneseName: "Haruka Tenou (天王 はるか)",
            englishName: "Amara Tenou",
            birthday: "January 27",
            transformation_phrase: "Uranus Planet Power, Make Up!",
            powers: "World Shaking, Space Sword Blaster",
            description: "The Guardian of the Skies and Sky Scraper.",
            likes: "Racing, sports, color gold, salad, challenges",
            dislikes: "Unnecessary rules, weakness, modern history, Natto",
            affiliation: "Sailor Guardians"
        },
        {
            id: "8",
            scoutName: "Sailor Neptune",
            japaneseName: "Michiru Kaiou (海王 みちる)",
            englishName: "Michel Kaiou",
            birthday: "March 6",
            transformation_phrase: "Neptune Planet Power, Make Up!",
            powers: "Deep Submerge, Submarine Reflection",
            description: "The Guardian of the Ocean and Intuition.",
            likes: "Collecting cosmetics, playing the violin, color marine blue, sashimi, music, swimming, the arts",
            dislikes: "Disorder, sea cucumbers, kikurage",
            affiliation: "Sailor Guardians"
        }
    ];

    internals.planets = [
        {
            name: "Mercury",
            type: "Terrestrial",
            orbitalPeriod: { days: "89,96 days", years: "0,24 years" },
            orbitalSpeed: "48,92 km/s",
            rotationDuration: "58 days 15h30m",
            radius: "2.439 km",
            Diameter: "4.879 km",
            sunDistance: "57.910.000 km",
            oneWayLightToTheSun: "3,38 min",
            satellites: { number: 0, names: [] },
            temperature: "167°C",
            gravity: "3.7 m/s²",
        },
        {
            name: "Venus",
            type: "Terrestrial",
            orbitalPeriod: { days: "224,70 dias", years: "0,61 years" },
            orbitalSpeed: "35,02 km/s",
            rotationDuration: "243 days 18h00min",
            radius: "6.051 km",
            Diameter: "12.104 km",
            sunDistance: "108.200.000 km",
            oneWayLightToTheSun: "5.97 min",
            satellites: { number: 0, names: [] },
            temperature: "461°C",
            gravity: "8.87 m/s²",
        },
        {
            name: "Mars",
            type: "Terrestrial",
            orbitalPeriod: { days: "686,97 dias", years: "1,88 anos" },
            orbitalSpeed: "24,07 km/s",
            rotationDuration: "24h37min",
            radius: "3.397 km",
            Diameter: "6.779 km",
            sunDistance: "227.940.000 km",
            oneWayLightToTheSun: "11,88 min",
            satellites: { number: 2, names: ["Fobos", "Deimos"] },
            temperature: "-63°C",
            gravity: "3.721 m/s²",
        },
        {
            name: "Earth",
            type: "Terrestrial",
            orbitalPeriod: { days: "365,26 days", years: "1 year" },
            orbitalSpeed: "29,78 km/s",
            rotationDuration: "23h56min",
            radius: "6.371 km",
            Diameter: "12.742 km",
            sunDistance: "149.600.000 km",
            satellites: { number: 1, names: ["Moon"] },
            temperature: "15°C",
            oneWayLightToTheSun: "8,36 min",
            gravity: "9.807 m/s²",
        },
        {
            name: "Jupiter",
            type: "Gas Giant",
            orbitalPeriod: { days: "4.331,57 days", years: "11,86 years" },
            orbitalSpeed: "13,05 km/s",
            rotationDuration: "9h50min",
            radius: "69.911 km",
            Diameter: "139.820 km",
            sunDistance: "778.500.000 km",
            oneWayLightToTheSun: "41,21 min",
            satellites: { number: 79, names: ["Io", "Europa", "Ganímedes", "Calisto"] },
            temperature: "-108°C",
            gravity: "24.79 m/s²",
        },
        {
            name: "Saturn",
            type: "Gas Giant",
            orbitalPeriod: { days: "10.757,74 days", years: "29,45 years" },
            orbitalSpeed: "9,64 km/s",
            rotationDuration: "10h14min",
            radius: "60.268 km",
            Diameter: "116.464 km",
            sunDistance: "1.429.400.000 km",
            oneWayLightToTheSun: "82.02 min",
            satellites: {
                number: 82,
                names: [
                    "Mimas",
                    "Encélado",
                    "Tétis",
                    "Dione",
                    "Reia",
                    "Titã",
                    "Hiperião",
                    "Jápeto",
                    "Febe",
                ],
            },
            temperature: "-139°C",
            gravity: "10.44 m/s²",
        },
        {
            name: "Neptune",
            type: "Ice Giant",
            orbitalPeriod: { days: "60.224,90 days", years: "164,88 years" },
            orbitalSpeed: "5,43 km/s",
            rotationDuration: "15h40min",
            radius: "24.622 km",
            Diameter: "49.244 km",
            sunDistance: "4.504.300.000 km",
            oneWayLightToTheSun: "248.79 min",
            satellites: {
                number: 14,
                names: [
                    "Náiade",
                    "Talassa",
                    "Despina",
                    "Galateia",
                    "Larissa",
                    "Hipocampo",
                    "Proteu",
                ],
            },
            temperature: "-218°C",
            gravity: "11.15 m/s²",
        },
        {
            name: "Uranus",
            type: "Ice Giant",
            orbitalPeriod: { days: "30.799,10 days", years: "84,32 years" },
            orbitalSpeed: "6,81 km/s",
            rotationDuration: "10h49min",
            radius: "25.362 km",
            Diameter: "50.724 km",
            sunDistance: "2.870.000.000 km",
            oneWayLightToTheSun: "163.72 min",
            satellites: {
                number: 27,
                names: ["Miranda", "Ariel", "Umbriel", "Titânia", "Oberon"],
            },
            temperature: "-200°C",
            gravity: "8.87 m/s²",
        },
        {
            id: "#details",
            name: "Moon",
            orbitalPeriod: { days: "27,32 days", years: "0,07 years" },
            orbitalSpeed: "1,02 km/s",
            rotationDuration: "648h",
            radius: "1 737 km",
            Diameter: "3 474 km",
            sunDistance: "149.600.000 km",
            oneWayLightToTheSun: "8,36 min",
            satellites: { number: 0, names: [] },
            temperature: "-38°C",
            gravity: "1.62 m/s²",
        },
    ];

    externals.getSailor = function() {
        var routeName = internals.sailors.find(function (obj) {
            return window.location.hash === obj.id;
        });
        console.log(routeName);
        return routeName;
    }

    externals.getPlanet = function() {
        var routeName = internals.planets.find(function (obj) {
            return window.location.hash === obj.id;
        });
        console.log(routeName);
        return routeName;
    }

    return externals;
})