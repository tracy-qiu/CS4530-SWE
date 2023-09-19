import IWeatherDataClient from './WeatherDataClient';
import IWeatherDataObserver from './WeatherDataObserver';

export default class WeatherData implements IWeatherDataObserver {
  
  private _observers: IWeatherDataClient[] = [];

  addListener(listener: IWeatherDataClient): void {
    this._observers.push(listener);
  }

  removeListener(listener: IWeatherDataClient): void {
    this._observers = this._observers.filter(obs => obs !== listener);
  }

  update(): void {
    this._observers.forEach(obs => obs.notify(this));
  }

  private _temperature = 0;

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

  private measurementsChanged() {
    this.update();
  }
}
