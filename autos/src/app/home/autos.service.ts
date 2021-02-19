import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auto } from './auto';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autos: Auto[] = [];

  constructor(private http: HttpClient) { }

  getAuto(): Observable<Auto[]> {
    return this.http.get<Auto[]>("https://newbyapp.herokuapp.com/autos");
  }

  addAuto(id: string, merk: string, model: string, kleur: string){
    let auto: Auto = new Auto(id, merk, model,kleur);
    // bepalen maximum id
    let maxid = 0;
    this.autos.map(
      auto => {
        if( parseInt(auto.id) > maxid){
          maxid = parseInt(auto.id);
        }
      }
    );
    // id +1
    maxid++;
    // id zetten van object
    auto.id = maxid.toString();
    return this.http.post("https://newbyapp.herokuapp.com/nieuw", auto);
  }
}