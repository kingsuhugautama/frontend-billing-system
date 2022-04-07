import { Component, OnInit } from '@angular/core';
import { AssignTo } from 'src/app/component/card/assign-to-card/assign-to-card.component';
import { CustomerDetail } from 'src/app/component/card/customer-details-card/customer-details-card.component';
import { TicketCard } from 'src/app/component/card/ticket-card/ticket-card.component';
import { Chat } from 'src/app/component/chat/chat.component';

@Component({
    selector: 'app-admin-detail-ticket',
    templateUrl: './admin-detail-ticket.component.html',
    styleUrls: ['./admin-detail-ticket.component.css']
})
export class AdminDetailTicketComponent implements OnInit {

    TicketData: TicketCard;

    ChatDatasource: Chat;

    CustomerDetail: CustomerDetail;

    ListUserAssignment: AssignTo[];

    constructor() { }

    ngOnInit(): void {
        this.TicketData = JSON.parse(localStorage.getItem('ticket'));

        this.ChatDatasource = {
            id_chat: 1,
            detail: [
                {
                    type: 'send',
                    content: 'Hi',
                    name: 'Kim Jisoo',
                    time: new Date("March 31 2022 09:00")
                },
                {
                    type: 'receive',
                    content: 'Hello, what can i help you?',
                    name: 'Lalisa Manoban',
                    time: new Date("March 31 2022 09:15")
                },
                {
                    type: 'send',
                    content: 'My Dashboard Cannot be Open',
                    name: 'Kim Jisoo',
                    time: new Date("March 31 2022 09:30")
                },
                {
                    type: 'receive',
                    content: 'What is your Service Name?',
                    name: 'Lalisa Manoban',
                    time: new Date("March 31 2022 09:35")
                }
            ],
        };

        this.CustomerDetail = {
            id_user: 1,
            nama_customer: 'Kim Jisoo',
            no_handphone: '085156781165'
        };

        this.ListUserAssignment = [
            { id_user: 1, nama_user: 'John Doe', nama_role: 'DevOps' },
            { id_user: 2, nama_user: 'Jane Doe', nama_role: 'Customer Service' },
        ];
    }

}
