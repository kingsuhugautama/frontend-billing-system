import { Component, Input, OnInit } from '@angular/core';

export interface RecentActivityCard {
    id_recent_activity: number;
    id_user: number;
    user_name: string;
    action: 'closed' | 'responded' | 'assigned';
    id_ticket: number;
    ticket_name: string;
    time_created: Date;
}

@Component({
    selector: 'app-recent-activity-card',
    templateUrl: './recent-activity-card.component.html',
    styleUrls: ['./recent-activity-card.component.css']
})
export class RecentActivityCardComponent implements OnInit {

    @Input('RecentActivityDatasource') RecentActivityDatasource: RecentActivityCard[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
