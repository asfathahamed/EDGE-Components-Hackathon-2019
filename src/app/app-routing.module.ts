import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CompOneComponent } from './comp-one/comp-one.component';

const routes: Routes = [
  {
    path: '',
    component: CompOneComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: CompOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
