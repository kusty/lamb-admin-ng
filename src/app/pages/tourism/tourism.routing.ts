import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoiComponent } from './poi/poi.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: 'poi',
        component: PoiComponent,
        data: {
          title: '景区管理'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourismRoutingModule { }
