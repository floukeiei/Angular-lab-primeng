import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

department = [
      {
          departmentCode: '001',
          departmentName: 'Sale'
      },
      {
          departmentCode: '002',
          departmentName: 'IT'
      },
      {
          departmentCode: '003',
          departmentName: 'HR'
      }
  ];

  selectDepartment = null;
  selectGender = 'M';
  firstName = null;
  lastName = null;

  employeeList = [];
  constructor() { }

  ngOnInit() {

    this.selectGender = 'F';
    console.warn('searchInit');

  }

  add() {

    const employee = {
      department: this.selectDepartment,
      gender: this.selectGender,
      firstName: this.firstName,
      lastName: this.lastName
    };
    this.employeeList.push(employee);
  }

}
