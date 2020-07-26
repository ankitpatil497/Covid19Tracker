import { GlobalDataSummay } from './../model/global-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private globalDataUrl='https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/07-25-2020.csv';

  constructor(private http:HttpClient) { }

  getGlobalData(){
    return this.http.get(this.globalDataUrl,{responseType:'text'}).pipe(
      map(result=>{
        let data:GlobalDataSummay[]=[];
        let row=result.split('\n');
        let raw={};
        row.splice(0,1);
        row.forEach(row=>{
          let cols=row.split(/,(?=\S)/);
          // console.log(cols[3]);
          let cs={
            country:cols[3],
            confirmed: +cols[7],
            deaths: +cols[8],
            recovered:+cols[9],
            active:+cols[10]

          }
          let temp:GlobalDataSummay=raw[cs.country];
          if(temp){
            temp.active=cs.active+temp.active
            temp.confirmed=cs.confirmed+temp.confirmed
            temp.deaths=cs.deaths+temp.deaths
            temp.recovered=cs.recovered+temp.recovered
            raw[cs.country]=temp;
          }else{
            raw[cs.country]=cs;
          }

        })
        // console.log(raw);
        
       return <GlobalDataSummay[]>Object.values(raw);
      })
    )
  }
}
