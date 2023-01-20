// function for get data from api

let search=document.getElementById("location")

const fetchresult=(targetLocation)=>{
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${targetLocation}&units=metric&appid=8ac5c4d57ba6a4b3dfcf622700447b1e`)
    .then((res)=>{
        console.log(res);
        res.json()
        .then((data)=>{
            console.log(data);
            Populatedata(data)
        })
        
    })
}

function Populatedata(data){
    console.log(data);
    
    let cityname=data.name
    let tempo=data.main.temp
    let feeltemp=data.main.feels_like
    let description=data.weather[0].description
    let windspeed=data.wind.speed
    let country=data.sys.country
    let humidity=data.main.humidity
    let pressure=data.main.pressure
    
    console.log(cityname,tempo,feeltemp,description,windspeed);
    html_data=''
    html_data+=`   
    <div class="weather ">
    <h2 id="city">Weather in ${cityname}</h2>
  </div>
  <div class="weather  ">
    <div class="tempo">${tempo}&#176c</div>
  </div>
  <div class="weather">
    <div id="state" class="s desc ">${description} </div>
  </div>
  <div class="weather " >
     <div id="" class=" s wind">Country: ${country} </div>
  </div>`
  
  result.innerHTML=html_data
  table_data=''
  
  table_data+=` <table  class="box">
  <div class="col-3">
  <t-head>
    <tr>                        
      <th>Real feel</th>
      <th>Humidity</th>
     </tr >
  </t-head>
  <t-body>
    <tr>
      <td>${feeltemp}&deg;c</td>
      <td>${humidity}%</td>
    </tr>         
  </t-body>
</div>
<div class="col-6"></div>
<div class="col-3">
  <t-head>
    <tr>
      <th>Wind</th>
      <th>Pressure</th>
    </tr>       
  </t-head>
  <t-body>
    <tr> 
      <td>${windspeed} km/h</td>
      <td>${pressure} mbar</td>
    </tr>   
  </t-body>
</div>
</table>`

table.innerHTML=table_data
}
function searchloction(){
    targetLocation=search.value
    fetchresult(targetLocation)
}
    




       
       
        
        
