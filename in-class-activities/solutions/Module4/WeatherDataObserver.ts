interface WeatherDataObserver {
  update(temperature: number, humidity: number, pressure: number): void;
}

export default WeatherDataObserver;
