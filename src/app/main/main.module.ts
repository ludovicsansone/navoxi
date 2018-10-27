import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteModule } from '../route/route.module';
import { MainRoutingModule } from './main-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FootComponent } from './components/foot/foot.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    RouteModule,
    HttpClientModule
  ],
  declarations: [NavComponent, LayoutComponent, FootComponent],
  exports: [LayoutComponent],
})
export class MainModule { }
