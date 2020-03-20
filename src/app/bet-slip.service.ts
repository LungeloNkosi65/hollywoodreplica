import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Soccer} from './iSoccer';
import {betSlip} from './betSlip';

@Injectable({
  providedIn: 'root'
})
export class BetSlipService {
  
   finalTotal:number;
   item:any=[];
  _idCounter=1;
  _value:betSlip;


  private soccerJson="assets/Soccer.json";
  constructor(private _http:HttpClient) { }

  addToBetSlip(bet:string,punterChoice:string,odds:number){
    console.log('The method works');

 
    this._value ={
      id:this._idCounter,
      eventType:"Soccer",
      event:bet,
      selectionOdds:odds,
      punterBetChoice:punterChoice,
      stake:10,
      message:" ",
      warning:false


    };
    this.item.push(this._value);
    this._idCounter++;
  }

  checkRelatedBet(){
    for(var index =0; index<this.item.length;index++){
      const element=this.item[index];
      element.message=null;
      for(var all=0; all<this.item.length;all++){
      const element2=this.item[all];

        if(element.id==element2.id && index!=all){
          element.message="relarted bet";
        }
        
      }
    }
    console.log(this.item[index])

  }
  clearBetSlip(){ 
    this.finalTotal=0;
    this.item.splice(0,this.item.length);
  }
  removeEvent(evemt:any){
    this.item.splice(this.item.lastIndexOf(event),1);
  }

}
