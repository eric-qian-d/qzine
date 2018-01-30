function renderHistory(user) {
  	const historyDiv = document.getElementById('history-container');
  	get('/api/history', {}, function(historyArr) {
    for (let i = 0; i < historyArr.length; i++) {
      const currentHistory = historyArr[i];
      historyDiv.prepend(historyDOMObject(currentHistory, user));
     console.log('test');
}

function historyDOMObject(recipeJSON, user) {
	historyItem = document.createElement('div');
	historyItem.innerHTML = recipeJSON.query;
}
