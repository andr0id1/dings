import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PeterComponent} from './peter/peter.component';
import {CommentsService} from './service/comments.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AssMannComponent} from './ass-mann/ass-mann.component';
import {OrderService} from '../generated/api/order.service';
import {environment} from '../environments/environment';
import {BASE_PATH} from 'src/generated/variables';
import {ApiModule} from 'src/generated/api.module';

@NgModule({
  declarations: [
    AppComponent,
    PeterComponent,
    AssMannComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ApiModule
  ],
  providers: [
    CommentsService,
    OrderService,
    {provide: BASE_PATH, useValue: environment.apiEndpoint},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
