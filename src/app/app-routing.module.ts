import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'house', pathMatch: 'full' },
  {
    path: 'house',
    loadChildren: () => import('./list-house/list-house.module').then((m) => m.ListHouseModule),
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
