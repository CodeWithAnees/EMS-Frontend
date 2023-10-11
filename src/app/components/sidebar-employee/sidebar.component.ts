import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-sidebar',
  templateUrl: './sidebar.component.html',
})
export class EmployeeSidebarComponent implements OnInit {
  collapseShow = 'hidden';
  sideBarData = {
    organizationName: 'Roxiler Systems',
  };
  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}
