import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanysComponent } from './components/companys/companys.component';
import { CompanyItemComponent } from './components/company-item/company-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanysComponent,
    CompanyItemComponent,
    HeaderComponent,
    AddCompanyComponent,
    AboutComponent
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
