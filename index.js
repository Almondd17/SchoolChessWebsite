function showBar(){
  document.getElementById('sidebar').classList.toggle('active')
}

const searchItem = document.querySelector('#search-item');
const resultsBox = document.querySelector('.results-box');

searchItem.addEventListener('keyup', function() {
  showResults(searchItem.value);
});

function showResults(searchText) {
  if (searchText.length === 0) {
    resultsBox.style.display = 'none';
    return;
  }

  const results = ['Result 1', 'Result 2', 'Result 3']; // Replace with your search results

  resultsBox.innerHTML = '';
  results.forEach(function(result) {
    const li = document.createElement('li');
    li.innerText = result;
    li.addEventListener('click', function() {
      searchItem.value = result;
      resultsBox.style.display = 'none';
    });
    resultsBox.appendChild(li);
  });

  resultsBox.style.display = 'block';
}
