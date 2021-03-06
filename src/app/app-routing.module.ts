import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
const routes: Routes = [
  { path: '', loadChildren: './pages/welcome/welcome.module#WelcomeModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    LayoutModule,
    RouterModule.forRoot(routes, {
      initialNavigation: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
