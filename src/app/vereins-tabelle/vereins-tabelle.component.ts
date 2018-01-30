import { Component, OnInit } from '@angular/core';
import {VereineService} from './vereine.service';

@Component({
  selector: 'app-vereins-tabelle',
  templateUrl: './vereins-tabelle.component.html',
  styleUrls: ['./vereins-tabelle.component.css']
})
export class VereinsTabelleComponent implements OnInit {

  public vereinsListe;

  constructor(public vereineService: VereineService){   }

  ngOnInit() {
    this.vereinsListe = this.vereineService.vereine;
  }

}
