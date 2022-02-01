let request=new XMLHttpRequest();
//open a connection
let city=document.getElementById
let url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=93f26e3c57081a6210de53b8dcfdfea4'
//'https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=93f26e3c57081a6210de53b8dcfdfea4'
request.open('GET',url,true);


request.onload=function() {
    if(request.status>=200 && request.status<400)
    {
        //getdata
        console.log("success!!!!")
        let data=JSON.parse(request.responseText)
        let imgsrc = 'https://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
        
        document.getElementById('mypara').innerHTML=parseInt((data.main.temp-273.15))+"°C";
        document.getElementById('myimg').src=imgsrc;
        document.getElementById('mypara1').innerHTML=parseInt((data.main.temp_max-273.15))+".3"+"°C";
        document.getElementById('mypara2').innerHTML=parseInt((data.main.temp_min-273.15))+".05"+"°C";

        console.log(data)
    }
    else{
        console.log("could not connect to server")
    }
}

//error
request.onerror=function(){
    console.log("error!!")
}
//send the request
request.send();