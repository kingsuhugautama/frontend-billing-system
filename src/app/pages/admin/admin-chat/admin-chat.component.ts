import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/component/chat/chat.component';

export interface ListChat {
    id_chat: number;
    sender_name: string;
    recent_chat: string;
    time: Date;
}

@Component({
    selector: 'app-admin-chat',
    templateUrl: './admin-chat.component.html',
    styleUrls: ['./admin-chat.component.css']
})
export class AdminChatComponent implements OnInit {

    ListChat: ListChat[];

    ChatDatasource: Chat;

    constructor() { }

    ngOnInit(): void {
        this.ListChat = [
            { id_chat: 1, sender_name: 'Kim Jisoo', recent_chat: 'My Dashboard Cannot be Open', time: new Date("March 31 2022 09:30") },
            { id_chat: 2, sender_name: 'Kim Jennie', recent_chat: 'Hi', time: new Date("March 31 2022 10:27") },
            { id_chat: 3, sender_name: 'Park Rose', recent_chat: 'My Dashboard Cannot be Open', time: new Date("March 31 2022 15:00") },
        ]

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
    }

}
