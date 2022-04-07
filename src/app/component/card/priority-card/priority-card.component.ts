import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-priority-card',
    templateUrl: './priority-card.component.html',
    styleUrls: ['./priority-card.component.css']
})
export class PriorityCardComponent implements OnInit {

    @Input('Priority') Priority: 'low' | 'medium' | 'urgent';

    BackgroundColor = "bg-primary";
    FontColor = "text-white";

    constructor() { }

    ngOnInit(): void {
        switch (this.Priority) {
            case 'low':
                this.BackgroundColor = 'bg-primary';
                this.FontColor = 'text-white';
                break;
            case 'medium':
                this.BackgroundColor = 'bg-warning';
                this.FontColor = 'text-black';
                break;
            case 'urgent':
                this.BackgroundColor = 'bg-danger';
                this.FontColor = 'text-white';
                break;
            default:
                break;
        }
    }

}
