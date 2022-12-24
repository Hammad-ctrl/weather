const submitBtn = document.getElementById('submitbtn');
const cityname = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const Temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const time = new Date();
let c_Day =time.getDay();
let date = new Date()
let dt = date.getDate();
let month =date.getMonth()
month=month+1;
const newTime = time.getHours()
const day =document.getElementById('day');
const today =document.getElementById('today_date');

    const getInfo =async(event)=>{
        event.preventDefault();
     let cityVal = cityname.value;
     if(cityVal===""){
             city_name.innerText=`Please Write Your city name before you search`;
        }
        const options = {
         method: 'GET',
         headers: {
            'X-RapidAPI-Key': '10532e3beemshaaa280ab1063d77p1910d6jsneaab4e12d7a2',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
         }
      };
          fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityVal}`, options)
          .then(response => response.json())
              .then((response) => {
                try{
                   Temp.innerHTML = response.temp;
                   city_name.innerText =cityVal;
                   temp_status.innerHTML=`<i class="fa fa-sun"aria-hidden="true"></i>`
                  }  catch{
                     city_name.innerText=`Please enter your city name properly error`
                  }
                  console.log(response)
               }) 
                }
    submitBtn.addEventListener('click',getInfo)

    
if(c_Day==1){
day.innerHTML = "Mon";
}
else if(c_Day==2){
    day.innerHTML = "Tue";
    }
    else if(c_Day==3){
        day.innerHTML = "Wen";
        }
        else if(c_Day==4){
            day.innerHTML = "Thu";
            }
            else if(c_Day==5){
                day.innerHTML = "Fri";
                }
                else if(c_Day==6){
                    day.innerHTML = "Sat";
                    }
                    else{
                    day.innerHTML = "Sun";
                    }
        if(month==1){
           today.innerHTML =dt+" JAN";
        }
        else if(month==1){
            today.innerHTML =dt+" FEB";
         }
         else if(month==3){
            today.innerHTML =dt+" MAR";
         } 
         else if(month==4){
            today.innerHTML =dt+" APR";
         }
         else if(month==5){
            today.innerHTML =dt+" MAY";
         }
         else if(month==6){
            today.innerHTML =dt+" JUN";
         }
         else if(month==7){
            today.innerHTML =dt+" JUL";
         }
         else if(month==8){
            today.innerHTML =dt+" AUG";
         }
         else if(month==9){
            today.innerHTML =dt+" SEP";
         }
         else if(month==10){
            today.innerHTML =dt+" OCT";
         }
         else if(month==11){
            today.innerHTML =dt+" NOV";
         }
         else{
            today.innerHTML =dt+" DEC";
         }


         // const options = {
         //    method: 'GET',
         //    headers: {
         //       'X-RapidAPI-Key': '10532e3beemshaaa280ab1063d77p1910d6jsneaab4e12d7a2',
         //       'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
         //    }
         // };
         
         // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
         //    .then(response => response.json())
         //    .then(response => console.log(response))
         //    .catch(err => console.error(err));