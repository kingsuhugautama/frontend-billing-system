import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-validator',
    templateUrl: './validator.component.html',
    styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit {

    @Input('Show') Show: boolean;

    @Input('Caption') Caption: string;

    constructor() { }

    ngOnInit(): void {
    }

}
