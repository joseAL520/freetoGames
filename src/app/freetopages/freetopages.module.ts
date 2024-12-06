import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreetopagesRoutingModule } from './freetopages-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
    IndexComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    FreetopagesRoutingModule
  ]
})
export class FreetopagesModule { }
