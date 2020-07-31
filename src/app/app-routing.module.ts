import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PeterComponent} from './peter/peter.component';
import {AssMannComponent} from './ass-mann/ass-mann.component';

const routes: Routes = [
  { path: 'peter', component: PeterComponent },
  { path: 'assmann', component: AssMannComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
