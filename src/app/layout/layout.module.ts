import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from './../shared/material-components.module';
import { NgModule } from '@angular/core';
import { TopMenuComponent } from './menu/top-menu/top-menu.component';

@NgModule({
  imports: [MaterialComponentsModule, RouterModule],
  declarations: [TopMenuComponent],
  exports: [TopMenuComponent],
  providers: []
})
export class LayoutModule {}
