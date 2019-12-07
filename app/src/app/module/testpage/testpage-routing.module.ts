import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestpageComponent } from './testpage/testpage.component';


const routes: Routes = [{
  path: 'test',
  component: TestpageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestpageRoutingModule { }
