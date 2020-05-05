// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to append one table row `tr` for each UFO sighting object, 1 cell per UFO sighting value, and update each cell's text with UFO sighting values
tableData.forEach(function(tableData) {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value)
    });
});


// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

dates = ['1/1/2020', '1/2/2010', '1/3/2010', '1/4/2010', '1/5/2010', '1/6/2010', '1/7/2010', '1/8/2010', '1/9/2010', '1/10/2010', '1/11/2010', '1/12/2010', '1/13/2010'];

// Getting a reference to the button on the page with the id property set to `filter-btn`
var filterButton = d3.select("#filter-btn");
// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputField = d3.select("#datetime");

// This function is triggered when the button is clicked
function handleClick() {
    console.log("A filter button was clicked!");
    // We can use d3 to see the object that dispatched the event
    console.log(d3.event.target);
};
// We can use the `on` function in d3 to attach an event to the function
filterButton.on("click", handleClick);

// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
    var newText = d3.event.target.value;
    console.log(newText);
});
filterButton.on("click", function() {
    // Create a custom filtering function
    return tableData.filter(sighting.datetime === newText);
});
