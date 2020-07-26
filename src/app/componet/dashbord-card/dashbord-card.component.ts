import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashbord-card',
  templateUrl: './dashbord-card.component.html',
  styleUrls: ['./dashbord-card.component.css']
})
export class DashbordCardComponent implements OnInit {


  @Input('totalConfirmed')
  totalConfirmed;
  @Input('totalRecovered')
  totalRecovered;
  @Input('totalActive')
  totalActive;
  @Input('totalDeath')
  totalDeath;
  
  constructor() { }

  ngOnInit(): void {
  }

}
