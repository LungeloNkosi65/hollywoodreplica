import { Component, OnInit } from '@angular/core';
import {BetSlipService} from '../bet-slip.service';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css']
})
export class BetSlipComponent implements OnInit {

  item:any=[];
  count=0;
  constructor(private _betService:BetSlipService) { }

  ngOnInit(): void {
    this.item=this._betService.item;
    console.log('bet slit items',this.item);
  }
  removeFromBetSlip(event:any){
  return this._betService.removeEvent(event);
}
clearBetslip(){
return this._betService.clearBetSlip();
}
  ngAfterContentChecked(){
    this.item=this._betService.item;
    this.count=this._betService.item.length;
    if(this.count>1){
      this._betService.checkRelatedBet();
    }
    
  }


}
