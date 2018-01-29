import { Component, OnInit, Input } from '@angular/core';

import {Verein} from '../verein';

@Component({
  selector: 'app-vereins-eintrag',
  templateUrl: './vereins-eintrag.component.html',
  styleUrls: ['./vereins-eintrag.component.css']
})
export class VereinsEintragComponent implements OnInit {

  @Input() platz: number;
  @Input() bild: string;
  @Input() name: string;

  @Input() verein: Verein;

  constructor() { }

  ngOnInit() {
  }

  private getBild(): string{
    return this.bild || this.verein.bild;
  }

  private getPlatz(): number{
    return this.platz;
  }
   
  private getName(): string{
    return this.name || this.verein.name;
  }
}