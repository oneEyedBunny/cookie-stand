var location1 = {
  name: "Pioneer Square",
  minCust: 17,
  maxCust: 88,
  avgCookieSale: 5.2,
  customersPerHour: function () {
    var randomCustomerQty = Math.floor((Math.random()*(location1.maxCust-location1.minCust)) + location1.minCust);
    return randomCustomerQty;
  }
}

var location2= {
  name: "Portland Airport",
  minCust: 6,
  maxCust: 24,
  avgCookieSale: 1.2,
  customersPerHour: function () {
    var randomCustomerQty = Math.floor((Math.random()*(location2.maxCust-location2.minCust)) + location2.minCust);
    return randomCustomerQty;
  }
}

var location3 = {
  name: "Washington Square",
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 1.9,
  customersPerHour: function () {
    var randomCustomerQty = Math.floor((Math.random()*(location3.maxCust-location3.minCust)) + location3.minCust);
    return randomCustomerQty;
  }
}
var location4 = {
  name: "Sellwood",
  minCust: 20,
  maxCust: 48,
  avgCookieSale: 3.3,
  customersPerHour: function () {
    var randomCustomerQty = Math.floor((Math.random()*(location4.maxCust-location4.minCust)) + location4.minCust);
    return randomCustomerQty;
  }
}
var location5 = {
  name: "Pearl",
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 2.6,
  customersPerHour: function () {
    var randomCustomerQty = Math.floor((Math.random()*(location5.maxCust-location5.minCust)) + location5.minCust);
    return randomCustomerQty;
  }
}

//Array that holds the hours in the day
var hoursInDay = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

//Array that holds all of the locations
var locations = [location1, location2, location3, location4, location5];

//calculation of the cookies needed per hour based on the random number of customers
var cookiesPurchPerHour= function(location) {
  return  Math.floor(location.customersPerHour() * location.avgCookieSale);
};


//function that builds out the hourly projections by each location
function buildTable () {
  for (var i = 0; i < locations.length; i++ ) {
    var header = document.createElement("h3"); //69-71 takes the place of 73
    header.innerText = locations[i].name ;
    document.getElementById("location"+(i+1)).appendChild(header);

    //document.getElementById("location"+(i+1)).innerHTML +="<h3>" + locations[i].name + "</h3>";
    var totalCookiesPerLocation = 0;
    for ( var k = 0; k < hoursInDay.length; k++) {
      var cookies = cookiesPurchPerHour(locations[i]);//this will be called each time since it's a function, so this is why you need to define another
      //variable (aka totalCookiesPerLocation) instead of just cookies to hold the sum of each loop

      var cookieListItem = document.createElement("li");//79-81 replaces line 83/84
      cookieListItem.innerText =  hoursInDay[k] + ' : ' + cookies + ' cookies';
      document.getElementById("location"+(i+1)).appendChild(cookieListItem);

      // var hourlyAnswer= "<li>" + hoursInDay[k] + ' : ' + cookies + ' cookies' +"</li>";
      // document.getElementById("location"+(i+1)).innerHTML += hourlyAnswer
      totalCookiesPerLocation += cookies;
    }
    var grandTotal = document.createElement("li");//87-89 replace 91-92
    grandTotal.innerText = "Grand Total: " + totalCookiesPerLocation;
    document.getElementById("location"+(i+1)).appendChild(grandTotal);

    // var grandTotal ="<li><b>" + "Grand Total: " + totalCookiesPerLocation + "</li>";
    // document.getElementById("location"+(i+1)).innerHTML += grandTotal
  }
}

buildTable();

























// function addLocationsToList (a,b = "li"){
//  var listToUse = document.getElementById("location1");
//  var locationsToAdd = document.createElement(b);
//  locationsToAdd.innertext = a;
//  listToUse.appendChild(locationsToAdd);
// }
//
// locations.push();
//
// for (i = 0; i < locations.length; i++){
//   addLocationsToList("name", "li");
//   addLocationsToList("minCust", "li");
//   addLocationsToList("maxCust", "li");
//   addLocationsToList ("customersPerHour")
// }
