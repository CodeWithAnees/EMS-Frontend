import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-employee-applyLeave',
    templateUrl: './applyLeave.component.html',
})
export class EmployeeApplyLeaveComponent implements OnInit {
    constructor() {}

    leaveDetails = {
        earnedLeaves: { available: 17, booked: 8 },
        leaveWithoutPay: { available: 22, booked: 0 },
        restrictedHoliday: { available: 2, booked: 0 },
    };
    holidayList = [
        {
            date: '01 January, Sunday',
            holidayName: "New Year's Day",
        },
        {
            date: '26 January, Thursday',
            holidayName: 'Republic Day',
        },
        {
            date: '07 March, Tuesday',
            holidayName: 'Holi',
        },
        {
            date: '07 April, Friday',
            holidayName: 'Good Friday',
        },
        {
            date: '22 April, Saturday',
            holidayName: 'Idul Fitr',
        },
    ];

    ngOnInit() {}
}
