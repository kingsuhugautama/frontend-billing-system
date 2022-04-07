import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-tab-label',
    templateUrl: './tab-label.component.html',
    styleUrls: ['./tab-label.component.css']
})
export class TabLabelComponent implements OnInit {

    @ViewChild(TemplateRef) labelContent: TemplateRef<any>;

    @Input('Id') Id: string;

    constructor() { }

    ngOnInit(): void {
    }

}
