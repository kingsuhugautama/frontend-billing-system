import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ActionButton {
    tabId?: string;
    id: string;
    icon: string;
    caption: string;
}

@Component({
    selector: 'app-action-button',
    templateUrl: './action-button.component.html',
    styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {

    @Input('ActionButton') ActionButton: ActionButton[];

    @Output('onClickButton') onClickButton = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    handleClickButton(id: string): void {
        this.onClickButton.emit(id);
    }
}
