import { Component, Input, OnInit } from '@angular/core';
import { ChatDetail } from '../../chat/chat.component';

@Component({
    selector: 'app-chat-receiver-card',
    templateUrl: './chat-receiver-card.component.html',
    styleUrls: ['./chat-receiver-card.component.css']
})
export class ChatReceiverCardComponent implements OnInit {

    @Input('ChatContent') ChatContent: ChatDetail;

    constructor() { }

    ngOnInit(): void {
    }

}
