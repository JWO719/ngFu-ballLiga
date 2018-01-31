import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VereinsTabelleComponent } from './vereins-tabelle/vereins-tabelle.component';
import { VereineService } from './vereins-tabelle/vereine.service';
import { VereinsEintragComponent } from './vereins-tabelle/vereins-eintrag/vereins-eintrag.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { VereinDetailComponent } from './details/verein-detail/verein-detail.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: VereinsTabelleComponent
      },
      {
        path: 'verein',
        loadChildren: './details/details.module#DetailsModule'
      }
      ])
  ],
  declarations: [ AppComponent, VereinsTabelleComponent, VereinsEintragComponent ],
  bootstrap:    [ AppComponent ],
  providers: [VereineService]
})
export class AppModule { }
