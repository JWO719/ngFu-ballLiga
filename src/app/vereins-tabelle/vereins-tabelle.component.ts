import { Component, OnInit } from '@angular/core';
import {Verein} from './verein';
import {VereineService} from './vereine.service';

@Component({
  selector: 'app-vereins-tabelle',
  templateUrl: './vereins-tabelle.component.html',
  styleUrls: ['./vereins-tabelle.component.css']
})
export class VereinsTabelleComponent implements OnInit {
  
  constructor(public vereineService: VereineService){   }

  ngOnInit() {
  }

}