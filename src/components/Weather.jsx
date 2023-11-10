import React from 'react'

const Weather = ({weatherData}) => {
    console.log(weatherData);
  return (
    <div>
      {weatherData.weather ? (   
        <div className='search-result'>
                <div className='top'>
                    <div>
                        <span className='city'>{weatherData.name}</span>,   
                        <span className='country'> {weatherData.sys.country}</span>
                        <p className='desc'>{weatherData.weather[0].description}</p>
                    </div>
                    <div>
                        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt=''/>
                    </div>
                </div>
                <div className='bottom'>
                    <div>
                        <h1 className='temp'>{weatherData.main.temp.toFixed()} °C</h1>
                    </div>
                    <div>
                    {weatherData.name !== undefined ? (
                    <div className='info'>
                        <p><span>Feels Like</span> <span>{weatherData.main.feels_like.toFixed()} °C </span></p>
                        <p><span>Humidity</span> <span>{weatherData.main.humidity} % </span></p>
                        <p><span>Wind Speed</span> <span>{weatherData.wind.speed.toFixed()} KPH</span></p>
                        <p><span>Pressure</span> <span>{weatherData.main.pressure} hPa</span></p>
                    </div>
                ): null}
                    </div>
                </div>
            </div>
        ) : null}
    </div>
  )
}

export default Weather
