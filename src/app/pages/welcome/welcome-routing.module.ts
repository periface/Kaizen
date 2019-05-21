import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { MaterialComponentsModule } from 'src/app/shared/material-components.module';

const routes: Routes = [{ path: '', component: WelcomeComponent }];

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    RouterModule.forChild(routes),
    MaterialComponentsModule,
    FlexLayoutModule
  ],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {}
