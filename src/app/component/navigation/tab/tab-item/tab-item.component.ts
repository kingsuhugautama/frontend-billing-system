import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { TabBodyComponent } from '../tab-body/tab-body.component';
import { TabLabelComponent } from '../tab-label/tab-label.component';

@Component({
    selector: 'app-tab-item',
    templateUrl: './tab-item.component.html',
    styleUrls: ['./tab-item.component.css']
})
export class TabItemComponent implements OnInit {

    @Input() Label: string;
    @Input() IsActive: boolean;

    @ContentChild(TabBodyComponent) TabBodyComp: TabBodyComponent;

    @ContentChild(TabLabelComponent) TabLabelComp: TabLabelComponent;

    constructor() { }

    ngOnInit(): void {
    }

}
