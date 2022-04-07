import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActionButton } from 'src/app/component/button/action-button/action-button.component';
import { RecentActivityCard } from 'src/app/component/card/recent-activity-card/recent-activity-card.component';
import { TicketCard } from 'src/app/component/card/ticket-card/ticket-card.component';
import { OffcanvasFilterComponent } from 'src/app/component/filter/offcanvas-filter/offcanvas-filter.component';

@Component({
    selector: 'app-admin-ticket',
    templateUrl: './admin-ticket.component.html',
    styleUrls: ['./admin-ticket.component.css']
})
export class AdminTicketComponent implements OnInit {

    ActionButton: ActionButton[] = [
        { tabId: 'Unassigned', id: 'filter', caption: 'Filter', icon: 'fas fa-search' },
        { tabId: 'Archive', id: 'filter', caption: 'Filter', icon: 'fas fa-search' },
    ];

    @ViewChild('OffcanvasFilter') OffcanvasFilter: OffcanvasFilterComponent;

    TicketCard: TicketCard[] = [
        {
            id: 1,
            kode_tiket: '#MK21',
            title: 'Cannot Access the System',
            description: 'Life seasons open have. Air have of. Light fill after let third darkness replenish fruitful let. Wherein set image. Creepeth said above gathered bring',
            priority: 'urgent',
            created_date: new Date()
        },
        {
            id: 2,
            kode_tiket: '#MK22',
            title: 'Refund not Initiated',
            description: 'Life seasons open have. Air have of. Light fill after let third darkness replenish fruitful let. Wherein set image. Creepeth said above gathered bring',
            priority: 'medium',
            created_date: new Date()
        },
        {
            id: 3,
            kode_tiket: '#MK23',
            title: 'Free Delivery',
            description: 'Life seasons open have. Air have of. Light fill after let third darkness replenish fruitful let. Wherein set image. Creepeth said above gathered bring',
            priority: 'low',
            created_date: new Date()
        },
        {
            id: 4,
            kode_tiket: '#MK24',
            title: 'Payment not Initiated',
            description: 'Life seasons open have. Air have of. Light fill after let third darkness replenish fruitful let. Wherein set image. Creepeth said above gathered bring',
            priority: 'low',
            created_date: new Date()
        },
    ];

    RecentActivityCard: RecentActivityCard[] = [
        {
            id_recent_activity: 1,
            id_user: 1,
            user_name: 'John Doe',
            action: 'responded',
            id_ticket: 1,
            ticket_name: 'Cannot Access the System',
            time_created: new Date()
        },
        {
            id_recent_activity: 2,
            id_user: 2,
            user_name: 'Jane Doe',
            action: 'responded',
            id_ticket: 2,
            ticket_name: 'Refund not Initiated',
            time_created: new Date()
        },
        {
            id_recent_activity: 3,
            id_user: 3,
            user_name: 'Kim Jennie',
            action: 'responded',
            id_ticket: 3,
            ticket_name: 'Payment not Initiated',
            time_created: new Date()
        },
    ];

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    onClickActionButton(id: string): void {
        switch (id) {
            case 'filter':
                break;
            default:
                break;
        }
    }

    handleClickTicketCard(ticket: TicketCard): void {
        localStorage.setItem('ticket', JSON.stringify(ticket));
        this.router.navigateByUrl('admin/ticket-detail');
    }
}
