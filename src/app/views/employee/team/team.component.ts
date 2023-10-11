import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-employee-team',
    templateUrl: './team.component.html',
})
export class EmployeeTeamComponent implements OnInit {
    constructor() {}

    teamList = [
        {
            department: 'Software Engineer',
            members: [
                {
                    id: '001',
                    name: 'Manish Mohnani',
                    photoUrl:
                        'https://source.unsplash.com/random/100x100/?img=man',
                },
                {
                    id: '002',
                    name: 'Akshay Mankar',
                    photoUrl:
                        'https://source.unsplash.com/random/100x100/?img=man',
                },
                {
                    id: '003',
                    name: 'Gouse Mohiddin',
                    photoUrl:
                        'https://source.unsplash.com/random/100x100/?img=man',
                },
                {
                    id: '004',
                    name: 'Ruturaj More',
                    photoUrl:
                        'https://source.unsplash.com/random/100x100/?img=man',
                },
            ],
        },
        {
            department: 'Software Tester',
            members: [
                {
                    id: '001',
                    name: 'Aneesahmed Maner',
                    photoUrl:
                        'https://source.unsplash.com/random/100x100/?img=man',
                },
                {
                    id: '002',
                    name: 'Aneesahmed Maner',
                    photoUrl:
                        'https://source.unsplash.com/random/100x100/?img=man',
                },
                {
                    id: '002',
                    name: 'Aneesahmed Maner',
                    photoUrl:
                        'https://source.unsplash.com/random/100x100/?img=man',
                },
            ],
        },
        {
            department: 'Software Tester',
            members: [
                {
                    id: '001',
                    name: 'Aneesahmed Maner',
                    photoUrl:
                        'https://source.unsplash.com/random/100x100/?img=man',
                },
                {
                    id: '002',
                    name: 'Aneesahmed Maner',
                    photoUrl:
                        'https://source.unsplash.com/random/100x100/?img=man',
                },
                {
                    id: '002',
                    name: 'Aneesahmed Maner',
                    photoUrl:
                        'https://source.unsplash.com/random/100x100/?img=man',
                },
            ],
        },
        {
            department: 'Software Tester',
            members: [
                {
                    id: '001',
                    name: 'Aneesahmed Maner',
                    photoUrl:
                        'https://source.unsplash.com/random/100x100/?img=man',
                },
                {
                    id: '002',
                    name: 'Aneesahmed Maner',
                    photoUrl:
                        'https://source.unsplash.com/random/100x100/?img=man',
                },
                {
                    id: '002',
                    name: 'Aneesahmed Maner',
                    photoUrl:
                        'https://source.unsplash.com/random/100x100/?img=man',
                },
            ],
        },
    ];

    ngOnInit() {}
}
