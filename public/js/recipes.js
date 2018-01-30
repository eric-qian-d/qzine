function recipeSearch() {
	const button = document.getElementById('search-button');
	button.addEventListener('click', recipeSearchHandler);
} 

function recipeSearchHandler() {
	const searchbar = document.getElementById('search-bar');
	
	const text = searchbar.value;
	searchbar.value = '';
	console.log(text);
	renderRecipes(text);
	post('/api/addrecipe', {'content': text},
		function(success){
			console.log('success!')
		 , 
		function(err){
			console.log(err)
		}
		})
}

function renderRecipes(recipe) {
  	const recipesDiv = document.getElementById('recipes-container');
  	recipesDiv.innerHTML = '';
  	get("https://api.edamam.com/search", {

		'q': recipe,
    'app_id': 'ae43ca5d',
    'app_key': '6410c40131f0bdaa4891f98f03afebef'

  	}, 

  	function(recipesArr) {
    for (let i = 0; i < recipesArr.hits.length; i++) {
      const currentRecipe = recipesArr.hits[i].recipe;
    	console.log(currentRecipe.uri);
      recipesDiv.prepend(recipeDOMObject(currentRecipe));
	};
		
	},
	function(err) {
		console.log(err);
	}
	)
}


function recipeDOMObject(recipeJSON) {
	recipeItem = document.createElement('a');
	recipeItem.innerHTML = recipeJSON.label;
	recipeItem.setAttribute('href', recipeJSON.url);
	recipeItem.setAttribute('class', 'recipe');
	return recipeItem;

}



//Below is for testing purposes only

// function buttontest() {
// 	const b1 = document.getElementById('search-button');
// 	b1.addEventListener('click', getvalue);

// }

// function getvalue() {
// 	const searchbar = document.getElementById('search-bar');
// 	const text = searchbar.value;
// 	console.log(text);
// 	searchbar.value = "";
// }

recipeSearch();