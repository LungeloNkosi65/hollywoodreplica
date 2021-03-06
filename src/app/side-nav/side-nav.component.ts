import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {SportsService} from '../sports.service';
import { Sport } from '../iSports';
import {CountryService} from '../country.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  private jsonUrl="https://localhost:44365/api/sports";
  sportBets: Sport[];
  sport:string;

  constructor(private _sport:SportsService, private _countryService:CountryService) {
    this._sport.getSports().subscribe((data:any)=>{
      console.log(data);
      this.sportBets=data;
      console.log('sports bet', this.sportBets);
    })
   }
  ngOnInit(): void {
  }
  onClick() :void{
    this._countryService.clicked=true;
  }
}
