import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  @Output() addCompany: EventEmitter<any> = new EventEmitter();
    status: string;
    companyinfo: string;
    contacts: string;
    email: string;
    performance: string;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    // this is the new company to be added. There is no ID because it is made automatically.
    const company = {
      companyinfo: this.companyinfo,
      status: this.status,
      contacts: this.contacts,
      email: this.email,
      performance: this.performance
    };
    // the company variable is then passed to the addCompany function in the companys
    // component.
    this.addCompany.emit(company);
  }
}
