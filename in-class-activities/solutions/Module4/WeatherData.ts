import StatisticsDisplay from './StatisticsDisplay';
import ForecastDisplay from './ForecastDisplay';
import CurrentConditionsDisplay from './CurrentConditionsDisplay';
import WeatherDataObserver from './WeatherDataObserver';


export default class WeatherData {
  
  private _temperature = 0;

  private _observers: WeatherDataObserver[] = [];

  get temperature(): number {
    return this._temperature;
  }

  private _humidity = 0;

  get humidity(): number {
    return this._humidity;
  }

  private _pressure = 0;

  get pressure(): number {
    return this._pressure;
  }


  public setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;
    this.measurementsChanged();
  }

  notifyObservers() {
    this._observers.forEach(observer => {
      observer.update(this.temperature, this.humidity, this.pressure);
    });
  }

  private measurementsChanged() {
    this.notifyObservers();
  }

  public registerObserver(observer: WeatherDataObserver): void {
    this._observers.push(observer);
  }

  public unRegisterObserver(observer: WeatherDataObserver): void {
    this._observers = this._observers.filter(o => o !== observer);
  }
}
