import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-tab-body',
    templateUrl: './tab-body.component.html',
    styleUrls: ['./tab-body.component.css']
})
export class TabBodyComponent implements OnInit {

    @ViewChild(TemplateRef) BodyContent: TemplateRef<any>;

    constructor() { }

    ngOnInit(): void {
    }

}
