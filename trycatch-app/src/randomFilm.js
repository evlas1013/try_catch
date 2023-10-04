var pickGenre, pickTrait, pickSubGenre, pickJob, pickTheCatch, pickTraitTwo, task, theCatchString, randomWord, questProp, pickProp, rTask, rCatchString;

var genre = 	
		[
		"horror or thriller", 
		"sitcom", 
		"pirate film", 
		"science fiction adventure", 
		"romantic comedy",
		"dark comedy", 
		"action film",
		"goofy comedy",
		"heist film",		
		"drama",
		"buddy comedy",
		"parody",
		"zombie flick",
		"alien encounter",
		"monster film"
		];
		
var randomWordArray = 
		[
		"that sounds impossible but I will try",
		"pan-fried dumplings",
		"that would not be the first time",
		"I really need that pogo stick",
		"my mother would not approve of this",
		"you would not believe how thirsty I am right now"
		];
				
				
var prop = 	
		[
		"a cell phone",
		"a traffic cone",
		"a pillow",
		"a credit card",
		"a banana",
		"a time machine",
		"a boat of some sort",
		"a dog",
		"a fanny pack",
		"a tennis racket",
		"a bicycle",
		"a cigarette",
		"an umbrella",
		"a sword",
		"a gun",		
		"an electric guitar",		
		"something Star Wars related",			
		"Mexican food",
		"a shortcut",
		"a lawn mower",
		"a retro video game system"
		];



var subGenre = 	
		[
		"a modern",		
		"a post-apocaplypic",		
		"a musical",
		"a film-noir style",
		"a black and white",
		"a found-footage style",
		"a documentary style",
		"a cheesy",
		"a procedural"
		];


var trait = 	
		[
		"a geeky",
		"an over-compensating",
		"a timid",
		"a grammar-obsessed",
		"an indecisive",
		"a loud spoken",
		"an obsessive-compulsive",
		"a socially awkward",
		"a rude",
		"an emotionless",
		"an overly sensitive",
		"a forgetful",		
		"a narcissistic",		
		"a jock stereotype",		
		"a spoiled",		
		"a lazy",		
		"a determined",		
		"a struggling",		 
		"an aspiring",		 
		"a 2nd rate",		 
		"a washed out",		 
		"a diabetic",		 
		"annoyingly optimistic",
      "an Abrasive",
      "an Abrupt",
      "an Agonizing",
      "an Aimless",
      "an Airy",
      "an Aloof",
      "an Amoral",
      "an Angry",
      "an Anxious",
      "an Apathetic",
      "an Arbitrary",
      "an Argumentative",
      "an Arrogantt",
      "an Artificial",
      "an Asocial",
      "an Assertive",
      "an Astigmatic",
      "a Barbaric",
      "a Bewildered",
      "a Bizarre",
      "a Bland",
      "a Blunt",
      "a Biosterous",
      "a Brittle",
      "a Brutal",
      "a Calculating",
      "a Callous",
      "a Cantakerous",
      "a Careless",
      "a Cautious",
      "a Charmless",
      "a Childish",
      "a Clumsy",
      "a Coarse",
      "a Cold",
      "a Colorless",
      "a Complacent",
      "a Complaintive",
      "a Compulsive",
      "a Conceited",
      "a Condemnatory",
      "a Conformist",
      "a Confused",
      "a Contemptible",
      "a Conventional",
      "a Cowardly",
      "a Crafty",
      "a Crass",
      "a Crazy",
      "a Criminal",
      "a Critical",
      "a Crude",
      "a Cruel",
      "a Cynical",
      "a Decadent",
      "a Deceitful",
      "a Delicate",
      "a Demanding",
      "a Dependent",
      "a Desperate",
      "a Destructive",
      "a Devious",
      "a Difficult",
      "a Dirty",
      "a Disconcerting",
      "a Discontented",
      "a Discouraging",
      "a Discourteous",
      "a Dishonest",
      "a Disloyal",
      "a Disobedient",
      "a Disorderly",
      "a Disorganized",
      "a Disputatious",
      "a Disrespectful",
      "a Disruptive",
      "a Dissolute",
      "a Dissonant",
      "a Distractible",
      "a Disturbing",
      "a Dogmatic",
      "a Domineering",
      "a Dull",
      "an Easily Discouraged",
      "an Egocentric",
      "an Enervated",
      "an Envious",
      "an Erratic",
      "an Escapist",
      "an Excitable",
      "an Expedient",
      "an Extravagant",
      "an Extreme",
      "a Faithless",
      "a False",
      "a Fanatical",
      "a Fanciful",
      "a Fatalistic",
      "a Fawning",
      "a Fearful",
      "a Fickle",
      "a Fiery",
      "a Fixed",
      "a Flamboyant",
      "a Foolish",
      "a Forgetful",
      "a Fraudulent",
      "a Frightening",
      "a Frivolous",
      "a Gloomy",
      "a Graceless",
      "a Grand",
      "a Greedy",
      "a Grim",
      "a Gullible",
      "a Hateful",
      "a Haughty",
      "a Hedonistic",
      "a Hesitant",
      "a Hidebound",
      "a High-handed",
      "a Hostile",
      "an Ignorant",
      "an Imitative",
      "an Impatient",
      "an Impractical",
      "an Imprudent",
      "an Impulsive",
      "an Inconsiderate",
      "an Incurious",
      "an Indecisive",
      "an Indulgent",
      "an Inert",
      "an Inhibited",
      "an Insecure",
      "an Insensitive",
      "an Insincere",
      "an Insulting",
      "an Intolerant",
      "an Irascible",
      "an Irrational",
      "an Irresponsible",
      "an Irritable",
      "a Lazy",
      "a Libidinous",
      "a Loquacious",
      "a Malicious",
      "a Mannered",
      "a Mannerless",
      "a Mawkish",
      "a Mealymouthed",
      "a Mechanical",
      "a Meddlesome",
      "a Melancholic",
      "a Meretricious",
      "a Messy",
      "a Miserable",
      "a Miserly",
      "a Misguided",
      "a Mistaken",
      "a Money-minded",
      "a Monstrous",
      "a Moody",
      "a Morbid",
      "a Muddle-headed",
      "a Naive",
      "a Narcissistic",
      "a Narrow",
      "a Narrow-minded",
      "a Natty",
      "a Negativistic",
      "a Neglectful",
      "a Neurotic",
      "a Nihilistic",
      "an Obnoxious",
      "an Obsessive",
      "an Obvious",
      "an Odd",
      "an Offhand",
      "an One-dimensional",
      "an One-sided",
      "an Opinionated",
      "an Opportunistic",
      "an Oppressed",
      "an Outrageous",
      "an Overimaginative",
      "a Paranoid",
      "a Passive",
      "a Pedantic",
      "a Perverse",
      "a Petty",
      "a Pharissical",
      "a Phlegmatic",
      "a Plodding",
      "a Pompous",
      "a Possessive",
      "a Power-hungry",
      "a Predatory",
      "a Prejudiced",
      "a Presumptuous",
      "a Pretentious",
      "a Prim",
      "a Procrastinating",
      "a Profligate",
      "a Provocative",
      "a Pugnacious",
      "a Puritanical",
      "a Quirky",
      "a Reactionary",
      "a Reactive",
      "a Regimental",
      "a Regretful",
      "a Repentant",
      "a Repressed",
      "a Resentful",
      "a Ridiculous",
      "a Rigid",
      "a Ritualistic",
      "a Rowdy",
      "a Ruined",
      "a Sadistic",
      "a Sanctimonious",
      "a Scheming",
      "a Scornful",
      "a Secretive",
      "a Sedentary",
      "a Selfish",
      "a Self-indulgent",
      "a Shallow",
      "a Shortsighted",
      "a Shy",
      "a Silly",
      "a Single-minded",
      "a Sloppy",
      "a Slow",
      "a Sly",
      "a Small-thinking",
      "a Softheaded",
      "a Sordid",
      "a Steely",
      "a Stiff",
      "a Strong-willed",
      "a Stupid",
      "a Submissive",
      "a Superficial",
      "a Superstitious",
      "a Suspicious",
      "a Tactless",
      "a Tasteless",
      "a Tense",
      "a Thievish",
      "a Thoughtless",
      "a Timid",
      "a Transparent",
      "a Treacherous",
      "a Trendy",
      "a Troublesome",
      "an Unappreciative",
      "an Uncaring",
      "an Uncharitable",
      "an Unconvincing",
      "an Uncooperative",
      "an Uncreative",
      "an Uncritical",
      "an Unctuous",
      "an Undisciplined",
      "an Unfriendly",
      "an Ungrateful",
      "an Unhealthy",
      "an Unimaginative",
      "an Unimpressive",
      "an Unlovable",
      "an Unpolished",
      "an Unprincipled",
      "an Unrealistic",
      "an Unreflective",
      "an Unreliable",
      "an Unrestrained",
      "an Unself-critical",
      "an Unstable",
      "a Vacuous",
      "a Vague",
      "a Venal",
      "a Venomous",
      "a Vindictive",
      "a Vulnerable",
      "a Weak",
      "a Weak-willed",
      "a Well-meaning",
      "a Willful",
      "a Wishful",
      "a Zany",
      "an Accessible",
      "an Active",
      "an Adaptable",
      "an Admirable",
      "an Adventurous",
      "an Agreeable",
      "an Alert",
      "an Allocentric",
      "an Amiable",
      "an Anticipative",
      "an Appreciative",
      "an Articulate",
      "an Aspiring",
      "an Athletic",
      "an Attractive",
      "a Balanced",
      "a Benevolent",
      "a Brilliant",
      "a Calm",
      "a Capable",
      "a Captivating",
      "a Caring",
      "a Challenging",
      "a Charismatic",
      "a Charming",
      "a Cheerful",
      "a Clean",
      "a Clear-headed",
      "a Clever",
      "a Colorful",
      "a Companionly",
      "a Compassionate",
      "a Conciliatory",
      "a Confident",
      "a Conscientious",
      "a Considerate",
      "a Constant",
      "a Contemplative",
      "a Cooperative",
      "a Courageous",
      "a Courteous",
      "a Creative",
      "a Cultured",
      "a Curious",
      "a Daring",
      "a Debonair",
      "a Decent",
      "a Decisive",
      "a Dedicated",
      "a Deep",
      "a Dignified",
      "a Directed",
      "a Disciplined",
      "a Discreet",
      "a Dramatic",
      "a Dutiful",
      "a Dynamic",
      "an Earnest",
      "an Ebullient",
      "an Educated",
      "an Efficient",
      "an Elegant",
      "an Eloquent",
      "an Empathetic",
      "an Energetic",
      "an Enthusiastic",
      "an Esthetic",
      "an Exciting",
      "an Extraordinary",
      "a Fair",
      "a Faithful",
      "a Farsighted",
      "a Felicific",
      "a Firm",
      "a Flexible",
      "a Focused",
      "a Forecful",
      "a Forgiving",
      "a Forthright",
      "a Freethinking",
      "a Friendly",
      "a Fun-loving",
      "a Gallant",
      "a Generous",
      "a Gentle",
      "a Genuine",
      "a Good-natured",
      "a Gracious",
      "a Hardworking",
      "a Healthy",
      "a Hearty",
      "a Helpful",
      "a Herioc",
      "a High-minded",
      "a Honest",
      "a Honorable",
      "a Humble",
      "a Humorous",
      "an Idealistic",
      "an Imaginative",
      "an Impressive",
      "an Incisive",
      "an Incorruptible",
      "an Independent",
      "an Individualistic",
      "an Innovative",
      "an Inoffensive",
      "an Insightful",
      "an Insouciant",
      "an Intelligent",
      "an Intuitive",
      "an Invulnerable",
      "a Kind",
      "a Knowledge",
      "a Leaderly",
      "a Leisurely",
      "a Liberal",
      "a Logical",
      "a Lovable",
      "a Loyal",
      "a Lyrical",
      "a Magnanimous",
      "a Many-sided",
      "a Masculine (Manly)",
      "a Mature",
      "a Methodical",
      "a Maticulous",
      "a Moderate",
      "a Modest",
      "a Multi-leveled",
      "a Neat",
      "a Nonauthoritarian",
      "an Objective",
      "an Observant",
      "an Open",
      "an Optimistic",
      "an Orderly",
      "an Organized",
      "an Original",
      "a Painstaking",
      "a Passionate",
      "a Patient",
      "a Patriotic",
      "a Peaceful",
      "a Perceptive",
      "a Perfectionist",
      "a Personable",
      "a Persuasive",
      "a Planful",
      "a Playful",
      "a Polished",
      "a Popular",
      "a Practical",
      "a Precise",
      "a Principled",
      "a Profound",
      "a Protean",
      "a Protective",
      "a Providential",
      "a Prudent",
      "a Punctual",
      "a Pruposeful",
      "a Rational",
      "a Realistic",
      "a Reflective",
      "a Relaxed",
      "a Reliable",
      "a Resourceful",
      "a Respectful",
      "a Responsible",
      "a Responsive",
      "a Reverential",
      "a Romantic",
      "a Rustic",
      "a Sage",
      "a Sane",
      "a Scholarly",
      "a Scrupulous",
      "a Secure",
      "a Selfless",
      "a Self-critical",
      "a Self-defacing",
      "a Self-denying",
      "a Self-reliant",
      "a Self-sufficent",
      "a Sensitive",
      "a Sentimental",
      "a Seraphic",
      "a Serious",
      "a Sexy",
      "a Sharing",
      "a Shrewd",
      "a Simple",
      "a Skillful",
      "a Sober",
      "a Sociable",
      "a Solid",
      "a Sophisticated",
      "a Spontaneous",
      "a Sporting",
      "a Stable",
      "a Steadfast",
      "a Steady",
      "a Stoic",
      "a Strong",
      "a Studious",
      "a Suave",
      "a Subtle",
      "a Sweet",
      "a Sympathetic",
      "a Systematic",
      "a Tasteful",
      "a Teacherly",
      "a Thorough",
      "a Tidy",
      "a Tolerant",
      "a Tractable",
      "a Trusting",
      "an Uncomplaining",
      "an Understanding",
      "an Undogmatic",
      "an Unfoolable",
      "an Upright",
      "an Urbane",
      "a Venturesome",
      "a Vivacious",
      "a Warm",
      "a Well-bred",
      "a Well-read",
      "a Well-rounded",
      "a Winning",
      "a Wise",
      "a Witty",
      "a Youthful",
      "an Absentminded",
      "an Aggressive",
      "an Ambitious",
      "an Amusing",
      "an Artful",
      "an Ascetic",
      "an Authoritarian",
      "a Big-thinking",
      "a Boyish",
      "a Breezy",
      "a Businesslike",
      "a Busy",
      "a Casual",
      "a Crebral",
      "a Chummy",
      "a Circumspect",
      "a Competitive",
      "a Complex",
      "a Confidential",
      "a Conservative",
      "a Contradictory",
      "a Crisp",
      "a Cute",
      "a Deceptive",
      "a Determined",
      "a Dominating",
      "a Dreamy",
      "a Driving",
      "a Droll",
      "a Dry",
      "an Earthy",
      "an Effeminate",
      "an Emotional",
      "an Enigmatic",
      "an Experimental",
      "a Familial",
      "a Folksy",
      "a Formal",
      "a Freewheeling",
      "a Frugal",
      "a Glamorous",
      "a Guileless",
      "a High-spirited",
      "a Huried",
      "a Hypnotic",
      "an Iconoclastic",
      "an Idiosyncratic",
      "an Impassive",
      "an Impersonal",
      "an Impressionable",
      "an Intense",
      "an Invisible",
      "an Irreligious",
      "an Irreverent",
      "a Maternal",
      "a Mellow",
      "a Modern",
      "a Moralistic",
      "a Mystical",
      "a Neutral",
      "a Noncommittal",
      "a Noncompetitive",
      "an Obedient",
      "an Old-fashined",
      "an Ordinary",
      "an Outspoken",
      "a Paternalistic",
      "a Physical",
      "a Placid",
      "a Political",
      "a Predictable",
      "a Preoccupied",
      "a Private",
      "a Progressive",
      "a Proud",
      "a Pure",
      "a Questioning",
      "a Quiet",
      "a Religious",
      "a Reserved",
      "a Restrained",
      "a Retiring",
      "a Sarcastic",
      "a Self-conscious",
      "a Sensual",
      "a Skeptical",
      "a Smooth",
      "a Soft",
      "a Solemn",
      "a Solitary",
      "a Stern",
      "a Stoiid",
      "a Strict",
      "a Stubborn",
      "a Stylish",
      "a Subjective",
      "a Surprising",
      "a Soft",
      "a Tough",
      "an Unaggressive",
      "an Unambitious",
      "an Unceremonious",
      "an Unchanging",
      "an Undemanding",
      "an Unfathomable",
      "an Unhurried",
      "an Uninhibited",
      "an Unpatriotic",
      "an Unpredicatable",
      "an Unreligious",
      "an Unsentimental",
      "a Whimsical"          
		];
		
var traitTwo =	
		[
		"afraid of heights",
		"on an epic quest to find [questProp]",		
		"one week away from retirement",		
		"from another dimension",		
		"just getting out of a messy divorce",		
		"obsessed with 90's pop culture",		
		"hiding a secret",		
		"seaching for their purpose in life",		
		"on the brink of a great discovery",		 
		"dealing with the loss of a cat",		 
		"trying to find their purpose in life",		 
		"searching for a new best friend",
		"pretty sure they are being cheated on",
		"one mistake away from being fired",
		"unaware that they are about to change the world",
		"incapable of following through on anything",
		"adjusting back to normal life after being the star of a hit reality show",
		"unhappy with their career choice"
		];



var job = 	
		[
		"police officer",
		"barrista",
		"singer",
		"news anchor",
		"hired driver",
		"realtor",
		"pilot",
		"astronaut",
		"engineer",
		"film producer",
		"surgeon",
		"chemist",
		"comedian",
		"author",
		"superhero",		
		"actor",		
		"elderly person",		
		"military personnel",		
		"small business owner",		 
		"hipster",		 
		"hacker",
        "Professor",
        "Teacher",
        "Actor",
        "member of the clergy",
        "Musician",
        "Philosopher",
        "Visual Artist",
        "Writer",
        "Audiologist",
        "Chiropractor",
        "Dentist",
        "Dietitian",
        "Doctor",
        "Medical Laboratory Scientist",
        "Midwive",
        "Nurse",
        "Occupational therapist",
        "Optometrist",
        "Pathologist",
        "Pharmacist",
        "Physical therapist",
        "Physician",
        "Psychologist",
        "Speech-language pathologist",
        "Accountant",
        "Actuarie",
        "Agriculturist",
        "Architect",
        "Economist",
        "Engineer",
        "Interpreter",
        "Attorney at law",
        "Advocate",
        "Solicitor",
        "Librarian",
        "Statistician",
        "Surveyor",
        "Urban planner",
        "Human resource director",
        "Firefighter",
        "Judge",
        "Military officer",
        "Police officer",
        "Air traffic controller",
        "Aircraft pilot",
        "Sea captain",
        "Scientist",
        "Astronomer",
        "Biologist",
        "Botanist",
        "Ecologist",
        "Geneticist",
        "Immunologist",
        "Pharmacologist",
        "Virologist",
        "Zoologist",
        "Chemist",
        "Geologist",
        "Meteorologist",
        "Oceanographer",
        "Physicist",
        "Programmer",
        "Web developer",
        "Designer",
        "Graphic designer"
		];
		
var theCatch = 
		[
		"it must be shot entirely on a smart phone",
		"it must be shot in a single take (or at least edited to appear as such)",
		"it must have a narrator",
		"the film must start with the final scene",
		"the lead cast must be entirely women",
		"you must use the word or phrase '[phraseToUse]' in your dialogue",
		"it must have at least 1 slow motion sequence",
		"your main character must have a catch phrase",
		"it must have a chase sequence",
		"you may not use the words 'I' or 'You' in your dialogue",
		"your plot must introduce some sort of paradox",
		"multiple characters must be played by the same actor and, at some point, those characters must interact",
		"all visual effects must be done in-camera",
		"all scenes with dialog must be outdoors",
		"it must take place in only one location"
		];

var protag;
var query;
var photoURL;






function replaceData(){
	rTask = task.replace("[questProp]", prop[pickQuestProp()]);
	rCatchString = theCatchString.replace("[phraseToUse]", randomWordArray[pickRandomWord()]);
    rProtag = protag.replace("[questProp]", prop[pickQuestProp()]);
}

function pickQuestProp(){
	return parseInt(Math.random() * prop.length);
}

function pickRandomWord(){
	return parseInt(Math.random() * randomWordArray.length);
}

function generateComboCount(){
	var combinations;
	combinations = theCatch.length * job.length * traitTwo.length * trait.length * subGenre.length * prop.length * genre.length + (randomWordArray.length - 1) + (prop.length - 1);
	combinations = formatNumber(combinations);
	return combinations;
}

function updateCountText(){
	document.getElementById("countHeader").innerHTML = "Over 3 Trillion different possibilities!"//generateComboCount() + " different possibilities!";
}

function generateData(){
	document.getElementById("randomImage").src = "http://www.inspirednationonline.com/wp-content/uploads/2016/04/wait-1.png";
	//document.getElementById("theProp").src = "http://www.inspirednationonline.com/wp-content/uploads/2016/04/wait-1.png";
	pickGenre = Math.floor(Math.random() * genre.length);
	pickTrait  = Math.floor(Math.random() * trait.length);
	pickSubGenre  = Math.floor(Math.random() * subGenre.length);
	pickJob  = Math.floor(Math.random() * job.length);
	pickTheCatch  = Math.floor(Math.random() * theCatch.length);
	pickTraitTwo = Math.floor(Math.random() * traitTwo.length);
	pickProp = Math.floor(Math.random() * prop.length);
	
	//hide image and GPT divs until they have data
	//document.getElementById("randomImageDiv").style.display = "none";
	//document.getElementById("gptDiv").style.display = "none";
	
	//start the strings
	task  = "Try to write ";
	theCatchString  = "The catch is, ";
	
	

	//build the strings based on random data
	task += subGenre[pickSubGenre] + " ";
	task += genre[pickGenre] + " starring ";
	protag = trait[pickTrait].toLowerCase() + " " + job[pickJob].toLocaleLowerCase();
	protag += " who is " + traitTwo[pickTraitTwo] + "."
    task += protag;
	let theProp = prop[pickProp];
	theCatchString += theCatch[pickTheCatch] + " and your film must include " + theProp + ".";	
	
	//replace string tags
	replaceData();
	
	let allTogether = rProtag + " using " + theProp+"."; 
    
	callMidJourney(allTogether, "randomImage", "caption");	
	
	//put those strings in our document
	document.getElementById("task").innerHTML = rTask;
	document.getElementById("catch").innerHTML = rCatchString;
	//document.getElementById("assignment").value = rTask + " " + rCatchString;
	
	callGPT(rTask + rCatchString);
	
	//after the data is in place, clear it so we can refresh
	task = "";
	theCatchString = "";
	rTask = "";
	rCatchString = "";
	
	}

function getJSON(inURL){
   var httpRequest = new XMLHttpRequest();
   httpRequest.open("GET",inURL,false);
   httpRequest.send(null);
   
   return { status: httpRequest.status, body: httpRequest.responseText };
}

function hideButton(button){
	document.getElementById(button).style.display="none";
}

function showDiv(divName){
	document.getElementById(divName).classList.remove('hiddendiv');
}

function hideDiv(divName){
	document.getElementById(divName).classList.add('hiddendiv');
}

function formatNumber(inNumber){
	var inNumber;
	var outNumber;
	
	for(i = inNumber.length; i > 0; i = i-3){
		outNumber = inNumber.splice(i, i+3) + ',';
	}
	return outNumber
}

function sendToTitle()
{
	var localTask = document.getElementById("task").innerHTML;
	var localCatch = document.getElementById("catch").innerHTML;
	var localAssignment = localTask + " " + localCatch;
	localAssignment = localAssignment.replace(/\./gi, "%2E");
	localAssignment = localAssignment.replace(/\,/gi, "%2C");
	localAssignment = localAssignment.replace(/'/gi, "%27");
	localAssignment = localAssignment.replace(/\//gi, "%2F");
	localAssignment = localAssignment.replace(/\\/gi, "%5C");
	
	var url = "src/1080template.html?assignment="+localAssignment;
	window.open(url, "_blank");
}

async function callGPT(inQuery)
{
	document.getElementById("script").innerText = "Waiting for GPT...\nThis can take a moment.";
	const response = await fetch('https://api.openai.com/v1/chat/completions', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
		'Authorization': 'Bearer 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'
	  },
	  body: JSON.stringify({
		'model': 'gpt-3.5-turbo',
		'messages': [
		  {
			'role': 'user',
			'content': "You are an expert screenwriter. " + inQuery + " In screenplay format."
		  }
		],
		"temperature": 0.7
	  })
	});
		
	if(await response.status == 200)
	{
		let gptResponse = await response.json();
		let gptJSON = JSON.stringify(gptResponse);
		let gptObject = JSON.parse(gptJSON);
		document.getElementById("script").innerText = gptObject.choices[0].message.content;
		//document.getElementById("gptDiv").style.display = "block";
	} else {
		document.getElementById("script").innerText = "There was a problem with the GPT response. Status: " + gptResponse.status;
	}
	
}

async function callMidJourney(inQuery, imageId, captionId)
{
	let prompt = subGenre[pickSubGenre] + " " + genre[pickGenre] + " about " + inQuery + " Headshot. Hero Pose. Cinematic. Publicity.";
	document.getElementById("caption").innerText = "Waiting for DallE...";
	const response = await fetch('https://api.openai.com/v1/images/generations', {
	method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
		'Authorization': 'Bearer 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'
	  },
	  body: JSON.stringify({
		'prompt': prompt,
		"size": "512x512"
	  })
	}).then((response) => response.body)
  .then((rb) => {
    const reader = rb.getReader();

    return new ReadableStream({
      start(controller) {
        // The following function handles each data chunk
        function push() {
          // "done" is a Boolean and value a "Uint8Array"
          reader.read().then(({ done, value }) => {
            // If there is no more data to read
            if (done) {
              console.log("done", done);
              controller.close();
              return;
            }
            // Get the data and send it to the browser via the controller
            controller.enqueue(value);
            // Check chunks by logging to the console
            console.log(done, value);
            push();
          });
        }

        push();
      },
    });
  })
  .then((stream) =>
    // Respond with our stream
    new Response(stream, { headers: { "Content-Type": "text/html" } }).text(),
  )
  .then((result) => {
	  resultJSON = JSON.parse(result);
    document.getElementById(imageId).src = resultJSON.data[0].url;
  });
	
	document.getElementById(captionId).innerText = prompt;
	
}

function saveTextToFile()
{
	let fileName = "TryCatchFilms_Auto_Script.txt"	
	let scriptText = document.getElementById("script").innerText;
	//let savedFile = new File([scriptText], fileName, {type: "text/plain", lastModified: new Date()});
	
	let file = new Blob([scriptText], {type: "text/plain"});
	if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, fileName);
   else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
