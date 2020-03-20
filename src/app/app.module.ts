import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BetSlipComponent } from './bet-slip/bet-slip.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

import { from } from 'rxjs';
import { CountryComponent } from './country/country.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    DashboardComponent,
    BetSlipComponent,
    FooterComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
