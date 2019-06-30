import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyNavComponent } from './my-nav/my-nav.component';
import { NameComponent } from './name/name.component';
import { Name2Component } from './name2/name2.component';

const routes: Routes = [
{path: ' ' , component:MyNavComponent },
 {path: 'name' , component:NameComponent},
  {path: 'name2' , component:Name2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
