import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {VereinDetailComponent} from "./verein-detail/verein-detail.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: ':id',
      component: VereinDetailComponent
    }])
  ],
  declarations: [VereinDetailComponent]
})
export class DetailsModule { }
