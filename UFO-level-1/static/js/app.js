// INSTRUCTIONS: Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// from data.js
var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");
// Use d3 to append one table row `tr` for each UFO sighting object, 1 cell per UFO sighting value, and update each cell's text with UFO sighting values
function loadData(dataset) {
    dataset.forEach(function(dataset) {
    var row = tbody.append("tr");
    Object.entries(dataset).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value)
        });
    });
};
loadData(tableData);

// INSTRUCTIONS: Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
// Getting a reference to the button on the page with the id property set to `filter-btn`
// var filterButton = d3.select("#filter-btn");
var filterButton = document.querySelector("#filter-btn");
// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputElement = document.querySelector("#datetime");
function handleEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // clear the input value
    var anonymous = d3.select("#datetime").node().value;
    console.log(anonymous);
    d3.select("#datetime").node().value = "";
};
// fn creating new 'tbody' element, replacing previous by passing in 'array' parameter data
function loadFilteredData(array) {
    var oldTBody = document.querySelector("tbody");
    var newTBody = document.createElement("tbody");
    array.forEach(function(obj) {
        var row = newTBody.insertRow();
        Object.entries(obj).forEach(function([key, value]) {
            var cell = row.insertCell();
            cell.innerText = value;
        });
    });
    oldTBody.parentNode.replaceChild(newTBody, oldTBody);
};
// This function is triggered when the button is clicked
function handleClick(event) {
    // We can use d3 to see the object that dispatched the event
    console.log(event.target.value);
    // Get the value property of the input element
    var inputValue = inputElement.value;
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    loadFilteredData(filteredData);
};
// We can use the `on` function in d3 to attach an event to the function
filterButton.addEventListener("click", handleClick);
d3.select(`#filter-btn`).on("click", handleEnter);
// Input fields can trigger a change event when new text is entered.
var newText;
inputElement.addEventListener("input", function() {
    newText = event.target.value;
});