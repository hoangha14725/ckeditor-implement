import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPageComponent } from './container/test-page/test-page.component';


const routes: Routes = [{
  path: 'page',
  component: TestPageComponent,
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestpageRoutingModule { }
