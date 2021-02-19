import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auto } from './auto';
import { AutosService } from './autos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  autos: Auto[] = [];

  constructor(private autosService: AutosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.autosService.getAuto().subscribe( data => this.autos = data);
      }

  addAuto(){
    
  }
}
