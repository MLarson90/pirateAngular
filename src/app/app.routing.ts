import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlackComponent } from 'app/black/black.component';
import { HelpComponent } from 'app/help/help.component';
import { JackComponent } from 'app/jack/jack.component';
import { PubComponent } from 'app/pub/pub.component';
import { ShipComponent } from 'app/ship/ship.component';
import { StartComponent } from 'app/start/start.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'black',
    component: BlackComponent
  },
  {
    path:'jack',
    component: JackComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'pub',
    component: PubComponent
  },
  {
    path: 'ship',
    component: ShipComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
