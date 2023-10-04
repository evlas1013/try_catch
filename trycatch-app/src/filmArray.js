var films = 	
		[
// PASTE NEW FILMS BELOW
//REMEMBER TO INCLUDE COMMAS BETWEEN SUBMISSIONS!!
//************************************
["Admin","Try Catch Films","nick.salve@gmail.com","What we're all about.",'<iframe width="560" height="315" src="https://www.youtube.com/embed/kGlxsrDjpHM" frameborder="0" allowfullscreen></iframe>'],
["Nick Salve, Greg Tulonen, Philip Hobby","Evlas Entertainment","nick.salve@gmail.com","Acrophobia",'<iframe width="560" height="315" src="https://www.youtube.com/embed/m2Gpo5PymGQ" frameborder="0" allowfullscreen></iframe>']
//************************************
//DO NOT MESS WITH ANYTHING BELOW THIS LINE
		];//end films
		
var bodyText = "", producer = "", productionCompany = "", productionContact = "", assignment = "", embed = "";


function displayFilms(){
	if(films.length == 0){
		bodyText = "<p>There are currently no live films. Be the first! Use the link above to sumbit your films!</p>";
	} else {
		for(var i = films.length - 1; i>=0; i--){
			producer = films[i][0];
			productionCompany = films[i][1];
			productionContact = films[i][2];
			assignment = films[i][3];
			embed = films[i][4];
			
			bodyText += "<p class='filmArray'><a class='filmCompany'>" + producer + "</a><br><a class='filmTitle'>" + 
			productionCompany + "</a><br>" + embed + "<br>" + assignment + "</p>";
		}//for
	}//else
	document.getElementById("filmArray").innerHTML = bodyText;
}//displayFilms