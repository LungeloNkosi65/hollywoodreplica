import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {SportsService} from '../sports.service';
import {BetSlipService} from '../bet-slip.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  soccerBets:any[];
  
  constructor(private _sport:SportsService,private _betService:BetSlipService) { 
    this._sport.getSoccer().subscribe(
      data=>{
        console.log(data);
        this.soccerBets=data;
        console.log('.....Soccer Bets ', this.soccerBets);
      }
    );
  }

  ngOnInit(): void {

  }

  addEventToBetSlip(event:string,punterChoice:string,odds:number){
    console.log('its in');
    return this._betService.addToBetSlip(event,punterChoice,odds);

  }
}
