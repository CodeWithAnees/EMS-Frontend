import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// layouts
import { AuthComponent } from './layouts/auth/auth.component';

// auth views
import { EmployeeLoginComponent } from './views/auth/employee/login/login.component';

// no layouts views
import { IndexComponent } from './views/index/index.component';
import { EmployeeComponent } from './layouts/employee/employee.component';
import { EmployeeProfileComponent } from './views/employee/profile/profile.component';
import { EmployeeTeamComponent } from './views/employee/team/team.component';
import { EmployeeCalendarComponent } from './views/employee/calendar/calendar.component';
import { EmployeeLeaveTrackerComponent } from './views/employee/leaveTracker/leaveTracker.component';
import { EmployeeApplyLeaveComponent } from './views/employee/applyLeave/applyLeave.component';

const routes: Routes = [
    {
        path: 'employee',
        component: EmployeeComponent,
        children: [
            { path: 'profile', component: EmployeeProfileComponent },
            { path: 'team', component: EmployeeTeamComponent },
            { path: 'calendar', component: EmployeeCalendarComponent },
            { path: 'leaveTracker', component: EmployeeLeaveTrackerComponent },
            { path: 'applyLeave', component: EmployeeApplyLeaveComponent },
        ],
    },
    // auth views
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: 'employee',
                children: [
                    {
                        path: 'login',
                        pathMatch: 'full',
                        component: EmployeeLoginComponent,
                    },
                ],
            },
            { path: '', redirectTo: 'employee/login', pathMatch: 'full' },
        ],
    },
    { path: '', component: IndexComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
