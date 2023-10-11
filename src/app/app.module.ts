import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as moment from 'moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// layouts
import { AuthComponent } from './layouts/auth/auth.component';

// auth views
import { EmployeeLoginComponent } from './views/auth/employee/login/login.component';

// no layouts views
import { IndexComponent } from './views/index/index.component';

// components for views and layouts
import { EmployeeComponent } from './layouts/employee/employee.component';
import { EmployeeSidebarComponent } from './components/sidebar-employee/sidebar.component';
import { EmployeeProfileComponent } from './views/employee/profile/profile.component';
import { EmployeeTeamComponent } from './views/employee/team/team.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';

import { EmployeeCalendarComponent } from './views/employee/calendar/calendar.component';
import { EmployeeLeaveTrackerComponent } from './views/employee/leaveTracker/leaveTracker.component';
import { EmployeeApplyLeaveComponent } from './views/employee/applyLeave/applyLeave.component';

export function momentAdapterFactory() {
    return adapterFactory(moment);
}

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        IndexComponent,
        // Employee
        EmployeeLoginComponent,
        EmployeeComponent,
        EmployeeSidebarComponent,
        EmployeeProfileComponent,
        EmployeeTeamComponent,
        EmployeeCalendarComponent,
        EmployeeLeaveTrackerComponent,
        EmployeeApplyLeaveComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: momentAdapterFactory,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
