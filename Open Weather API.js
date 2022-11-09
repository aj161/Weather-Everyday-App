//  View JSON in the browser
const keyAPI = `8a9505da0fa084df0cf53d506167e207`;
const loc = `London`;
const loc2 = 'Cairo';
const loc3 = 'Madrid';
const loc4 = 'Riga';


let stringPassIn = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${keyAPI}`;
let stringPassIn2 = `http://api.openweathermap.org/data/2.5/weather?q=${loc2}&appid=${keyAPI}`;
let stringPassIn3 = `http://api.openweathermap.org/data/2.5/weather?q=${loc3}&appid=${keyAPI}`;
let stringPassIn4 = `http://api.openweathermap.org/data/2.5/weather?q=${loc4}&appid=${keyAPI}`;


console.log(stringPassIn);
console.log(stringPassIn2);
console.log(stringPassIn3);
console.log(stringPassIn4);


// Paste the URL in the console into browser and the JSON extension will allow you to see the JSON data
// Example = http://api.openweathermap.org/data/2.5/weather?q=London&appid=8826c10064648be786a4fc5a7a965748

// Print the data into the DOM for London
let responseData;

fetch(stringPassIn)
  .then((res) => res.json())
  .then((data) => (responseData = data))
  .then(() => {
    console.log(responseData);
    document.querySelector("#London").innerHTML = `The weather in London today is characterised by ${responseData.weather[0].description}, with min temperature of ${Math.floor(responseData.main.temp_min -272)} degC and maximum temperature of ${Math.floor(responseData.main.temp_max -272)} degC, average wind speed ${responseData.wind.speed} m/s.`;
  });

//Repeat for Cairo

let responseData2;

fetch(stringPassIn2)
  .then((res) => res.json())
  .then((data) => (responseData2 = data))
  .then(() => {
    console.log(responseData2);
    document.querySelector("#Cairo").innerHTML = `The weather in Cairo today is characterised by ${responseData2.weather[0].description}, with min temperature of ${Math.floor(responseData2.main.temp_min -272)} degC and maximum temperature of ${Math.floor(responseData2.main.temp_max -272)} degC, average wind speed ${responseData2.wind.speed} m/s.`;
  });

//Repeat for Madrid

let responseData3;

fetch(stringPassIn3)
  .then((res) => res.json())
  .then((data) => (responseData3 = data))
  .then(() => {
    console.log(responseData3);
    document.querySelector("#Madrid").innerHTML = `The weather in Madrid today is characterised by ${responseData3.weather[0].description}, with min temperature of ${Math.floor(responseData3.main.temp_min -272)} degC and maximum temperature of ${Math.floor(responseData3.main.temp_max -272)} degC, average wind speed ${responseData3.wind.speed} m/s.`;
  });

//Repeat for Riga

let responseData4;

fetch(stringPassIn4)
  .then((res) => res.json())
  .then((data) => (responseData4 = data))
  .then(() => {
    console.log(responseData4);
    document.querySelector("#Riga").innerHTML = `The weather in Riga today is characterised by ${responseData4.weather[0].description}, with min temperature of ${Math.floor(responseData4.main.temp_min -272)} degC and maximum temperature of ${Math.floor(responseData4.main.temp_max -272)} degC, average wind speed ${responseData4.wind.speed} m/s.`;
  });

  // Use query selector to select nav items and the hamburger icon
const hamburgerIcon = document.querySelector("#nav-toggle-button");
const navItems = document.querySelector("#nav-items");

// Add event listener to the hamburger Icon which toggles the class active on nav Items
// The navItems are set to display none by default at small screen sizes
// Adding the class "active" set them to display flex.
hamburgerIcon.addEventListener("click", () => {
  navItems.classList.toggle("active");
});

