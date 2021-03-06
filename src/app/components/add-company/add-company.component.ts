import { Component, ViewChild, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  constructor() {}
  @ViewChild('myForm') formValues;
  @Output() addCompany: EventEmitter<any> = new EventEmitter();
  status: string;
  companyinfo: string;
  contacts: string;
  email: string;
  performance: string;
  stateFlag = false;

  ngOnInit() {}
  onSubmit() {
    // this is the new company to be added. There is no ID because it is made automatically.
    const company = {
      companyinfo: this.companyinfo,
      status: this.status,
      contacts: this.contacts,
      email: this.email,
      performance: this.performance
    };
    // Loop checking to see if the object key is empty. if it is it wont send but if there is data it will
    for (const key in company) {
      if (typeof company[key] === 'undefined' || company[key] === null) {
      return this.stateFlag = !this.stateFlag;
      }
    }
    // the company variable is then passed to the addCompany function in the companys
    // component.
    this.addCompany.emit(company);
    // this resets the form after it is sent
    this.formValues.resetForm();
  }
  setClasses() {
    return {
      invalid: this.stateFlag
    };
  }
}
