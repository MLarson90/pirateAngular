import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { JackComponent } from './jack/jack.component';
import { BlackComponent } from './black/black.component';
import { HelpComponent } from './help/help.component';
import { ShipComponent } from './ship/ship.component';
import { PubComponent } from './pub/pub.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    JackComponent,
    BlackComponent,
    HelpComponent,
    ShipComponent,
    PubComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
