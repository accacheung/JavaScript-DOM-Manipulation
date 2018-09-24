// from data.js
var tableData = data;

// Ger a reference to the table body
var tbody = d3.select("tbody");

  // Loop through data and console.log each report object
  data.forEach(function(date) {
  console.log(date);

  var row = tbody.append("tr");
  Object.entries(date).forEach(function([key, value]) {
    console.log(key, value);

    // Append a cell to the row for each value
    var cell = tbody.append("td");
    cell.text(value);
    });
  });


// Ger a reference to the filter button
var filterButton = d3.select("#filter-btn");

// Create a function to filter data once we click on the filter button
filterButton.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the raw input element and get the raw HTML node
  var inputField = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputField.property("value");

  console.log(inputValue);
  

  // Call the custom function with filter()
  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  // Display the results
  console.log(filteredData);
  tbody.selectAll("*").remove();

// append to table only filtered data
  filteredData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var filter = tbody.append("td");
      filter.text(value);
    });
  });
});


