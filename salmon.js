//construtor function for locations, cookie calc, & creation of row of data
var Store = function (name, minCust, maxCust, avgCookieSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
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
  var tableBody = document.getElementById("cookieTable");
  var rowStart = document.createElement("tr");
  var hours = document.createElement("th");
  rowStart.appendChild(hours);
  tableBody.appendChild(rowStart);

    for (l = 0; l < locations.length; l++){
     var colStart = document.createElement("tr");
     var storeLocations = document.createElement("th");
     storeLocations.innerText = locations[l].name;
     colStart.appendChild(storeLocations)

    for (h = 0; h < hoursInDay.length; h++){
      if(l == 0){
      hours = document.createElement("th");
      hours.innerText = hoursInDay[h]; //what you want to fill the list with
      rowStart.appendChild(hours);//what you want to append and with what
    }
      var cookies= document.createElement("td");
      cookies.innerText = locations[l].cookiesPurchPerHour();
      colStart.appendChild(cookies);

       tableBody.appendChild(colStart);
    }
   }
}
buildTable();
