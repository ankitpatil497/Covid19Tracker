import { GlobalDataSummay } from './../../model/global-data';
import { DataServiceService } from './../../service/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contries',
  templateUrl: './contries.component.html',
  styleUrls: ['./contries.component.css']
})
export class ContriesComponent implements OnInit {


  totalConfirmed=0;
  totalActive=0;
  totalDeath=0;
  totalRecovered=0;
  globalData:GlobalDataSummay[]=[];
  data:GlobalDataSummay[];
  countries:string[]=[];
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getGlobalData().subscribe(result=>{
      this.data=result;
      this.data.forEach(cs=>{
        this.countries.push(cs.country)
      })
    })
  }
  updateValue(country:string){
    console.log(country);
    this.data.forEach(cs=>{
      if(cs.country==country){
        this.totalActive+=cs.active;
            this.totalConfirmed+=cs.confirmed;
            this.totalDeath+=cs.deaths;
            this.totalRecovered+=cs.recovered;
      }

    })
    
  }

}
