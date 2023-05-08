function buscar(){
    // url del api
    const url= "https://api.openweathermap.org/data/2.5/weather?q=Bogota&lang=es&appid=8a5d0a9610bd6a9bfbb18ff5b3555808"
    
    // Consumir el api con el fetch
    fetch(url).then(Response => {
        Response.json().then(data =>{
            console.log(data)
            mostrarClima(data)
        })
    }).catch(error =>{
        console.log(error)
    })
}


function mostrarClima(data){
    let location = document.querySelector("#location"),
    temp = document.querySelector("#temp"),
    date = document.querySelector("#date"),
    feels_like = document.querySelector("#feels_like"),
    description = document.querySelector("#description"),
    humidity = document.querySelector("#humidity"),
    pressure = document.querySelector("#pressure"),
    clima = document.querySelector("#clima")
    
    location.innerHTML=`${data.name} | ${data.sys.country}`
    temp.innerHTML=`Temperatura: ${Math.round(toCelsius(data.main.temp))}°C`
    date.innerHTML = new Date()
    feels_like.innerHTML = `sensación térmica: ${Math.round(toCelsius(data.main.feels_like))}°C`
    description.innerHTML = `${data.weather[0].description}`
    humidity.innerHTML = `${data.main.humidity}%`
    pressure.innerHTML = `Presión: ${data.main.pressure}hPa`

    let urlClima= `${data.weather[0].icon}`
    console.log(urlClima)
    clima.src = `https://openweathermap.org/img/wn/${urlClima}@2x.png`

}

function toCelsius(kelvin){
    let c = kelvin -273.15
    return c
}

function reload(){
    location.reload()

}
setInterval(reload, 30000)

buscar ()
toCelsius()


// Async / Await / 

let search = async() => {
    try{
        let asyncUrl = await fetch ('https://api.openweathermap.org/data/2.5/weather?q=Bogota&lang=es&appid=8a5d0a9610bd6a9bfbb18ff5b3555808')
        let dataJson = await asyncUrl.json()
        let location = document.querySelector("#location"),
    temp = document.querySelector("#temp"),
    date = document.querySelector("#date"),
    feels_like = document.querySelector("#feels_like"),
    description = document.querySelector("#description"),
    humidity = document.querySelector("#humidity"),
    pressure = document.querySelector("#pressure"),
    clima = document.querySelector("#clima")
    
    location.innerHTML=`${dataJson.name} | ${dataJson.sys.country}`
    temp.innerHTML=`Temperatura: ${Math.round(toCelsius(dataJson.main.temp))}°C`
    date.innerHTML = new Date()
    feels_like.innerHTML = `sensación térmica: ${Math.round(toCelsius(dataJson.main.feels_like))}°C`
    description.innerHTML = `${dataJson.weather[0].description}`
    humidity.innerHTML = `${dataJson.main.humidity}%`
    pressure.innerHTML = `Presión: ${dataJson.main.pressure}hPa`
    }
    catch{
        console.log(error)
    }
}

search()