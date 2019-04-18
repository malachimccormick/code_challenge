import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Company } from 'src/app/models/Company';


@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})

export class CompanyItemComponent implements OnInit {
  @Input() company: Company;
  @Output() deleteCompany: EventEmitter<Company> = new EventEmitter();
  @Output() editCompany: EventEmitter<Company> = new EventEmitter();
  status: string;
  companyinfo: string;
  contacts: string;
  email: string;
  performance: string;
  constructor() {}

  ngOnInit() {}
  onSubmit() {
    const company = {
      id: this.company.id,
      companyinfo: this.companyinfo,
      status: this.status,
      contacts: this.contacts,
      email: this.email,
      performance: this.performance
    };
    // when the function is called the data is passed up to the edit function in the companys
    // component
    this.editCompany.emit(company);
  }

  onDelete(company) {
    // passing up to the delete function in companys component
    this.deleteCompany.emit(company);
  }
}
isEmptyObject(obj){
  return (obj && (Object.keys(obj).length === 0));
}
