import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidService } from '../covid.service';

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Report } from '../Report';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  response: any;
  countryName: string;
  result: any;

  constructor(private service: CovidService) { }


  ngOnInit() {
    let resp = this.service.findOveralCovidStatistic();
    resp.subscribe(data => this.response = data)
  }

  public findReportByCountryName() {
    let resp = this.service.findCountriesReportByName(this.countryName);
    resp.subscribe(res => {
      this.result = res;
    });
  }
}
