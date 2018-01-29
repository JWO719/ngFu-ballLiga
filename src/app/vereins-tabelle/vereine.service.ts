import { Injectable } from '@angular/core';
import {Verein} from './verein';

@Injectable()
export class VereineService {

  private vereine: Array<Verein> = [{
    bild: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg/2000px-Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg.png",
    name: "FC Bayern München"
  },{
    bild: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Eintracht_Frankfurt_Logo.svg/2000px-Eintracht_Frankfurt_Logo.svg.png",
    name: "Frankfurt"
  },{
    bild: "https://upload.wikimedia.org/wikipedia/de/thumb/f/f7/Bayer_Leverkusen_Logo.svg/630px-Bayer_Leverkusen_Logo.svg.png",
    name: "Leverkusen"
  }]

  constructor() { }

  getVereine(): Array<Verein>{
    return this.vereine;
  }
}