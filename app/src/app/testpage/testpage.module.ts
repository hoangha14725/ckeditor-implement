import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestpageRoutingModule } from './testpage-routing.module';
import { TestPageComponent } from './container/test-page/test-page.component';


@NgModule({
  declarations: [TestPageComponent],
  imports: [
    CommonModule,
    TestpageRoutingModule
  ],
  exports: [
    TestPageComponent
  ]
})
export class TestpageModule { }
