import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PeterComponent} from './peter/peter.component';
import {CommentsService} from './service/comments.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { AssMannComponent } from './ass-mann/ass-mann.component';
import {OrderService} from '../generated/api/order.service';

@NgModule({
  declarations: [
    AppComponent,
    PeterComponent,
    AssMannComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CommentsService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
