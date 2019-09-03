import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { NavigateComponent } from './navigate/navigate.component';
import {RoutesTable} from './routermodule/routermodule.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponentComponent,
    NavigateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RoutesTable),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
