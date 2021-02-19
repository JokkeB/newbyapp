import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auto } from '../auto';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-nieuw',
  templateUrl: './nieuw.page.html',
  styleUrls: ['./nieuw.page.scss'],
})
export class NieuwPage implements OnInit {
  auto: Auto = new Auto("","","","");

  constructor(private router: Router, private autoService: AutosService) { }

  ngOnInit() {
  }

opslaan() {
    this.autoService.addAuto(this.auto.id,this.auto.merk,this.auto.model,this.auto.kleur).subscribe( data => {
      this.router.navigateByUrl('');
    });
  
}
}