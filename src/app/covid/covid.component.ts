import { Component, OnInit, ViewChild } from '@angular/core';
import { Report } from '../Report';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  displayedColumns: string[] = ['flag','country', 'cases', 'todayCases', 'deaths', 'todayDeaths', 'recovered', 'active', 'casesPerOneMillion'];

  ELEMENT_DATA: Report[];
  dataSource = new MatTableDataSource<Report>(this.ELEMENT_DATA);

  constructor(private service: CovidService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.findAllReports();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public findAllReports() {
   let resp=this.service.findAllCountriesReports();
    resp.subscribe(res => {
      this.dataSource.data = res as Report[];
      console.log("OP : "+JSON.stringify(this.dataSource.data))
    });
  }

}
