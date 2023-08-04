const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
let names = [];

// Fetch names from JSON file
// assign data into array names
fetch("names.json")
	.then(response => response.json())
	.then(data => {
		names = data;
	})
	.catch(error => {
		console.error(error);
	});

// keyup events on search input using adventeventlistener
// The toLowerCase() method returns the calling string value converted to lower case.
// The trim() method removes whitespace from both ends of a string
// assigning the variable(array) where the matchinging names will store

searchInput.addEventListener("keyup", () => {
	const searchTerm = searchInput.value.trim().toLowerCase();
	let matchingNames = [];

	if (searchTerm !== "") {
		// Find names that match search term
        // filter() method with function(arrow function)
		matchingNames = names.filter(name => name.toLowerCase().startsWith(searchTerm));
	}

    // Clear previous search results
	searchResults.innerHTML = "";
    
    matchingNames.forEach(name => {
		const li = document.createElement("li");
		li.textContent = name;
		li.addEventListener("click", () => {
			// Copy selected name to search input and clear search results
			searchInput.value = name;
			searchResults.innerHTML = "";
		});
		searchResults.appendChild(li);
	});

});