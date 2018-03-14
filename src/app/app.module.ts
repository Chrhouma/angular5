import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ObjetComponent } from './objet/objet.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import { DomotiqueComponent } from './domotique/domotique.component';
import { HttpClientModule } from '@angular/common/http';
import { TemperatureComponent } from './temperature/temperature.component';
import { SonComponent } from './son/son.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ObjetComponent,
    DomotiqueComponent,
    TemperatureComponent,
    SonComponent



  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
