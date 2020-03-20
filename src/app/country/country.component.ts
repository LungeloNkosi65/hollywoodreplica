import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Country } from '../iCountry';
import {CountryService} from '../country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

 countries:Country[];
  constructor(private _countryService:CountryService, private route:ActivatedRoute) {
    this.getCountries();
   }

  getCountries(){
    var sportId =+this.route.snapshot.paramMap.get('sportId');
    return this._countryService.getCountries(sportId).subscribe((data:any)=>{
      console.log(data);
      this.countries=data;
      console.log('..... country results', this.countries);
    });
  }
  ngOnInit(): void {
  }


}
