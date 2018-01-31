import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VereineService} from "../../vereins-tabelle/vereine.service";
import {flatMap} from "rxjs/operators";
import {Verein} from "../../vereins-tabelle/verein";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-verein-detail',
  templateUrl: 'verein-detail.component.html',
  styleUrls: ['verein-detail.component.css']
})
export class VereinDetailComponent implements OnInit {

  private verein$: Observable<Verein>;

  constructor(private route: ActivatedRoute, private vereineService: VereineService) { }

  ngOnInit() {
    this.verein$ = this.route.params.pipe(
      flatMap(param => this.vereineService.getVerein(param.id))
    )
  }

}
