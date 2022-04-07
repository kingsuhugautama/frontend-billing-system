import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface TicketCard {
    id: number;
    kode_tiket: string;
    title: string;
    description: string;
    created_date: Date;
    priority: 'low' | 'medium' | 'urgent';
    status?: 'open' | 'on_progress' | 'close'
}

@Component({
    selector: 'app-ticket-card',
    templateUrl: './ticket-card.component.html',
    styleUrls: ['./ticket-card.component.css']
})
export class TicketCardComponent implements OnInit {

    @Input('TicketCard') TicketCard: TicketCard[] = [];

    @Input('ShowPriority') ShowPriority: boolean = true;

    @Output('onClickTicketCard') onClickTicketCard = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    handleClickTicketCard(ticket: TicketCard): void {
        this.onClickTicketCard.emit(ticket);
    }
}
