setInterval(function(){

//Los Angeles

let firstCityElement=document.querySelector(`#firstCity`);
let firstCityElementDate=firstCityElement.querySelector(`.date`);
let firstCityElementTime=firstCityElement.querySelector(`.time`);

let firstCityTime=moment().tz(`America/Los_Angeles`);

firstCityElementDate.innerHTML= firstCityTime.format(`MMMM Do YYYY`);
firstCityElementTime.innerHTML= firstCityTime.format(`h:mm:ss [<small>]A[</small>]`);


//Berlin
let secondCityElement=document.querySelector(`#secondCity`);
let secondCityElementDate=secondCityElement.querySelector(`.date`);
let secondCityElementTime=secondCityElement.querySelector(`.time`);

let secondCityTime=moment().tz(`Europe/Berlin`);

secondCityElementDate.innerHTML= secondCityTime.format(`MMMM Do YYYY`);
secondCityElementTime.innerHTML= secondCityTime.format(`h:mm:ss [<small>]A[</small>]`);


//Tokyo
let thirdCityElement=document.querySelector(`#thirdCity`);
let thirdCityElementDate=thirdCityElement.querySelector(`.date`);
let thirdCityElementTime=thirdCityElement.querySelector(`.time`);

let thirdCityTime=moment().tz(`Asia/Tokyo`);

thirdCityElementDate.innerHTML= thirdCityTime.format(`MMMM Do YYYY`);
thirdCityElementTime.innerHTML= thirdCityTime.format(`h:mm:ss [<small>]A[</small>]`);}
,1000);