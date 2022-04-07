import { Component, Input, OnInit } from '@angular/core';

export interface CustomerDetail {
    id_user: number;
    nama_customer: string;
    no_handphone: string;
}

@Component({
    selector: 'app-customer-details-card',
    templateUrl: './customer-details-card.component.html',
    styleUrls: ['./customer-details-card.component.css']
})
export class CustomerDetailsCardComponent implements OnInit {

    @Input('CustomerDetail') CustomerDetail: CustomerDetail;

    constructor() { }

    ngOnInit(): void {
    }

}
