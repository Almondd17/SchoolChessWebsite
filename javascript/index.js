function showBar(){
  document.getElementById('sidebar').classList.toggle('active');
}
const searchInput = document.querySelector("#search-item");
const resultsBox = document.querySelector(".results-box");

searchInput.addEventListener("input", () => {
  const searchQuery = searchInput.value.toLowerCase().trim();
  const results = searchResults(searchQuery);
  displayResults(results);
});

function searchResults(query) {
  // Replace this with your own search logic.
  const allResults = Array.from(document.querySelectorAll(".result"));
  return allResults.filter((result) =>
    result.querySelector(".body").textContent.toLowerCase().includes(query)
  );
}


function displayResults(results) {
  // Clear previous results.
  resultsBox.innerHTML = "";

  if (results.length > 0) {
    // Display new results.
    results.forEach((result) => {
      resultsBox.appendChild(result);
    });
  } else {
    // Display "No results found" message.
    const noResults = document.createElement("div");
    noResults.textContent = "No results found.";
    resultsBox.appendChild(noResults);
  }
}

 