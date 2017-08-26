//construtor function for locations, cookie calc, & creation of row of data
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
var Store = function (name, minCust, maxCust, avgCookieSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.totalCookiesPerLocation = 0;
  this.customersPerHour = function () {
    var randomCustomerQty = Math.floor((Math.random()*(this.maxCust-this.minCust)) + this.minCust);
    return randomCustomerQty;
 };
  this.cookiesPurchPerHour = function() {
      return  Math.floor(this.customersPerHour() * this.avgCookieSale);
 };
 //thinking constructor function wont work since it needs to repeat to the tune of the hours array
 // this.createTableRow = function () {
 // var colStart = document.createElement("tr");
 // var storeLocations = document.createElement("th");
 // storeLocations.innerText = this.name;
 // colStart.appendChild(storeLocations)
 //
 // var cookies= document.createElement("td");
 // cookies.innerText = this.cookiesPurchPerHour();
 // colStart.appendChild(cookies);

}
//Array that holds all of the locations using the constructor function above
var locations = [];
locations.push(new Store("Pioneer Square", 17, 88, 5.2));
locations.push(new Store("Portland Airport", 6, 24, 1.2));
locations.push(new Store("Washington Square", 11, 38, 1.9));
locations.push(new Store("Sellwood", 20, 48, 3.3));
locations.push(new Store("Pearl", 3, 24, 2.6));
//console.log(locations);

//Array that holds the hours in the day
var hoursInDay = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];


//function to build out the actual list of hours/cookies
function buildTable () {
  var tableBody = document.getElementById("cookieTable")//place in HTML doc that this goes
  var rowStart = document.createElement("tr"); //initial row in html
  var hours = document.createElement("th"); //initial header
  hours.innerText = "Store Locations";
  rowStart.appendChild(hours);
  tableBody.appendChild(rowStart);

  for (l = 0; l < locations.length; l++){ //loops through LOCATION array
   var colStart = document.createElement("tr");
   var storeLocations = document.createElement("th");
   storeLocations.innerText = locations[l].name;
   colStart.appendChild(storeLocations)

  for (h = 0; h < hoursInDay.length; h++){// loops through HOURS array
    if(l == 0){                           //created the hours header only 1x when the location position is at the 0 index
      hours = document.createElement("th");
      hours.innerText = hoursInDay[h];
      rowStart.appendChild(hours);
    }//closed if statement
    var cookieData= document.createElement("td");
    var cookies = locations[l].cookiesPurchPerHour();
    cookieData.innerText = cookies;
    colStart.appendChild(cookieData); //puts cookieData in the cells
    tableBody.appendChild(colStart); //puts location and cookie data in table in the HTML doc

    locations[l].totalCookiesPerLocation += cookies; //each hour loop it tallies the cookieData by location

    }//closed inner for loop on hours

     if (l == 0){ //runs inside of location loop
       var grandTotalCol = document.createElement("th"); //final header
       grandTotalCol.innerText = "Total";
       rowStart.appendChild(grandTotalCol);
     } //closes final if statement

     var grandTotalData = document.createElement("td");// create cells for data
     grandTotalData.innerText = numberWithCommas(locations[l].totalCookiesPerLocation); //fill the data with the total cookies by location
     colStart.appendChild(grandTotalData);
     tableBody.appendChild(colStart);
   }//closed for loop on locations
}//closes buildTable function

buildTable();
