import { GlobalDataSummay } from './../../model/global-data';
import { DataServiceService } from './../../service/data-service.service';
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed=0;
  totalActive=0;
  totalDeath=0;
  totalRecovered=0;
  globalData:GlobalDataSummay[];

  pieChart:GoogleChartInterface={
    chartType:'PieChart'
  } ;
  columChart:GoogleChartInterface={
    chartType:'ColumnChart'
  } ;
  
  initChart(){
    let datatable=[];

    datatable.push(["Country","Cases"])
    this.globalData.forEach(cs=>{
      datatable.push([
        cs.country,
        cs.confirmed
      ])
    })
    console.log(datatable);
    
    this.pieChart= {
      chartType: 'PieChart',
      dataTable: datatable,
      //firstRowIsData: true,
      options: {height:500},
    };

    this.columChart= {
      chartType: 'ColumnChart',
      dataTable: datatable,
      //firstRowIsData: true,
      options: {height:500},
    };
  }
  constructor(private dataService:DataServiceService) {
    
  }

  ngOnInit(): void {
    this.dataService.getGlobalData().subscribe({
      next:(result)=>{
        // console.log(result);
        this.globalData=result;
        result.forEach(cs => {
          if(!Number.isNaN(cs.confirmed)){
            
            this.totalActive+=cs.active;
            this.totalConfirmed+=cs.confirmed;
            this.totalDeath+=cs.deaths;
            this.totalRecovered+=cs.recovered;
            // console.log('Ankit',this.totalActive+=cs.active);
          }
        });
        this.initChart();
      }
    });
    
  }


}
