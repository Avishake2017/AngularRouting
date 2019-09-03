import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import {AboutUsComponent} from '../about-us/about-us.component';
import {NavigateComponent} from '../navigate/navigate.component';
import {ProductComponent} from '../product/product.component';
import {ContactUsComponent} from '../contact-us/contact-us.component';
import {NotFoundComponentComponent} from '../not-found-component/not-found-component.component';

export const RoutesTable : Routes = [ 
  {path:'home',component:NavigateComponent},
  {path:'product' ,component:ProductComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'**',component:NotFoundComponentComponent}
]
@NgModule({
  declarations: [NavigateComponent,ProductComponent,AboutUsComponent,ContactUsComponent,NotFoundComponentComponent],
  imports: [
    CommonModule,RouterModule
  ]

  ,exports: [NavigateComponent,ProductComponent,AboutUsComponent,ContactUsComponent,NotFoundComponentComponent]
})


export class RouterModuleModule {}
