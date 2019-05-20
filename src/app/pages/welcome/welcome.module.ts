import { MaterialComponentsModule } from './../../shared/material-components.module';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  declarations: [],
  imports: [
    MaterialComponentsModule,
    CommonModule,
    WelcomeRoutingModule,
    FlexLayoutModule
  ]
})
export class WelcomeModule {}
