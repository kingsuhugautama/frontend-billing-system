import { Component, Input, OnInit } from '@angular/core';

export interface AssignTo {
    id_user: number;
    nama_user: string;
    nama_role: string;
}

@Component({
    selector: 'app-assign-to-card',
    templateUrl: './assign-to-card.component.html',
    styleUrls: ['./assign-to-card.component.css']
})
export class AssignToCardComponent implements OnInit {

    @Input('AssignToDatasource') AssignToDatasource: AssignTo[];

    constructor() { }

    ngOnInit(): void {
    }

}
