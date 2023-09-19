import WeatherData from "./WeatherData";

export default interface IWeatherDataClient {
    // notify the consumer about the change
    notify(data : WeatherData): void;
}