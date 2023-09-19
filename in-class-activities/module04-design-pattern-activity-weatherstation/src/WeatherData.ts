import StatisticsDisplay from './StatisticsDisplay';
import ForecastDisplay from './ForecastDisplay';
import CurrentConditionsDisplay from './CurrentConditionsDisplay';
import HeatIndexDisplay from './HeatIndexDisplay';

export default class WeatherData {
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

  private _statisticsDisplay = new StatisticsDisplay();

  private _forecastDisplay = new ForecastDisplay();

  public setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;
    this.measurementsChanged();
  }

  private measurementsChanged() {
    this._statisticsDisplay.displayStatistics(this);
    this._forecastDisplay.displayForecast(this);
    CurrentConditionsDisplay.displayCurrentConditions(this);
    HeatIndexDisplay.displayHeatIndex(this);
  }
}
