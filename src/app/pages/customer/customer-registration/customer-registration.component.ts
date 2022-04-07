import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-customer-registration',
    templateUrl: './customer-registration.component.html',
    styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

    FormUpdateProfile!: FormGroup;

    constructor() { }

    ngOnInit(): void {
    }

}
