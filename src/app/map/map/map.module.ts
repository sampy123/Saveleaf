import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';

const routes: Routes = [
  {
    path: 'map',
    component: MapPage,
    children: [
      {
        path: 'food',
        loadChildren: '../food/food.module#FoodPageModule'
      },
      {
        path: 'glass',
        loadChildren: '../glass/glass.module#GlassPageModule'
      },
      {
        path: 'paper',
        loadChildren: '../paper/paper.module#PaperPageModule'
      },
      {
        path: 'plastic',
        loadChildren: '../plastic/plastic.module#PlasticPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'map/map/food'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapPage]
})
export class MapPageModule {}
