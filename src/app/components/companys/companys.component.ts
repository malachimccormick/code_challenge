import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/Company';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-companys',
  templateUrl: './companys.component.html',
  styleUrls: ['./companys.component.css']
})
export class CompanysComponent implements OnInit {
  companys: Company[];
  // initialize the services in the constructor.
  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    // subscribing to the observable.
    this.companyService.getCompanys().subscribe(companys => {
      this.companys = companys;
    });
  }
  deleteCompany(company: Company) {
    // Delete item from the UI
    this.companys = this.companys.filter(c => c.id !== company.id);
    // Delete item from server
    this.companyService.deleteCompany(company).subscribe();
  }
  addCompany(company: Company) {
    // tslint:disable-next-line:no-shadowed-variable
    this.companyService.addCompany(company).subscribe(company => {
      this.companys.push(company);
    });
  }
  editCompany(company: Company) {
    this.companyService.editCompany(company).subscribe();
    // because the server is a fake server (using a db.json file in GitHub for data) I
    // am having to manipulate the HTML array elements shown because data does not stick.
    // first I filter out the company to be edited.
    this.companys = this.companys.filter(c => c.id !== company.id);
    // Then I add the new company to the beginning of the array. If this were a real server
    // Then the data on the server will be changed and the get request would be called to get the updated data.
    this.companys.unshift(company);
  }
 }

