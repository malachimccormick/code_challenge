import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanysComponent } from './components/companys/companys.component';
import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [
  { path: '', component: CompanysComponent },
  { path: 'ThankYou', component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
