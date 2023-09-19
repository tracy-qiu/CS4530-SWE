import IWeatherDataClient from "./WeatherDataClient"

export default interface IWeatherDataObserver {
    // update the new temperature
    update():void

    //  adds consumer
    addListener(listener:IWeatherDataClient): void

    // remove consumer
    removeListener(listener:IWeatherDataClient): void
}
