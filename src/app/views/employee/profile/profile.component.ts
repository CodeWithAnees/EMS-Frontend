import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-employee-profile',
    templateUrl: './profile.component.html',
})
export class EmployeeProfileComponent implements OnInit {
    constructor() {}
    employeeDetails = {
        employeeId: '001',
        firstName: 'Aneesahmed',
        fathersName: 'Gafur',
        lastName: 'Maner',
        email: 'anees.maner@roxiler.com',
        workInformation: {
            employmentType: 'Full Time',
            department: 'Engineering',
            designation: 'Software Engineer',
            location: 'Head Office',
            employeeStatus: 'Active',
            dateOfJoining: '04-Apr-2022',
            dateOfConfirmation: '04-Apr-2022',
        },
        hierarchyInformation: {
            reportingManager: 'Sachin Kumbhojkar',
        },
        contactDetails: {
            workPhoneNumber: '23334456345',
            presentAddress: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil,
            INDIA, 415409`,
            personalMobileNumber: '23334456345',
            personalEmailAddress: 'codewithanees@gmail.com',
            permanentAddress: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil`,
        },
        personalDetails: {
            dateOfBirth: '31-Apr-1967',
            gender: 'Male',
            maritalStatus: 'Single',
            expertise: 'MERN STACK DEVELOPER',
        },
        identityInformation: {
            panNumber: 'SDFSDFSDSD',
            aadharNumber: '23334456345',
            uanNumber: '23334456345',
        },
        bankDetails: {
            accountHolderName: 'Aneesahamad Gafur Maner',
            bankName: 'SDwe ewew ewerw',
            accountType: 'Saving',
            accountNumber: '23334456345',
            ifscCode: 'sdfsdfswerwe',
        },
        dependentDetails: {
            name: 'Gafur Babu Maner',
            relationship: 'Father',
            contactNumber: '23334456345',
        },
        educationDetails: [
            {
                instituteName:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                degree: 'B.Tech',
                specialization: 'Computer Science and Engineering',
                dateOfCompletion: '2021',
            },
            {
                instituteName:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                degree: 'Diploma',
                specialization: 'Computer Science and Engineering',
                dateOfCompletion: '2018',
            },
        ],
        employmentHistory: [
            {
                companyName: 'sfasfsdfsdfsdf',
                jobTitle: 'Associate Software Engineer',
                dateOfJoining: '01-Apr-1999',
                dateOfQuitting: '31-Mar-2000',
                jobDescription: 'Full Stack Developer (MERN)',
            },
        ],
    };

    ngOnInit() {}
}
