import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/Company';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companysUrl =
    'https://cors-anywhere.herokuapp.com/https://my-json-server.typicode.com/malachimccormick/challengeDB/company';
  constructor(private http: HttpClient) {}
  // Get the companys
  getCompanys(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companysUrl, httpOptions);
  }
  // Delete Companys
  deleteCompany(company: Company): Observable<Company> {
    console.log(company);
    const url = `${this.companysUrl}/${company.id}`;
    return this.http.delete<Company>(url, httpOptions);
  }
  // Add Company
  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.companysUrl, company, httpOptions);
  }
  // Edit Company
  editCompany(company: Company): Observable<Company> {
    console.log(company);
    const url = `${this.companysUrl}/${company.id}`;
    return this.http.put<Company>(url, company, httpOptions);
  }
}
