import { NgModule } from '@angular/core';
import { CollapseMenuComponent } from './collapse-menu/collapse-menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SplitLayoutComponent } from './split-layout/split-layout.component';

@NgModule({
  declarations: [
    CollapseMenuComponent, 
    NavigationBarComponent, 
    SplitLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports:[
    CollapseMenuComponent,
    NavigationBarComponent,
    SplitLayoutComponent
  ]
})
export class CommonAppModule { }
