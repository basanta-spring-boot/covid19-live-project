import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from './Report';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) { }

  public findOveralCovidStatistic(){
    return this.http.get("https://corona.lmao.ninja/all");
  }

  public findAllCountriesReports(){
    return this.http.get<Report[]>("https://corona.lmao.ninja/countries");
  }

  public findCountriesReportByName(name){
    return this.http.get("https://corona.lmao.ninja/countries/"+name);
  }
}
