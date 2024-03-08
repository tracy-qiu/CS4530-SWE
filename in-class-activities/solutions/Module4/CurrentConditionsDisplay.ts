import WeatherDataObserver from './WeatherDataObserver';

export default class CurrentConditionsDisplay implements WeatherDataObserver {
  static displayCurrentConditions(temperature: number, humidity: number): void {
    // eslint-disable-next-line
    console.log('Current conditions: %fF degrees and %f% humidity', temperature, humidity);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    CurrentConditionsDisplay.displayCurrentConditions(temperature, humidity);
  }
}
