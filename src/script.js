setInterval(function(){

//Tokyo


let firstCityElement=document.querySelector(`#firstCity`);
if (firstCityElement!==null){
let firstCityElementDate=firstCityElement.querySelector(`.date`);
let firstCityElementTime=firstCityElement.querySelector(`.time`);

let firstCityTime=moment().tz(`Asia/Tokyo`);

firstCityElementDate.innerHTML= firstCityTime.format(`MMMM Do YYYY`);
firstCityElementTime.innerHTML= firstCityTime.format(`h:mm:ss [<small>]A[</small>]`);
}},1000);

setInterval(function(){
//Berlin

let secondCityElement=document.querySelector(`#secondCity`);
if(secondCityElement!==null){
let secondCityElementDate=secondCityElement.querySelector(`.date`);
let secondCityElementTime=secondCityElement.querySelector(`.time`);

let secondCityTime=moment().tz(`Europe/Berlin`);
secondCityElementDate.innerHTML= secondCityTime.format(`MMMM Do YYYY`);
secondCityElementTime.innerHTML= secondCityTime.format(`h:mm:ss [<small>]A[</small>]`);
}}
,1000);

setInterval(function(){

//Los Angeles

let thirdCityElement=document.querySelector(`#thirdCity`);
if (thirdCityElement!==null){
let thirdCityElementDate=thirdCityElement.querySelector(`.date`);
let thirdCityElementTime=thirdCityElement.querySelector(`.time`);

let thirdCityTime=moment().tz(`America/Los_Angeles`);

thirdCityElementDate.innerHTML= thirdCityTime.format(`MMMM Do YYYY`);
thirdCityElementTime.innerHTML= thirdCityTime.format(`h:mm:ss [<small>]A[</small>]`);}
},1000);


function updateCity(event){
    
    let cityTimeZone=event.target.value;
   
    if (cityTimeZone==="current"){
        cityTimeZone=moment.tz.guess();
    }
    let cityName=cityTimeZone.replace("_"," ").split(`/`)[1];
   
    let cityTime=moment().tz(cityTimeZone);

    
    let citiesElement=document.querySelector(`#cities`);
citiesElement.innerHTML=`
<div class="city">
<div>
<h2>${cityName}</h2>
<div class="date">${cityTime.format("MMMM Do YYYY")}</div>
</div>
<div>
<div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
</div>
`;

    
}
let citiesSelectElement=document.querySelector(`#city`);
citiesSelectElement.addEventListener("change", updateCity);