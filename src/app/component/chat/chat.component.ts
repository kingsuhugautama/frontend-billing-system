import { Component, Input, OnInit } from '@angular/core';

export interface ChatDetail {
    type: 'send' | 'receive';
    content: string;
    name: string;
    time: Date;
}

export interface Chat {
    id_chat: number;
    detail: ChatDetail[];
}

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

    @Input('ChatDatasource') ChatDatasource: Chat;

    @Input('ShowHeader') ShowHeader = false;

    SenderName: string;

    constructor() { }

    ngOnInit(): void {
        const sender = [];
    }

}
