function showBar(){
  document.getElementById('sidebar').classList.toggle('active')
}
function showInf(){
  document.getElementById('contact-info').style.display = "block";
}

const searchInput = document.getElementById("search-item");
const resultsBox = document.querySelector(".results-box");
const resultsList = document.querySelector(".results-box ul");

// List of sample search results
const searchResults = [
"Chess board",
"Chess pieces",
"Chess game",
"Chess tournament",
"Chess rules",
"Chess openings",
"Chess strategies",
];

// Function to display search results
function showResults(results) {
// Clear previous search results
resultsList.innerHTML = "";

// Create and append new list items for each result
results.forEach((result) => {
const li = document.createElement("li");
li.textContent = result;
resultsList.appendChild(li);
});

// Show the results box
resultsBox.style.display = "block";
}

// Function to hide search results
function hideResults() {
resultsBox.style.display = "none";
}

// Event listener for search input field
searchInput.addEventListener("input", () => {
// Get the search keyword
const keyword = searchInput.value.trim();

// Check if keyword is not empty
if (keyword) {
// Filter search results based on keyword
const filteredResults = searchResults.filter((result) =>
result.toLowerCase().includes(keyword.toLowerCase())
);
} else {
  // Hide search results if keyword is empty
  hideResults();
  }
  });
  
  // Event listener for clicking outside the results box
  document.addEventListener("click", (event) => {
  if (!resultsBox.contains(event.target)) {
  hideResults();
  }
  });
