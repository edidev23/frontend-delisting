import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHouseComponent } from './list-house.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListHouseComponent,
  },
  {
    path: ':slug',
    component: DetailComponent,
  },
];

@NgModule({
  declarations: [
    ListHouseComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ListHouseModule { }
