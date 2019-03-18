import { CommonAppModule } from './common/common-app.module';
import { BrowserModule } from '@angular/platform-browser';;
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
