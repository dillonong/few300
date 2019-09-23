import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftGivingComponent } from './gift-giving.component';
import { Routes, RouterModule } from '@angular/router';
import { FriendsComponent } from './containers/friends/friends.component';
import { HolidaysComponent } from './containers/holidays/holidays.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';

const routes: Routes = [
  {
    path: 'gifts',
    component: GiftGivingComponent,
    children: [
      {
        path: 'holidays',
        component: HolidaysComponent
      },
      {
        path: 'friends',
        component: FriendsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  declarations: [GiftGivingComponent, FriendsComponent, HolidaysComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers)
  ]
})
export class GiftGivingModule { }
