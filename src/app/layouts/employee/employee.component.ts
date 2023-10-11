import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {
  constructor() {}

  employeeDetails = {
    id: '001',
    name: 'Aneesahmed Maner',
    designation: 'Software Engineer',
    department: 'Engineering',
    email: 'anees.maner@roxiler.com',
    photoUrl: 'https://www.w3schools.com/w3images/avatar2.png',
  };

  ngOnInit(): void {}
}
