import { DataServiceService } from './service/data-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componet/navbar/navbar.component';
import { HomeComponent } from './componet/home/home.component';
import { ContriesComponent } from './componet/contries/contries.component';
import { HttpClientModule } from '@angular/common/http';
import { DashbordCardComponent } from './componet/dashbord-card/dashbord-card.component';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContriesComponent,
    DashbordCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2GoogleChartsModule
  ],
  providers: [
    DataServiceService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
