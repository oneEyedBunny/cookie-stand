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

//Array that holds the hours in the day
var hoursInDay = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];


//function to build out the actual list of hours/cookies
function buildTable () {
  var tableBody = document.getElementById("cookieTable")//place in HTML doc that this goes
  tableBody.innerHTML = "";                     // this clears the table data before it creates it, so you wont get table overlapped with table
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

//function to load Store Details form onto page
var buildForm = function(){
  var space = document.createElement("br");  //carete a break in HTML
  var form = document.getElementById("new-store-info"); //create the HTML form grouping
  header = document.createElement("legend"); //create the legend header
  header.innerText = "Store Details";  /// tell it what you want the header to say
  form.appendChild(header);  //append the the form with the header

  label1 = document.createElement("label") //create an HTML label for the input
  label1.innerText = "Store Name:  "; /// tell it you what you want the label to say
  form.appendChild(label1);   // append the label to the form
  input1 = document.createElement("input"); //create the input
  input1.setAttribute("class", "store-form"); // set each attribute...the css class
  input1.setAttribute("name", "name");    // set the name attribute...where the data will land
  form.appendChild(input1);
  form.appendChild(space.cloneNode());

  label2 = document.createElement("label")
  label2.innerText = "Min Customers Per hr:  ";
  form.appendChild(label2);
  input2 = document.createElement("input"); //create the input
  input2.setAttribute("class", "store-form"); // set each attribute...the css class
  input2.setAttribute("name", "minCust");    // set the name attribute...where the data will land
  form.appendChild(input2);
  form.appendChild(space.cloneNode());

  label3 = document.createElement("label")
  label3.innerText = "Max Customers Per hr:  ";
  form.appendChild(label3);
  input3 = document.createElement("input"); //create the input
  input3.setAttribute("class", "store-form"); // set each attribute...the css class
  input3.setAttribute("name", "maxCust");    // set the name attribute...where the data will land
  form.appendChild(input3);
  form.appendChild(space.cloneNode());

  label4 = document.createElement("label")
  label4.innerText = "Avg Customers Per hr:  ";
  form.appendChild(label4);
  input4 = document.createElement("input"); //create the input
  input4.setAttribute("class", "store-form"); // set each attribute...the css class
  input4.setAttribute("name", "avgCust")    // set the name attribute...where the data will land
  form.appendChild(input4);
  form.appendChild(space.cloneNode());
  form.appendChild(space.cloneNode());

  input5 = document.createElement("input"); //create the input
  input5.setAttribute("type", "button"); // set each attribute...the css class
  input5.setAttribute("value", "Submit");    // set the name attribute...where the data will land
  input5.setAttribute("onclick", "submitFormDetails()");
  form.appendChild(input5);

  //still need to add something that scrolls the screen down to the table

} //end of buildForm function


// function to submit store details into the cookie table and clear the new store form from the screen
  function submitFormDetails(){
    var form = document.forms["new-store-form"]; //this is "forms" not "form" because the DOM creates several arrays automatically.
    var newName = form.elements["name"].value;
    var newMinCust = form.elements["minCust"].value;
    var newMaxCust = form.elements["maxCust"].value;
    var newAvgCust = form.elements["avgCust"].value;
    locations.push(new Store(newName, newMinCust, newMaxCust, newAvgCust));
    buildTable()
    document.getElementById("new-store-info").innerHTML = ""; //removes the form from the screen
}
