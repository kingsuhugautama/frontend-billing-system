import { Component, Input, OnInit } from '@angular/core';
import { ChatDetail } from '../../chat/chat.component';

@Component({
    selector: 'app-chat-sender-card',
    templateUrl: './chat-sender-card.component.html',
    styleUrls: ['./chat-sender-card.component.css']
})
export class ChatSenderCardComponent implements OnInit {

    @Input('ChatContent') ChatContent: ChatDetail;

    constructor() { }

    ngOnInit(): void {
    }

}
