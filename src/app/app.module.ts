import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OuterappcontainerComponent } from './outerappcontainer/outerappcontainer.component';
import { WeatherwindowComponent } from './outerappcontainer/weatherwindow/weatherwindow.component';
import { UpperComponent } from './outerappcontainer/weatherwindow/upper/upper.component';
import { LowerComponent } from './outerappcontainer/weatherwindow/lower/lower.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OuterappcontainerComponent,
    WeatherwindowComponent,
    UpperComponent,
    LowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
