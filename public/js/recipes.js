function recipeSearch() {
	const button = document.getElementById('search-button');
	button.addEventListener('click', recipeSearchHandler);
} 

function recipeSearchHandler() {
	const searchbar = document.getElementById('search-bar');
	
	const text = searchbar.value;
	searchbar.value = '';
	console.log(text);
	get('/api/searchrecipe', text);
	post('/api/addrecipe', {text});
}

function renderRecipes() {
	
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