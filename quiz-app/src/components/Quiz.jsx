import React, { useState, useEffect } from "react";

const questions = {
  general: {
    easy: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare",
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter",
      },
      {
        question: "How many continents are there?",
        options: ["Five", "Six", "Seven", "Eight"],
        answer: "Seven",
      },
      {
        question: "What is the smallest country in the world by area?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        answer: "Vatican City",
      },
      {
        question: "What does H2O stand for?",
        options: ["Hydrogen dioxide", "Helium oxide", "Water", "Hydroxide"],
        answer: "Water",
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "Japan",
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
      },
      {
        question: "Who painted the 'Mona Lisa'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci",
      },
      {
        question: "What is the primary ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Cucumber"],
        answer: "Avocado",
      },
      {
        question: "What is the tallest animal in the world?",
        options: ["Elephant", "Giraffe", "Kangaroo", "Camel"],
        answer: "Giraffe",
      },
      {
        question: "Which ocean is the largest?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean",
      },
      {
        question: "Who is the current President of the United States?",
        options: ["Donald Trump", "Joe Biden", "Barack Obama", "George W. Bush"],
        answer: "Joe Biden",
      },
      {
        question: "What color is a banana?",
        options: ["Green", "Yellow", "Red", "Blue"],
        answer: "Yellow",
      },
      {
        question: "What is the name of the fairy in 'Peter Pan'?",
        options: ["Tinker Bell", "Ariel", "Thumbelina", "Glinda"],
        answer: "Tinker Bell",
      },
      {
        question: "How many legs does a spider have?",
        options: ["6", "8", "10", "12"],
        answer: "8",
      },
      {
        question: "What is the capital of Italy?",
        options: ["Venice", "Rome", "Florence", "Milan"],
        answer: "Rome",
      },
      {
        question: "What is the main ingredient in bread?",
        options: ["Sugar", "Flour", "Yeast", "Salt"],
        answer: "Flour",
      },
      {
        question: "How many hours are there in a day?",
        options: ["12", "24", "36", "48"],
        answer: "24",
      },
      {
        question: "What currency is used in Japan?",
        options: ["Yuan", "Yen", "Won", "Ringgit"],
        answer: "Yen",
      },
      {
        question: "Which country has the highest life expectancy?",
        options: ["Japan", "Switzerland", "Hong Kong", "Australia"],
        answer: "Hong Kong",
      },
      {
        question: "What is the most common surname in the United States?",
        options: ["Johnson", "Williams", "Brown", "Smith"],
        answer: "Smith",
      },
      {
        question: "Who was the Ancient Greek God of the Sun?",
        options: ["Zeus", "Hermes", "Apollo", "Ares"],
        answer: "Apollo",
      },
      {
        question: "How many minutes are in a full week?",
        options: ["9,600", "10,080", "10,000", "10,080"],
        answer: "10,080",
      },
      {
        question: "Aureolin is a shade of what color?",
        options: ["Blue", "Red", "Green", "Yellow"],
        answer: "Yellow",
      },
      {
        question: "How many faces does a Dodecahedron have?",
        options: ["10", "12", "14", "12"],
        answer: "12",
      },
      {
        question: "What is the 4th letter of the Greek alphabet?",
        options: ["Alpha", "Beta", "Gamma", "Delta"],
        answer: "Delta",
      },
      {
        question: "What company was initially known as 'Blue Ribbon Sports'?",
        options: ["Adidas", "Puma", "Reebok", "Nike"],
        answer: "Nike",
      },
      {
        question: "What art form is described as 'decorative handwriting or handwritten lettering'?",
        options: ["Typography", "Graffiti", "Calligraphy", "Illustration"],
        answer: "Calligraphy",
      },
      {
        question: "What software company is headquartered in Redmond, Washington?",
        options: ["Apple", "Google", "Amazon", "Microsoft"],
        answer: "Microsoft",
      },
      {
        question: "How many dots appear on a pair of dice?",
        options: ["36", "42", "48", "42"],
        answer: "42",
      },
      {
        question: "What is acrophobia a fear of?",
        options: ["Spiders", "Enclosed spaces", "Heights", "Water"],
        answer: "Heights",
      },
      {
        question: "December 26 is known by what names in Ireland?",
        options: ["Boxing Day", "Saint Stephen's Day", "New Year's Eve", "Epiphany"],
        answer: "Saint Stephen's Day",
      },
      {
        question: "What phone company produced the 3310?",
        options: ["Samsung", "Apple", "Motorola", "Nokia"],
        answer: "Nokia",
      },
      {
        question: "What is the world's largest retailer?",
        options: ["Amazon", "Costco", "Walmart", "Target"],
        answer: "Walmart",
      },
      {
        question: "Which day of the week does the Jewish Sabbath begin?",
        options: ["Thursday", "Friday", "Saturday", "Sunday"],
        answer: "Friday",
      },
      {
        question: "What is a word, phrase, number, or other sequence of characters that reads the same backward as forward?",
        options: ["Anagram", "Palindrome", "Homonym", "Synonym"],
        answer: "Palindrome",
      },
      {
        question: "What is the name of the Chinese philosophical system that emphasizes harmony with nature?",
        options: ["Confucianism", "Buddhism", "Taoism", "Legalism"],
        answer: "Taoism",
      },
    ],
    medium: [
      {
        question: "What city holds the record for the highest altitude among the world's capital cities?",
        options: ["La Paz", "Kathmandu", "Quito", "Bogotá"],
        answer: "La Paz",
      },
      {
        question: "What is the most populous city in Africa, considering population within city limits?",
        options: ["Cairo", "Johannesburg", "Lagos", "Kinshasa"],
        answer: "Lagos",
      },
      {
        question: "Which European city is split by the Bosphorus Strait, separating its European and Asian sectors?",
        options: ["Budapest", "Warsaw", "Bucharest", "Istanbul"],
        answer: "Istanbul",
      },
      {
        question: "What city holds the title of the oldest continuously inhabited city globally?",
        options: ["Athens", "Jerusalem", "Cairo", "Damascus"],
        answer: "Damascus",
      },
      {
        question: "Which Asian city earns the moniker 'City of Temples' due to its plethora of ancient temples and pagodas?",
        options: ["Bagan", "Kyoto", "Bangkok", "Siem Reap"],
        answer: "Bagan",
      },
      {
        question: "What city is recognized as the northernmost capital city worldwide?",
        options: ["Helsinki", "Stockholm", "Oslo", "Reykjavik"],
        answer: "Reykjavik",
      },
      {
        question: "What is the capital city of New Zealand?",
        options: ["Auckland", "Christchurch", "Wellington", "Queenstown"],
        answer: "Wellington",
      },
      {
        question: "Which city in India is home to the iconic Taj Mahal?",
        options: ["Delhi", "Mumbai", "Agra", "Jaipur"],
        answer: "Agra",
      },
      {
        question: "Which city is often referred to as the 'Pearl of the Adriatic'?",
        options: ["Athens", "Dubrovnik", "Trieste", "Venice"],
        answer: "Dubrovnik",
      },
      {
        question: "What is the capital city of Kazakhstan?",
        options: ["Almaty", "Bishkek", "Astana", "Tashkent"],
        answer: "Astana",
      },
      {
        question: "Who invented the first mass-produced, practical sewing machine in 1846?",
        options: ["Isaac Singer", "Elias Howe", "Walter Hunt", "Barthélemy Thimonnier"],
        answer: "Elias Howe",
      },
      {
        question: "What French chemist is credited with revolutionizing food preservation?",
        options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Antoine Lavoisier"],
        answer: "Louis Pasteur",
      },
      {
        question: "What Austrian neurologist is credited with inventing psychoanalysis?",
        options: ["Alfred Adler", "Carl Jung", "Wilhelm Reich", "Sigmund Freud"],
        answer: "Sigmund Freud",
      },
      {
        question: "Name the company that introduced the first commercially available lithium-ion battery in 1991.",
        options: ["Panasonic", "Sony", "Duracell", "Energizer"],
        answer: "Sony",
      },
      {
        question: "What French physicist invented the electric battery and discovered sodium and potassium?",
        options: ["Joseph-Louis Lagrange", "Jacques Charles", "Antoine Lavoisier", "André-Marie Ampère"],
        answer: "Antoine Lavoisier",
      },
      {
        question: "In what year was the World Wide Web invented?",
        options: ["1979", "1984", "1989", "1991"],
        answer: "1989",
      },
      {
        question: "What scientist developed the first successful polio vaccine in the 1950s?",
        options: ["Jonas Salk", "Albert Sabin", "Edward Jenner", "Alexander Fleming"],
        answer: "Jonas Salk",
      },
      {
        question: "What is the capital city of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: "Ottawa",
      },
      {
        question: "In which year did the Titanic sink?",
        options: ["1905", "1910", "1912", "1920"],
        answer: "1912",
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Pb"],
        answer: "Au",
      },
      {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
        answer: "George Washington",
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond",
      },
      {
        question: "What is the main ingredient in traditional Japanese miso soup?",
        options: ["Rice", "Soybean paste", "Seaweed", "Tofu"],
        answer: "Soybean paste",
      },
      {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
        answer: "Nile",
      },
      {
        question: "Who is the author of the 'Harry Potter' series?",
        options: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "George R.R. Martin"],
        answer: "J.K. Rowling",
      },
      {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra",
      },
      {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue whale", "Giraffe", "Hippopotamus"],
        answer: "Blue whale",
      },
      {
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        answer: "1945",
      },
      {
        question: "What is the primary language spoken in Brazil?",
        options: ["Spanish", "Portuguese", "French", "English"],
        answer: "Portuguese",
      },
      {
        question: "What is the largest desert in the world?",
        options: ["Gobi", "Kalahari", "Sahara", "Arabian"],
        answer: "Sahara",
      },
      {
        question: "Who was the first woman to fly solo across the Atlantic Ocean?",
        options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jackie Cochran"],
        answer: "Amelia Earhart",
      },
      {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
        answer: "Mount Everest",
      },
      {
        question: "Who wrote the novel '1984'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
        answer: "George Orwell",
      },
      {
        question: "What is the name of the longest bone in the human body?",
        options: ["Tibia", "Femur", "Humerus", "Radius"],
        answer: "Femur",
      },
      {
        question: "Who was the first man to walk on the moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
        answer: "Neil Armstrong",
      },
      {
        question: "What is the primary ingredient in hummus?",
        options: ["Lentils", "Chickpeas", "Beans", "Peas"],
        answer: "Chickpeas",
      },
    ],
    hard: [
      {
        question: "What is the capital city of Bhutan?",
        options: ["Thimphu", "Paro", "Punakha", "Bumthang"],
        answer: "Thimphu",
      },
      {
        question: "Who was the first person to reach the South Pole?",
        options: ["Robert Falcon Scott", "Ernest Shackleton", "Roald Amundsen", "Edmund Hillary"],
        answer: "Roald Amundsen",
      },
      {
        question: "What is the smallest country in South America by land area?",
        options: ["Suriname", "Guyana", "French Guiana", "Uruguay"],
        answer: "Suriname",
      },
      {
        question: "Which element has the highest melting point?",
        options: ["Carbon", "Tungsten", "Platinum", "Osmium"],
        answer: "Tungsten",
      },
      {
        question: "Who composed the opera 'The Magic Flute'?",
        options: ["Ludwig van Beethoven", "Richard Wagner", "Wolfgang Amadeus Mozart", "Giuseppe Verdi"],
        answer: "Wolfgang Amadeus Mozart",
      },
      {
        question: "What is the longest river in Asia?",
        options: ["Yellow River", "Mekong River", "Yangtze River", "Ganges River"],
        answer: "Yangtze River",
      },
      {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        options: ["Theresa May", "Margaret Thatcher", "Angela Merkel", "Indira Gandhi"],
        answer: "Margaret Thatcher",
      },
      {
        question: "What is the name of the deepest part of the world's oceans?",
        options: ["Tonga Trench", "Puerto Rico Trench", "Mariana Trench", "Java Trench"],
        answer: "Mariana Trench",
      },
      {
        question: "Who wrote the novel 'Crime and Punishment'?",
        options: ["Leo Tolstoy", "Anton Chekhov", "Fyodor Dostoevsky", "Ivan Turgenev"],
        answer: "Fyodor Dostoevsky",
      },
      {
        question: "What is the largest island in the Mediterranean Sea?",
        options: ["Sardinia", "Cyprus", "Sicily", "Crete"],
        answer: "Sicily",
      },
      {
        question: "Who discovered the structure of DNA?",
        options: ["Gregor Mendel", "James Watson and Francis Crick", "Rosalind Franklin", "Linus Pauling"],
        answer: "James Watson and Francis Crick",
      },
      {
        question: "What is the currency of Switzerland?",
        options: ["Euro", "Swiss Franc", "Dollar", "Pound"],
        answer: "Swiss Franc",
      },
      {
        question: "Who painted 'The Persistence of Memory'?",
        options: ["Pablo Picasso", "Salvador Dalí", "Claude Monet", "Vincent van Gogh"],
        answer: "Salvador Dalí",
      },
      {
        question: "What is the highest mountain in Africa?",
        options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Elgon", "Mount Meru"],
        answer: "Mount Kilimanjaro",
      },
      {
        question: "Who was the first Emperor of China?",
        options: ["Han Wudi", "Qin Shi Huang", "Liu Bang", "Wu Zetian"],
        answer: "Qin Shi Huang",
      },
      {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "KCl", "MgCl2", "CaCl2"],
        answer: "NaCl",
      },
      {
        question: "Who wrote the epic poem 'The Odyssey'?",
        options: ["Virgil", "Homer", "Ovid", "Sophocles"],
        answer: "Homer",
      },
      {
        question: "What is the largest lake in Africa?",
        options: ["Lake Tanganyika", "Lake Malawi", "Lake Victoria", "Lake Chad"],
        answer: "Lake Victoria",
      },
      {
        question: "Who was the first woman to win a Nobel Prize in Physics?",
        options: ["Lise Meitner", "Marie Curie", "Maria Goeppert Mayer", "Dorothy Hodgkin"],
        answer: "Marie Curie",
      },
      {
        question: "Who was the first Secretary-General of the United Nations?",
        options: ["Dag Hammarskjöld", "U Thant", "Trygve Lie", "Kurt Waldheim"],
        answer: "Trygve Lie",
      },
      {
        question: "What is the chemical symbol for lead?",
        options: ["Pb", "Fe", "Cu", "Sn"],
        answer: "Pb",
      },
      {
        question: "Who composed the 'Four Seasons'?",
        options: ["Johann Sebastian Bach", "Antonio Vivaldi", "George Frideric Handel", "Ludwig van Beethoven"],
        answer: "Antonio Vivaldi",
      },
      {
        question: "What is the largest island in the world?",
        options: ["Borneo", "New Guinea", "Greenland", "Madagascar"],
        answer: "Greenland",
      },
      {
        question: "Who discovered the electron?",
        options: ["Ernest Rutherford", "J.J. Thomson", "Niels Bohr", "James Chadwick"],
        answer: "J.J. Thomson",
      },
      {
        question: "What is the capital city of Mongolia?",
        options: ["Almaty", "Bishkek", "Ulaanbaatar", "Tashkent"],
        answer: "Ulaanbaatar",
      },
      {
        question: "Who wrote the play 'Waiting for Godot'?",
        options: ["Harold Pinter", "Samuel Beckett", "Tom Stoppard", "Arthur Miller"],
        answer: "Samuel Beckett",
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Heart", "Skin", "Lungs"],
        answer: "Skin",
      },
      {
        question: "Who was the first President of South Africa after the end of apartheid?",
        options: ["Thabo Mbeki", "Nelson Mandela", "Jacob Zuma", "F.W. de Klerk"],
        answer: "Nelson Mandela",
      },
      {
        question: "What is the capital city of Sri Lanka?",
        options: ["Colombo", "Sri Jayawardenepura Kotte", "Kandy", "Galle"],
        answer: "Sri Jayawardenepura Kotte",
      },
      {
        question: "Who discovered the law of universal gravitation?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Johannes Kepler"],
        answer: "Isaac Newton",
      },
      {
        question: "What is the largest coral reef system in the world?",
        options: ["Belize Barrier Reef", "Red Sea Coral Reef", "Great Barrier Reef", "Mesoamerican Barrier Reef"],
        answer: "Great Barrier Reef",
      },
      {
        question: "Who wrote the novel 'Brave New World'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"],
        answer: "Aldous Huxley",
      },
      {
        question: "What is the capital city of Kenya?",
        options: ["Mombasa", "Kisumu", "Nairobi", "Nakuru"],
        answer: "Nairobi",
      },
      {
        question: "Who was the first woman to fly solo nonstop across the Atlantic Ocean?",
        options: ["Bessie Coleman", "Amelia Earhart", "Harriet Quimby", "Jacqueline Cochran"],
        answer: "Amelia Earhart",
      },
      {
        question: "What is the largest moon of Saturn?",
        options: ["Enceladus", "Rhea", "Titan", "Dione"],
        answer: "Titan",
      },
      {
        question: "Who wrote the novel 'The Catcher in the Rye'?",
        options: ["F. Scott Fitzgerald", "J.D. Salinger", "Ernest Hemingway", "John Steinbeck"],
        answer: "J.D. Salinger",
      },
      {
        question: "What is the capital city of Peru?",
        options: ["Cusco", "Arequipa", "Lima", "Trujillo"],
        answer: "Lima",
      },
      {
        question: "Who discovered the circulation of blood?",
        options: ["Andreas Vesalius", "William Harvey", "Hippocrates", "Galen"],
        answer: "William Harvey",
      },
      {
        question: "What is the largest island in the Caribbean Sea?",
        options: ["Jamaica", "Puerto Rico", "Cuba", "Hispaniola"],
        answer: "Cuba",
      },
      {
        question: "Who wrote the novel 'Moby-Dick'?",
        options: ["Nathaniel Hawthorne", "Herman Melville", "Mark Twain", "Edgar Allan Poe"],
        answer: "Herman Melville",
      },
      {
        question: "What is the capital city of Norway?",
        options: ["Stockholm", "Copenhagen", "Oslo", "Helsinki"],
        answer: "Oslo",
      },
      {
        question: "Who discovered the planet Uranus?",
        options: ["Galileo Galilei", "William Herschel", "Johannes Kepler", "Isaac Newton"],
        answer: "William Herschel",
      },
      {
        question: "What is the largest lake in North America?",
        options: ["Lake Michigan", "Lake Huron", "Lake Superior", "Great Bear Lake"],
        answer: "Lake Superior",
      },
      {
        question: "Which ancient civilization built the city of Petra?",
        options: ["Egyptians", "Nabataeans", "Romans", "Greeks"],
        answer: "Nabataeans",
      },
      {
        question: "What is the name of the world's most expensive spice by weight?",
        options: ["Vanilla", "Cardamom", "Saffron", "Cinnamon"],
        answer: "Saffron",
      },
      {
        question: "Who developed the first successful blood transfusion method?",
        options: ["Karl Landsteiner", "Charles Drew", "James Blundell", "Richard Lower"],
        answer: "Karl Landsteiner",
      },
      {
        question: "Which mathematician is credited with the first proof of the Pythagorean theorem?",
        options: ["Euclid", "Pythagoras", "Archimedes", "Thales"],
        answer: "Pythagoras",
      },
      {
        question: "What is the half-life of Carbon-14?",
        options: ["4,730 years", "5,730 years", "6,730 years", "7,730 years"],
        answer: "5,730 years",
      },
      {
        question: "Which subatomic particle is involved in the strong nuclear force?",
        options: ["Electron", "Photon", "Gluon", "Neutrino"],
        answer: "Gluon",
      },
      {
        question: "What is the name of the protein that carries oxygen in red blood cells?",
        options: ["Myoglobin", "Hemoglobin", "Collagen", "Keratin"],
        answer: "Hemoglobin",
      },
      {
        question: "What is the atomic number of Uranium?",
        options: ["90", "92", "94", "96"],
        answer: "92",
      },
      {
        question: "Which scientist proposed the quantum theory of light?",
        options: ["Niels Bohr", "Max Planck", "Louis de Broglie", "Erwin Schrödinger"],
        answer: "Max Planck",
      },
      {
        question: "What is the chemical formula for polyethylene?",
        options: ["(C2H4)n", "(CH2)n", "(C2H2)n", "(CH4)n"],
        answer: "(C2H4)n",
      },
      {
        question: "What is the speed of light in meters per second?",
        options: ["299,792,458", "300,000,000", "299,999,999", "298,792,458"],
        answer: "299,792,458",
      },
      {
        question: "Which enzyme is responsible for unwinding DNA during replication?",
        options: ["DNA Polymerase", "Helicase", "Ligase", "Topoisomerase"],
        answer: "Helicase",
      },
      {
        question: "What is the Schwarzschild radius of a black hole with the mass of the Sun?",
        options: ["1.5 km", "2.5 km", "3 km", "3.5 km"],
        answer: "3 km",
      },
      {
        question: "Which particle is its own antiparticle?",
        options: ["Proton", "Electron", "Photon", "Neutron"],
        answer: "Photon",
      },
      {
        question: "What is the chemical name for DNA?",
        options: ["Deoxyribonucleic acid", "Dihydroxynucleic acid", "Deoxyribose nucleotide", "Deoxyribose nucleoside"],
        answer: "Deoxyribonucleic acid",
      },
      {
        question: "What is the most abundant isotope of hydrogen?",
        options: ["Protium", "Deuterium", "Tritium", "Hydrogen-4"],
        answer: "Protium",
      }
    ]
  },
  mathematics: {
    easy: [
      // Move existing math questions here
    ],
    medium: [],
    hard: []
  },
  technology: {
    easy: [
      // Move existing technology questions here
    ],
    medium: [],
    hard: []
  },
  science: {
    easy: [
      {
        question: "What planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["H2", "O2", "H2O", "CO2"],
        answer: "H2O",
      },
      {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answer: "Carbon dioxide",
      },
      {
        question: "What is the center of an atom called?",
        options: ["Electron", "Proton", "Nucleus", "Neutron"],
        answer: "Nucleus",
      },
      {
        question: "What force keeps us on the ground?",
        options: ["Magnetism", "Gravity", "Friction", "Inertia"],
        answer: "Gravity",
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        answer: "Skin",
      },
      {
        question: "What is the boiling point of water in Celsius?",
        options: ["50°C", "90°C", "100°C", "150°C"],
        answer: "100°C",
      },
      {
        question: "What is the process by which plants make their food?",
        options: ["Respiration", "Digestion", "Photosynthesis", "Fermentation"],
        answer: "Photosynthesis",
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond",
      },
      {
        question: "What is the main gas found in the air we breathe?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answer: "Nitrogen",
      },
      {
        question: "What is the name of the process by which a gas turns into a solid?",
        options: ["Evaporation", "Condensation", "Deposition", "Freezing"],
        answer: "Deposition",
      },
    ],
    medium: [
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
        answer: "Mitochondria",
      },
      {
        question: "What is the chemical symbol for potassium?",
        options: ["P", "Po", "K", "Pt"],
        answer: "K",
      },
      {
        question: "What is the process by which plants convert carbon dioxide and water into glucose and oxygen using sunlight?",
        options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
        answer: "Photosynthesis",
      },
      {
        question: "What is the most abundant element in the Earth's crust?",
        options: ["Iron", "Oxygen", "Silicon", "Aluminum"],
        answer: "Oxygen",
      },
      {
        question: "What is the name of the first artificial satellite launched into space?",
        options: ["Apollo 11", "Voyager 1", "Sputnik 1", "Hubble"],
        answer: "Sputnik 1",
      },
      {
        question: "What is the chemical formula for hydrogen peroxide?",
        options: ["H2O", "H2O3", "H2O2", "H2O4"],
        answer: "H2O2",
      },
    ],
    hard: [
      {
        question: "What is the name of the scientist who discovered the electron?",
        options: ["Ernest Rutherford", "Niels Bohr", "J.J. Thomson", "James Chadwick"],
        answer: "J.J. Thomson",
      },
      {
        question: "What is the chemical formula for benzene?",
        options: ["C6H12", "C6H6", "C5H6", "C7H8"],
        answer: "C6H6",
      },
      {
        question: "What is the name of the scientist who proposed the uncertainty principle?",
        options: ["Albert Einstein", "Niels Bohr", "Werner Heisenberg", "Max Planck"],
        answer: "Werner Heisenberg",
      },
      {
        question: "What is the chemical formula for sulfuric acid?",
        options: ["H2SO3", "H2SO4", "H2S", "H2SO2"],
        answer: "H2SO4",
      },
      {
        question: "What is the chemical formula for acetic acid?",
        options: ["CH3COOH", "C2H4O2", "C2H3O2", "CH3COH"],
        answer: "CH3COOH",
      },
      {
        question: "What is the chemical formula for glucose?",
        options: ["C6H12O5", "C6H12O6", "C5H10O5", "C6H10O6"],
        answer: "C6H12O6",
      },
      {
        question: "What is the chemical formula for sodium bicarbonate?",
        options: ["NaCl", "NaOH", "NaHCO3", "Na2CO3"],
        answer: "NaHCO3",
      },
      {
        question: "What is the name of the scientist who discovered the electron's charge?",
        options: ["Ernest Rutherford", "Robert Millikan", "Niels Bohr", "J.J. Thomson"],
        answer: "Robert Millikan",
      },
      {
        question: "What is the chemical formula for phosphoric acid?",
        options: ["H3PO2", "H3PO3", "H3PO4", "H3PO5"],
        answer: "H3PO4",
      },
      {
        question: "What is the name of the scientist who discovered the photoelectric effect?",
        options: ["Isaac Newton", "Albert Einstein", "Max Planck", "Niels Bohr"],
        answer: "Albert Einstein",
      },
      {
        question: "What is the chemical formula for calcium carbonate?",
        options: ["CaO", "Ca(OH)2", "CaCO3", "CaCl2"],
        answer: "CaCO3",
      },
      {
        question: "What is the name of the scientist who discovered the law of electromagnetic induction?",
        options: ["James Clerk Maxwell", "Michael Faraday", "Heinrich Hertz", "Nikola Tesla"],
        answer: "Michael Faraday",
      },
      // Add more unique questions here...
    ]
  },
  history: {
    easy: [
      {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
        answer: "George Washington",
      },
      {
        question: "What ancient civilization built the pyramids?",
        options: ["Romans", "Greeks", "Egyptians", "Persians"],
        answer: "Egyptians",
      },
      {
        question: "Who was the first man to walk on the moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
        answer: "Neil Armstrong",
      },
      {
        question: "What year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        answer: "1945",
      },
      {
        question: "Who was the famous civil rights leader who delivered the 'I Have a Dream' speech?",
        options: ["Malcolm X", "Martin Luther King Jr.", "Rosa Parks", "Nelson Mandela"],
        answer: "Martin Luther King Jr.",
      },
      {
        question: "Who was the famous French queen executed during the French Revolution?",
        options: ["Catherine de' Medici", "Marie Antoinette", "Anne of Austria", "Eleanor of Aquitaine"],
        answer: "Marie Antoinette",
      }
    ],
    medium: [
      // medium difficulty questions will go here
    ],
    hard: [
      // hard difficulty questions will go here
    ]
  },
};

const Quiz = ({ onComplete, onQuit, category = "general", difficulty = "medium" }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(() => {
    switch(difficulty) {
      case 'easy': return 60;
      case 'medium': return 90;
      case 'hard': return 120;
      default: return 90;
    }
  });

  // Get questions for selected category and difficulty
  const currentQuestions = questions[category]?.[difficulty] || questions.general.easy;

  // Randomly select 10 questions from the pool
  const [quizQuestions] = useState(() => {
    const shuffled = [...currentQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  });

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          // Pass true to indicate time's up
          onComplete(score, true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [score, onComplete]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Pass false to indicate normal completion
      onComplete(score + (selectedOption === quizQuestions[currentQuestion].answer ? 1 : 0), false);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-info">
          <span className="category-label">{category}</span>
          <span className="difficulty-label" data-difficulty={difficulty}>{difficulty}</span>
        </div>
        <div className="timer" data-difficulty={difficulty}>
          Time Left: {formatTime(timeLeft)}
        </div>
      </div>
      <h2>{quizQuestions[currentQuestion].question}</h2>
      <div className="options-container">
        {quizQuestions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className="option-button"
            disabled={timeLeft === 0}
          >
            {option}
          </button>
        ))}
      </div>
      <p>Question {currentQuestion + 1} of {quizQuestions.length}</p>
      <button className="quit-button" onClick={onQuit}>
        Quit Quiz
      </button>
    </div>
  );
};

export default Quiz; 