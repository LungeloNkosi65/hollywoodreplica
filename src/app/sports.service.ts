import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { from } from 'rxjs';
import {Sport} from './iSports';
import {Soccer} from './iSoccer';


@Injectable({
  providedIn: 'root'
})
export class SportsService {
  private jsonUrl="https://localhost:44365/api/sports";
  private soccerJson="assets/Soccer.json";
  constructor(private _htt:HttpClient) {

   }

  getSports():Observable<Sport[]>{
    return this._htt.get<Sport[]>(this.jsonUrl);
  }

  getSoccer():Observable<Soccer[]>{
    return this._htt.get<Soccer[]>(this.soccerJson);
  }



  
}
