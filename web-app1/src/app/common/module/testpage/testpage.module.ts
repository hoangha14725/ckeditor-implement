import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestpageRoutingModule } from './testpage-routing.module';
import { TestpageComponent } from './testpage.component';
import { SharedModuleModule } from 'src/app/common/shared-module/shared-module.module';


@NgModule({
  declarations: [TestpageComponent],
  imports: [
    CommonModule,
    TestpageRoutingModule,
    SharedModuleModule
  ],
  exports: [TestpageComponent]
})
export class TestpageModule { }
