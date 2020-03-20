import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CountryComponent} from './country/country.component';


const routes: Routes = [
{path:'dashboard',component:DashboardComponent},
{path:'navbar',component:NavbarComponent},
{path:'',redirectTo:'/dashboard',pathMatch:'full'},
{path:'country/:sportId',component:CountryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
