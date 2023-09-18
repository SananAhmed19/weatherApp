import { Component, OnInit } from '@angular/core';
import { CityService } from './services/city.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherApp';
  city: string = 'Bangalore';
  weatherData: any;
  constructor(private cityData: CityService) { }
  ngOnInit(): void {
    // this.cityData.getWeatherData('Medina').subscribe({ next: (Response) }=> {
    //   console.log(Response);
    // })
    this.getWeather(this.city);
  }
  onSubmit() {
    this.getWeather(this.city);
    this.city = '';
  }
  getWeather(city: string) {
    this.cityData.getWeatherData(city).subscribe((data: any) => {
      console.log("Data:", data);
      this.weatherData = data;
      console.log("this.weatherData:", this.weatherData);
      this.city = city;

    })
  }

}
