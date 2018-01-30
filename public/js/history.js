function historyDOMObject(recipeJSON) {
	historyItem = document.createElement('div');
	historyItem.innerHTML = recipeJSON.query;
	return historyItem;
}


function renderHistory(user) {
  	const historyDiv = document.getElementById('history-container');
  	get('/api/searchhistory', {}, function(historyArr) {
    for (let i = 0; i < historyArr.length; i++) {
      const currentHistory = historyArr[i];
      historyDiv.prepend(historyDOMObject(currentHistory));
	};
		
	},
	function(err) {
		console.log(err);
	}
	)
}



function main() {
  get('/api/whoami', {}, function(user) {
    renderNavbar(user);
    renderHistory(user);
  });
}

main();

