import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import {Country} from './iCountry';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries:Country[];
  private countryUrl='https://localhost:44365/api/countries?id=';

  constructor(private _http:HttpClient) { }

  getCountries(id:number):Observable<Country[]>{
    return this._http.get<Country[]>(this.countryUrl+id);
  }
}
