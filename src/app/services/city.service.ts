import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { environment } from 'src/environment/environment'
import { Observable } from 'rxjs'
import { weatherData } from '../model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  url = 'https://open-weather-api2.p.rapidapi.com/%7BPATH%7D'
  constructor(private http: HttpClient) {

  }
  getWeatherData(cityName: string): Observable<weatherData> {
    return this.http.get<weatherData>(environment.weatherApiBaseUrl + '/city/' + cityName, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json')

    });
  }
}
